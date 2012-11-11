from pymongo import Connection

# function that takes in a dictionary of likes and dislikes
# and returns a list of five movies
def get_recs(info):
    
    
    likes = info['like']
    dislikes = info['dislike']
    
    recs = {}
    
    movie_list = []

    # connect to Mongo, and open the "movies" table
    connection = Connection()
    db = connection.movies_database
    movies = db.movies 
    
    # if there are any preferences, use them to recommend movies
    #if len(likes) > 0 or len(dislikes) > 0:
    #    pass
    
    # no prefs. get five random, high score movies
    #else:
    #    pass
    
    i = 0
    
    for movie in movies.find({"average_score": 91}):
        if i < 5:
            movie_list.append(movie)
            i += 1
        else:
            break
        
    recs['movies'] = movie_list

        
    return recs