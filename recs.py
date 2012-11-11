from pymongo import Connection
import random

# function that takes in a dictionary of likes and dislikes
# and returns a list of five movies
def get_recs(info):
    
    likes = info["like"]
    dislikes = info["dislike"]
    
    likes = likes.split(",")
    dislikes = dislikes.split(",")
    
    print likes
    print dislikes
    
    recs = {}
    
    movie_list = []

    # connect to Mongo, and open the "movies" table
    connection = Connection()
    db = connection.movies_database
    movies = db.movies 
    
    # if there are any preferences, use them to recommend movies
    if len(likes) > 1 or len(dislikes) > 1:
        # first populate the list with five random movies
        i = 0
        for movie in movies.find( {"average_score": {"$gt": 80}} ):
          if i < 5:
            movie_list.append(movie)
            i += 1
          else:
            if random.random() > 0.95 and movie['year'] > 2000:
                randomIndex = random.randint(0, 4)
                movie_list.pop(randomIndex)
                movie_list.append(movie)
                
        # then replace the first three with preferences
        for movie in movies.find():
            pref_score = 0;
            if movie['average_score'] in likes:
                pref_score += 1
            if movie['average_score'] in dislikes:
                pref_score -= 1
            if movie['average_score'] in likes:
                pref_score += 1
            if movie['average_score'] in dislikes:
                pref_score -= 1

    
    # no prefs. get five random, high score movies
    else:
        i = 0
        for movie in movies.find( {"average_score": {"$gt": 80}} ):
          if i < 5:
            movie_list.append(movie)
            i += 1
          else:
            if random.random() > 0.95 and movie['year'] > 2000:
                randomIndex = random.randint(0, 4)
                movie_list.pop(randomIndex)
                movie_list.append(movie)
        
    recs['movies'] = movie_list
        
    return recs