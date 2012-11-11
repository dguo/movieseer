from bs4 import BeautifulSoup
import urllib2
import feedparser
from pymongo import Connection
import json
from db_builder import *
from recs import get_recs
import random

connection = Connection()
db = connection.movies_database
movies = db.movies

print movies.count()

i = 0


for movie in movies.find():
    if movie['posters']['thumbnail'] == 'http://images.rottentomatoescdn.com/images/redesign/poster_default.gif':
    #if movie['title'] == 'Call Me Kuchu':
        print movie['title']
        movies.remove({
            '_id': movie['_id']
        })
        i += 1
        
print i

#for movie in movies.find():
   # print movie['average_score']
    

#titles = get_movie_list(2000, 2012)

#print len(titles)