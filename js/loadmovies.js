function load_movies() {

    movies = []
    
    movies[0] = new Array();
    
    movies[0]['thumbnail'] = "http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    
    console.log("test1");
    
    // thumbnails
    document.getElementById("thumbnail_1").src=movies[0]['thumbnail'];
    document.getElementById("thumbnail_2").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    document.getElementById("thumbnail_3").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    document.getElementById("thumbnail_4").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    document.getElementById("thumbnail_5").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";

    
    // large poster
    document.getElementById("large_poster").src="http://content6.flixster.com/movie/11/13/43/11134356_det.jpg";
    

    
    // YT link
    document.getElementById("YT_link").src="http://www.youtube.com/embed/JcpWXaA2qeg?rel=0";
    
    // title
    document.getElementById("title").innerHTML = "Toy Story 3"
    
    // summary
    document.getElementById("summary").innerHTML = "Pixar returns to their first success with Toy Story 3. The movie begins with Andy leaving for college and donating his beloved toys -- including Woody (Tom Hanks) and Buzz (Tim Allen) -- to a daycare. While the crew meets new friends, including Ken (Michael Keaton), they soon grow to hate their new surroundings and plan an escape. The film was directed by Lee Unkrich from a script co-authored by Little Miss Sunshine scribe Michael Arndt. ~ Perry Seibert, RoviPixar returns to their first success with Toy Story 3. The movie begins with Andy leaving for college and donating his beloved toys -- including Woody (Tom Hanks) and Buzz (Tim Allen) -- to a daycare. While the crew meets new friends, including Ken (Michael Keaton), they soon grow to hate their new surroundings and plan an escape. The film was directed by Lee Unkrich from a script co-authored by Little Miss Sunshine scribe Michael Arndt. ~ Perry Seibert, Rovi";

    //document.getElementById("footer").getElementsByTagName("img")[0].src = "aaaaa.gif";
}