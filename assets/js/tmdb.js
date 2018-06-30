/*
    The Movie Database (tmdb) module
*/

var MAX_PAGES = 10;

// Add our api_keys here
var houssam_tmdb_api_key = "31feed93f2b687e47fba2094f54554be";
var tom_tmdb_api_key = "42bb145d23b872a3c9938b1df04840de";
var jeff_tmdb_api_key = "0fe08d0dba2431d286b82056b3de8c1a";

// Create an array of our 3 keys. Cycle through them so we don't run out of requests.
var tmdb_api_keys = [houssam_tmdb_api_key, tom_tmdb_api_key, jeff_tmdb_api_key];
var current_tmdb_api_key = 0;

// Get the list of genre codes and put in an object. 
// To lookup a genre id, do this: var id = genres["Western"]
// To cycle thru all genres, do this: for (genre in genres) {console.log(genre);}
var genres = {};
genres = get_genre_codes();
console.log(genres);

/*****************************************************************************/
/***                              Functions                                ***/
/*****************************************************************************/

///////////////////////////////////////////////////////////////////////
// Gets list of genres, loads into local object and returns object
function get_genre_codes() {
    var genres_local = {};

    // Cycle round-robin through api keys
    current_tmdb_api_key = (current_tmdb_api_key + 1) % tmdb_api_keys.length;

    // Query to get list of genres and their IDs
    var queryURL = "https://api.themoviedb.org/3/genre/movie/list?api_key=" 
                    + tmdb_api_keys[current_tmdb_api_key] 
                    + "&language=en-US";
    console.log(queryURL);

    // Ajax call to get list of genres from tmdb
    $.ajax({
        url: queryURL,
        method: "GET",
        async: false
    }).then(function(response) {
        console.log(response);
        // Put each genre {name, id} in a local object
        for (var i=0; i<response.genres.length; ++i) {
            var name = response.genres[i].name.toLowerCase();
            var id = response.genres[i].id;
            genres_local[name] = id;
        }
    });
    // return the local array
    return genres_local;
}

///////////////////////////////////////////////////////////////////////
// Gets list of movies given the specific filter criteria
// Arguments:
//      genre_list: List of genre ids; 
//                      Ex. 14    = Fantasy, 
//                          14,35 = Fantasy AND Comedy, 
//                          14|35 = Fantasy OR Comedy
//      release_year: When the movie was released; Ex. 2017
function get_all_movies_list(genre_list, release_year) {
    // Clear movie_list
    var all_movies = [];
    // get 1st page, figure out how many more pages to get
    var page = get_all_movies_list_page(1, genre_list, release_year);
    append_page_to_list(all_movies, page.results);

    // for loop to get rest of pages
    for (var p = 2; p <= page.total_pages && p <= MAX_PAGES; ++p) {
        page = get_all_movies_list_page(p, genre_list, release_year);
        append_page_to_list(all_movies, page.results);
    }
    return all_movies;
}

///////////////////////////////////////////////////////////////////////
// Utility function used by get_movie_list(). 
//   Gets one page at a time and appends to movie list
function get_all_movies_list_page(page_no, genre_list, release_year) {

    // Cycle round-robin through api keys
    current_tmdb_api_key = (current_tmdb_api_key + 1) % tmdb_api_keys.length;

    // Query to get list of movies for a specific set of genres and year.
    //  Currently only gets english language movies
    var queryURL = "https://api.themoviedb.org/3/discover/movie?api_key="
                    + tmdb_api_keys[current_tmdb_api_key]
                    + "&language=en-US&sort_by=popularity.desc&include_adult=false&include_video=false"
                    + "&page=" + page_no
                    // + "&primary_release_year=" + primary_release_year
                    + "&year=" + release_year
                    + "&with_genres=" + genre_list
                    + "&with_original_language=en";
    console.log(queryURL);

    var result;
    // Ajax call to get list of movies given the queryURL
    $.ajax({
        url: queryURL,
        method: "GET",
        async: false
    }).then(function(response) {
        // console.log(response);
        result = {page:        response.page,
                  total_pages: response.total_pages, 
                  results:     response.results};
    });
    return result;
}

///////////////////////////////////////////////////////////////////////
// Utility function to append a page of movies to a movies list
function append_page_to_list(movie_list, page_results) {
    for (var i=0; i<page_results.length; ++i) {
        movie_list.push(page_results[i]);
    }
}
