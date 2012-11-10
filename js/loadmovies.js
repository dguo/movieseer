function load_movies() {

    movies = []
    
    movies[0] = new Array();
    
    movies[0]['thumbnail'] = "http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg"
    
    
    
    document.getElementById("thumbnail_1").src=movies[0]['thumbnail'];
    document.getElementById("thumbnail_2").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    document.getElementById("thumbnail_3").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    document.getElementById("thumbnail_4").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";
    document.getElementById("thumbnail_5").src="http://content6.flixster.com/movie/11/13/43/11134356_mob.jpg";

    document.getElementById("large_poster").src="http://content6.flixster.com/movie/11/13/43/11134356_det.jpg";
    
}