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

    //document.getElementById("footer").getElementsByTagName("img")[0].src = "aaaaa.gif";
}