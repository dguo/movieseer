var movies;

var info = {"dislike": '', "like": ''};

info["dislike"] = info["dislike"] + "asdl;fjk";

var currIndex = 0;

var currKey = "cast,";
var currValue = "test2";


$(document).ready(function() {
    
    $('#startover').on("click", function() {
        info = {"dislike": "", "like": ""};
        restart();
    });
    
    $('#newresults').on("click", function() {
        restart();
    });
    
    $('#dislike').on("click", function() {
        // add the current key-value pair to the dislike dictionary
        if (currKey != "empty" && currKey in info["dislike"]) {
            info["dislike"][currKey].push(currValue);
        }
        else if (currKey != "empty") {
            info["dislike"][currKey] = [currValue];
        }
    });
        
    $('#like').on("click", function() {
        console.log(info["dislike"][currKey]);
        // add the current key-value pair to the like dictionary
    });
    
    $('#thumbnail_1').on("click", function() {
        load_new(0);
        currIndex = 0;
    });
    
    $('#thumbnail_2').on("click", function() {
        load_new(1);
        currIndex = 1;
    });
    
    $('#thumbnail_3').on("click", function() {
        load_new(2);
        currIndex = 2;
    });
    
    $('#thumbnail_4').on("click", function() {
        load_new(3);
        currIndex = 3;
    });
    
    $('#thumbnail_5').on("click", function() {
        load_new(4);
        currIndex = 4;
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
    if (data['movies'][0]['synopsis'].length > 10) {
        document.getElementById("summary").innerHTML = data['movies'][0]['synopsis'];
    }
    else {
        document.getElementById("summary").innerHTML = data['movies'][0]['critics_consensus'];
    }
    
    // rating
    document.getElementById("rating").innerHTML = data['movies'][0]['average_score'];
    
    // year
    document.getElementById("year").innerHTML = data['movies'][0]['year'];
    
    // time
    document.getElementById("time").innerHTML = data['movies'][0]['runtime'] + "m"; 
    
    // director
    document.getElementById("director").innerHTML = data['movies'][0]['abridged_directors'][0]['name'];
    
    // studio
    document.getElementById("studio").innerHTML = data['movies'][0]['studio'];
    
    // genre
    document.getElementById("genre").innerHTML = data['movies'][0]['genres'][0];
    
    currIndex = 0;
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
    
    // rating
    document.getElementById("rating").innerHTML = movies['movies'][i]['average_score'];
    
    // year
    document.getElementById("year").innerHTML = movies['movies'][i]['year'];
    
    // time
    document.getElementById("time").innerHTML = movies['movies'][i]['runtime'] + "m";
    
    // director
    document.getElementById("director").innerHTML = movies['movies'][i]['abridged_directors'][0]['name'];
    
    // studio
    document.getElementById("studio").innerHTML = movies['movies'][i]['studio'];
    
    // genre
    document.getElementById("genre").innerHTML = movies['movies'][i]['genres'][0];
}