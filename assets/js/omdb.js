/*
    The OMDB Database module
*/

var recommended_movies = [];
hide_all_posters();

// Add our api_keys here
var houssam_omdb_api_key = "e4169616";
var tom_omdb_api_key = "d546d0cf";
var jeff_omdb_api_key = "8b309cfb";

// Create an array of our 3 keys. Cycle through them so we don't run out of requests.
var omdb_api_keys = [houssam_omdb_api_key, tom_omdb_api_key, jeff_omdb_api_key];
var current_omdb_api_key = 0;

// This call for test purposes only. get_movie_list() should be called from front_end
// get_rec_movies(90,          // Minimum rotten tomatoes rating
//                "Comedy",    // Genre
//                2018,        // Year
//                10);         // Limit recommended movies size

function get_rec_movies(rotten_tomato_min_value, genre, year, limit) {
    // var genre_code = genres[genre];
    recommended_movies = [];
    hide_all_posters();

    var all_movies = get_all_movies_list(genre, year);
    // console.log(all_movies);

    // for each movie from tmdb, make ajax call to omdb to get Rotten Tomatoes rating.
    //      If rating does not exist, skip movie.
    //      Otherwise, add it to recommended movies list if rating is greater than minimum.
    for (var m=0; m<all_movies.length; ++m) {       
        // Cycle round-robin through api_keys
        current_omdb_api_key = (current_omdb_api_key + 1) % omdb_api_keys.length;

        var queryURL = "http://www.omdbapi.com/"
                        + "?apikey=" + omdb_api_keys[current_omdb_api_key]
                        + "&t=" + all_movies[m].title
                        + "&y=" + year;
        //console.log(queryURL);

        // console.log(all_movies[m]);

        $.ajax({
            url: queryURL,
            method: "GET"
        }).then(function(response) {
            // Each response is one movie from omdb
            //console.log(response);
            // Limit is provided by user
            if (recommended_movies.length < limit) {
                // If movie does not exist in omdb, error response will be sent.
                // The error response does not have a Ratings property.
                if (response.hasOwnProperty('Ratings')) {
                    // Not error response

                    // if no rotten tomatoes rating, returns -1
                    var rating = get_rotten_tomatoes(response.Ratings);
                    if (rating != -1) {
                        // console.log("Rotten_Tomatoes = " + rating);
                        if (rating >= rotten_tomato_min_value) {    // Min value provided by user
                            recommended_movies.push(response);
                            console.log(response);
                            console.log(recommended_movies);
                            render_movie_poster(response, recommended_movies.length);  // Add movie to recommended movies view
                        } else {
                            // console.log("Rating " + rating + "% less than " + rotten_tomato_min_value + "%: NO PUSH");
                        }
                    } else {
                        // console.log("Rotten Tomatoes rating not found for this movie");
                    }
                } else {
                    // console.log("Movie not found in OMDB");
                }
            } else {
                // console.log("*** Reached max limit of recommended movies");
            }
            // console.log("**** Recommended Movies: ");
            // console.log(recommended_movies);
        });
    } // for each movie received
}

function render_movie_poster(response, movie_num) {
    $("#img" + movie_num).attr("src", response.Poster);
    $("#title" + movie_num).text(response.Title);

    show_poster(movie_num);
}

function hide_all_posters() {
    var num_posters = 16;
    for (var i=1; i<=16; ++i) {
        hide_poster(i);
        // $(".poster").children().hide();
    }
}
function hide_poster(num) {
    $("#movie"       + num).hide();
    $("#add-to-favs" + num).hide();
    $("#go-to-modal" + num).hide();
    $("#hide"        + num).hide();
    $("#img"         + num).hide();
    $("#title"       + num).hide();
}
function show_poster(num) {
    $("#movie"       + num).show();
    $("#add-to-favs" + num).show();
    $("#go-to-modal" + num).show();
    // $("#hide"        + num).show();
    $("#img"         + num).show();
    $("#title"       + num).show();

}

function get_rotten_tomatoes(ratings) {
    var rating = -1;
    for (var r=0; r<ratings.length; ++r) {
        if (ratings[r].Source === "Rotten Tomatoes") {
            var rating_val = ratings[r].Value;
            // Delete percent sign (e.g. "95%" -> "95")
            rating = parseInt(rating_val.slice(0,-1));
        }
    }
    return rating;
}
