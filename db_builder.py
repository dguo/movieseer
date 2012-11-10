from bs4 import BeautifulSoup
import urllib2
import feedparser
from pymongo import Connection
import json
import time

# function that takes the title of a movie and returns a link to a trailer for the movie on Youtube
def title_to_YT_link(title):
    youtube_url_begin = 'https://gdata.youtube.com/feeds/api/videos?q='
    youtube_url_end = '+trailer&max-results=1&v=2'
    query = title.replace(' ', '+')
    query = youtube_url_begin + query + youtube_url_end
    feed = feedparser.parse(query)
    if len(feed.entries) > 0:
        return feed.entries[0].link.replace('&feature=youtube_gdata', '').replace('https', 'http')
    else:
        print "YT search fail: " + title
        return ""

# function that searches for a given movie in RT and returns a dictionary containing all the relevant info
def RT_to_dict(title):
    rt_key = 'gn5qg54jghhap5v7b4ssa39h'
    rt_url_base_start = 'http://api.rottentomatoes.com/api/public/v1.0/movies.json?apikey=' + rt_key + '&q='
    rt_url_base_end = '&page_limit=1'
    query = title.replace(' ', '+')
    url = rt_url_base_start + query + rt_url_base_end
    
    page = urllib2.urlopen(url)
    info = json.loads(page.read())
     
    # if a match has been found, get its full info (including genres) and return the dictionary
    if len(info['movies']) > 0:
        self_url = info['movies'][0]['links']['self']
        self_url = self_url + '?apikey=' + rt_key
        self_page = urllib2.urlopen(self_url)
        self_info = json.loads(self_page.read())
        
        # add the average score and the id for Mongo to the dictionary
        self_info['average_score'] = (self_info['ratings']['critics_score'] + self_info['ratings']['audience_score'] ) / 2
        self_info['_id'] = self_info['id']
        
        # add the Youtube link and video ad to the dictionary
        YT_link = title_to_YT_link(self_info['title'])
        YT_id = YT_link.replace('http://www.youtube.com/watch?v=', '')
        self_info['YT_link'] = YT_link
        self_info['YT_id'] = YT_id
        
        return self_info
    
    else:
        print "RT search fail: " + title
        dummy = {}
        return dummy
         
# return a list containing titles of movies made from start_year to end_year (excluding end_year)
def get_movie_list(start_year, end_year):
    
    titles = []
    base_url = 'http://en.wikipedia.org/wiki/List_of_American_films_of_'
    
    for year in range(start_year, end_year):
        
        # open the Wikipedia page and turn it into soup
        opener = urllib2.build_opener()
        opener.addheaders = [('User-agent', 'Mozilla/5.0')]
        infile = opener.open(base_url + str(year))
        page = infile.read()
        soup = BeautifulSoup(page)
        
        for movie in soup.find_all('i'):
            title = movie.get_text().encode('utf-8')
            if title not in titles:
                titles.append(title)
                
    return titles

# main function
def main():

    # connect to Mongo, and open the "movies" table
    connection = Connection()
    db = connection.movies_database
    movies = db.movies
    
    titles = get_movie_list(1995, 1996)
    
    # search for each movie in RT, and add the data to Mongo
    for title in titles:
        movie_info = RT_to_dict(title)
        # make sure the movie was found in RT
        if len(movie_info) > 0:
            # make sure the movie is not already in Mongo
            current_id = movie_info['_id']
            if movies.find({"_id": current_id}).count() == 0:
                movies.insert(movie_info)
                print "added to Mongo: " + movie_info['title']
        # RT api allows for a maximum of 10 calls per second    
        time.sleep(0.1)
    
if __name__ == '__main__':
    main()