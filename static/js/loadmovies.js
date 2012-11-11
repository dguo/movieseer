var movies;

var info = {"dislike": "", "like": ""};

var highlightIndex = 0;

$(document).ready(function() {
    
    $('#startover').on("click", function() {
        info = {"dislike": "", "like": ""};
        restart();
    });
    
    $('#thumbnail_1').on("click", function() {
        load_new(0);
    });
    
    $('#thumbnail_2').on("click", function() {
        load_new(1);
    });
    
    $('#thumbnail_3').on("click", function() {
        load_new(2);
    });
    
    $('#thumbnail_4').on("click", function() {
        load_new(3);
    });
    
    $('#thumbnail_5').on("click", function() {
        load_new(4);
    });
    
    restart();
});

var restart = function() { $.post('../../process_data', info, function(data) {
    // add thumbnails
    for (var i = 1; i < 6; i++) {
        var id = "thumbnail_" + i.toString();
        document.getElementById(id).src = data['movies'][i - 1]['posters']['thumbnail'];
    }
    // add large poster
    document.getElementById("large_poster").src = data['movies'][0]['posters']['detailed'];
    // add Youtube video    
    var link = "http://www.youtube.com/embed/" + data['movies'][0]['YT_id'] + "?rel=0";
    document.getElementById("YT_link").src = link;
    
    // title
    document.getElementById("title").innerHTML = data['movies'][0]['title'];
    
    // summary
    document.getElementById("summary").innerHTML = data['movies'][0]['synopsis'];
    
    movies = data;
    });
};

function load_new(i) {
    // add large poster
    document.getElementById("large_poster").src = movies['movies'][i]['posters']['detailed'];
    
    // add Youtube video    
    var link = "http://www.youtube.com/embed/" + movies['movies'][i]['YT_id'] + "?rel=0";
    document.getElementById("YT_link").src = link;
    
    // title
    document.getElementById("title").innerHTML = movies['movies'][i]['title'];
    
    // summary
    if (movies['movies'][i]['synopsis'].length > 10) {
        document.getElementById("summary").innerHTML = movies['movies'][i]['synopsis'];
    }
    else {
        document.getElementById("summary").innerHTML = movies['movies'][i]['critics_consensus'];
    }
}