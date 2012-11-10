from bs4 import BeautifulSoup
import urllib2
import feedparser
from pymongo import Connection
import json
from db_builder import *

connection = Connection()
db = connection.movies_database
movies = db.movies

print movies.count()

#for movie in movies.find():
   # print movie['average_score']
    

#titles = get_movie_list(2000, 2012)

#print len(titles)