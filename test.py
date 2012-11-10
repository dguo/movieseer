from bs4 import BeautifulSoup
import urllib2
import feedparser
from pymongo import Connection
import json
from db_builder import *

connection = Connection()
db = connection.movies_database
movies = db.movies

for movie in movies.find():
    print movie

print "\n"

for movie in movies.find():
    movies.remove(movie)
    
for movie in movies.find():
    print movie
    

titles = get_movie_list(2000, 2012)

print len(titles)