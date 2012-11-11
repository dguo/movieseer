var movies;

var info = {"dislike": "", "like": ""};

var currIndex = 0;

var currValue = "empty";
var currID = "empty";

$(document).ready(function() {
    
    $('#startover').on("click", function() {
        info["dislike"] = "";
        info["like"] = "";
        $('#like_box').empty();
        $('#dislike_box').empty();
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });
        var timeoutID = setTimeout(restart, 500);
        var timeoutID = setTimeout(continueExecution, 500);
    });
    
    $('#newresults').on("click", function() {
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });
        var timeoutID = setTimeout(restart, 500);
        var timeoutID = setTimeout(continueExecution, 500);
    });
    
    $('#rating').on("click", function() {
        currValue = document.getElementById("rating").innerHTML;
        currID = "rating";
        document.getElementById("rating").className = "badge badge-info";
    });
    
    $('#year').on("click", function() {
        currValue = document.getElementById("year").innerHTML;
        currID = "year";
        document.getElementById("year").className = "badge badge-info";
    });
    
    $('#time').on("click", function() {
        currValue = document.getElementById("time").innerHTML;
        currID = "time";
        document.getElementById("time").className = "badge badge-info";
    });
    
    $('#director').on("click", function() {
        currValue = document.getElementById("director").innerHTML;
        currID = "director";
        document.getElementById("director").className = "badge badge-info";
    });
    
    $('#genre').on("click", function() {
        currValue = document.getElementById("genre").innerHTML;
        currID = "genre";
        document.getElementById("genre").className = "badge badge-info";
    });
    
    $('#studio').on("click", function() {
        currValue = document.getElementById("studio").innerHTML;
        currID = "studio";
        document.getElementById("studio").className = "badge badge-info";
    });
    
    $('#cast1').on("click", function() {
        currValue = document.getElementById("cast1").innerHTML;
        currID = "cast1";
        document.getElementById("cast1").className = "badge badge-info";
    });
    
    $('#cast2').on("click", function() {
        currValue = document.getElementById("cast2").innerHTML;
        currID = "cast2";
        document.getElementById("cast2").className = "badge badge-info";
    });
    
    $('#dislike').on("click", function() {
        if (currValue != "empty") {
            info["dislike"] = info["dislike"] + currValue + ",";
            document.getElementById(currID).className = "badge";
            document.getElementById("dislike_box").innerHTML += '<span class="badge" style = "margin-top: 15px;">' + currValue + '</span><br>';
            currValue = "empty";
            currID = "empty";
        }
    });
        
    $('#like').on("click", function() {
        if (currValue != "empty") {
            info["like"] = info["like"] + currValue + ",";
            document.getElementById(currID).className = "badge";
            document.getElementById("like_box").innerHTML += '<span class="badge" style = "margin-top: 15px;">' + currValue + '</span><br>';
            currValue = "empty";
            currID = "empty";
        }
    });
    
    $('#thumbnail_1').on("click", function() {
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });
        currIndex = 0;
        var timeoutID = setTimeout(continueExecution, 500);
    });
    
    $('#thumbnail_2').on("click", function() {
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });
        currIndex = 1;
        var timeoutID = setTimeout(continueExecution, 500);
    });
    
    $('#thumbnail_3').on("click", function() {
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });       
        currIndex = 2;
        var timeoutID = setTimeout(continueExecution, 500);
    });
    
    $('#thumbnail_4').on("click", function() {
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });
        currIndex = 3;
        var timeoutID = setTimeout(continueExecution, 500);
    });
    
    $('#thumbnail_5').on("click", function() {
        $('#hero').fadeOut('slow', function() {
        });
        $('#YT_link').fadeOut('slow', function() {
        });
        currIndex = 4;
        var timeoutID = setTimeout(continueExecution, 500);
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
    
    // cast
    document.getElementById("cast1").innerHTML = data['movies'][0]['abridged_cast'][0]['name'];
    document.getElementById("cast2").innerHTML = data['movies'][0]['abridged_cast'][1]['name'];
    
    
    
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
    
    // cast
    document.getElementById("cast1").innerHTML = movies['movies'][i]['abridged_cast'][0]['name'];
    document.getElementById("cast2").innerHTML = movies['movies'][i]['abridged_cast'][1]['name'];
}

function continueExecution() {
    load_new(currIndex);
    $('#hero').fadeIn('slow', function() {
        // Animation complete.
    });
    $('#YT_link').fadeIn('slow', function() {
        // Animation complete.
    });
}