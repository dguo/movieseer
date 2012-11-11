from pymongo import Connection
import random

# function that takes in a dictionary of likes and dislikes
# and returns a list of five movies
def get_recs(info):
    
    likes = info["like"]
    dislikes = info["dislike"]
    
    likes = likes.split(",")
    dislikes = dislikes.split(",")
    
    likes.remove("")
    dislikes.remove("")
    
    recs = {}
    
    movie_list = []

    # connect to Mongo, and open the "movies" table
    connection = Connection()
    db = connection.movies_database
    movies = db.movies 
    
    # if there are any preferences, use them to recommend movies
    if len(likes) > 0 or len(dislikes) > 0:
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
        
        scores = [0, 0, 0]
                
        # then replace the first three with preferences
        for movie in movies.find():
            pref_score = 0;
            if movie['average_score'] in likes:
                pref_score += 1
            if movie['average_score'] in dislikes:
                pref_score -= 1
                
            if movie['year'] in likes:
                pref_score += 1
            if movie['year'] in dislikes:
                pref_score -= 1
                
            if (str(movie['runtime']) + "m") in likes:
                pref_score += 1
            if (str(movie['runtime']) + "m") in dislikes:
                pref_score -= 1
               
            if 'abridged_directors' in movie.keys():    
                if len(movie['abridged_directors']) > 0:
                    if movie['abridged_directors'][0]['name'] in likes:
                        pref_score += 1
                if len(movie['abridged_directors']) > 0:
                    if movie['abridged_directors'][0]['name'] in dislikes:
                        pref_score -= 1
                    
            if movie['genres'][0] in likes:
                pref_score += 1
            if movie['genres'][0] in dislikes:
                pref_score -= 1
            
            if 'studio' in movie.keys():    
                if movie['studio'] in likes:
                    pref_score += 1
                if movie['studio'] in dislikes:
                    pref_score -= 1            
                
            for person in movie['abridged_cast']:
                if person['name'] in likes:
                    pref_score += 1
                if person['name'] in dislikes:
                    pref_score -= 1
            
            if pref_score > scores[0]:
                scores[0] = pref_score
                movie_list.pop(0)
                movie_list.insert(0, movie)
                
            elif pref_score == scores[0]:
                if (random.random() > 0.5):
                    movie_list.pop(0)
                    movie_list.insert(0, movie)
                
            elif pref_score > scores[1]:
                scores[1] = pref_score
                movie_list.pop(1)
                movie_list.insert(1, movie)
                
            elif pref_score == scores[1]:
                if (random.random() > 0.5):
                    movie_list.pop(1)
                    movie_list.insert(1, movie)
                    
            elif pref_score > scores[2]:
                scores[2] = pref_score
                movie_list.pop(2)
                movie_list.insert(2, movie)
                
            elif pref_score == scores[2]:
                if (random.random() > 0.5):
                    movie_list.pop(2)
                    movie_list.insert(2, movie)
            
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