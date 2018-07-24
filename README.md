# MovieSeer

MovieSeer was my submission for [HackPrinceton](https://hackprinceton.com/) 2012.
It was a website that would recommend movies for you to watch. The
recommendations were generated using your ratings for movies you've already
seen. It used the [Rotten Tomatoes](https://www.rottentomatoes.com/) API to get
movie metadata and would try to find movies that are similar to ones you like.
So it was a very simplistic [content-based
filtering](https://en.wikipedia.org/wiki/Recommender_system#Content-based_filtering)
approach.

It won the "Best Use of [MongoDB](https://en.wikipedia.org/wiki/MongoDB)"
award. I still have the check that I got for it, though I believe Mongo got rid
of the monetary prize the next time they sponsored the hackathon, so they
probably figured it wasn't a great investment.

Note that the Rotten Tomatoes API endpoint that I used is no longer available.
There's still an [API](https://developer.fandango.com/rotten_tomatoes), but it
requires an application for access, and it doesn't provide movie metadata.

## Fun facts

I created my GitHub account for this hackathon.

I volunteered to be the first person to present my project for judging. During
my live demo, I hit the button to get recommendations, and...it hung for
several seconds (though it felt like an eternity). The results eventually
appeared. I later realized I had forgotten to remove a `print` statement that
ran in a loop. If you look at the commit history, there's a commit with a
"demo version (need to remove print statements)" messsage. Lesson learned!

## License

MIT
