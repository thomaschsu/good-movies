// Initialize Firebase
var config = {
    apiKey: "AIzaSyCnBB7K1x-2rGzwngazfbBY4K7vCfjQuzE",
    authDomain: "group-5-project-1.firebaseapp.com",
    databaseURL: "https://group-5-project-1.firebaseio.com",
    projectId: "group-5-project-1",
    storageBucket: "",
    messagingSenderId: "522365895035"
  };
  firebase.initializeApp(config);

// Create a variable to reference the database
var database = firebase.database();

var rtscore;
var releaseyear;
var genre_codes;
var limit;

///////////////////////////////////////////////////////////////////////////////
// 
//************************************************ */
//-------------SIGNIN/SIGNUP---------------------- */

  console.log("signin")
  $("#signUp").click(function() {
    event.preventDefault();
  
  var userEmail = document.getElementById("InputEmail").value;
  var userPass = document.getElementById("InputPass").value;
  
  firebase.auth().createUserWithEmailAndPassword(userEmail, userPass).catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    var errorMessage = error.message;
    // ...
   
    
  });
  
  $("#InputEmail").val("");
  $("#InputPass").val("");

  });  
  
  
  $("#signIn").click(function() {
    event.preventDefault();
  
  var userEmail = document.getElementById("InputEmail1").value;
  var userPass = document.getElementById("InputPass1").value;
  
    firebase.auth().signInWithEmailAndPassword(userEmail, userPass).catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      var errorMessage = error.message;
      // ...
    });
  
  });
  //----------------------END SIGNIN/SIGNUP------------------ */

$( "#submit-button" ).click(function() {
    event.preventDefault();

    // Get user provided Rotten Tomatoes minimum value
    if ($("#rt1").is(':checked') == true)      { rtscore = 90; }
    else if ($("#rt2").is(':checked') == true) { rtscore = 80; }
    else if ($("#rt3").is(':checked') == true) { rtscore = 70; }
    else if ($("#rt4").is(':checked') == true) { rtscore = 60; }
    else if ($("#rt5").is(':checked') == true) { rtscore = 50; }

    // Get user provided release year
    releaseyear = parseInt($("#releaseyear :selected").text());

    // Get user provided genres. If more than one is selected, movie shall satisfy all genres
    genre_codes = "";
    if ($("#action").is(':checked') == true)         { genre_codes = append_genre_code(genre_codes, "#action"); }
    if ($("#adventure").is(':checked') == true)      { genre_codes = append_genre_code(genre_codes, "#adventure"); }
    if ($("#animation").is(':checked') == true)      { genre_codes = append_genre_code(genre_codes, "#animation"); }
    if ($("#comedy").is(':checked') == true)         { genre_codes = append_genre_code(genre_codes, "#comedy"); }
    if ($("#crime").is(':checked') == true)          { genre_codes = append_genre_code(genre_codes, "#crime"); }
    if ($("#documentary").is(':checked') == true)    { genre_codes = append_genre_code(genre_codes, "#documentary"); }
    if ($("#drama").is(':checked') == true)          { genre_codes = append_genre_code(genre_codes, "#drama"); }
    if ($("#family").is(':checked') == true)         { genre_codes = append_genre_code(genre_codes, "#family"); }
    if ($("#fantasy").is(':checked') == true)        { genre_codes = append_genre_code(genre_codes, "#fantasy"); }
    if ($("#history").is(':checked') == true)        { genre_codes = append_genre_code(genre_codes, "#history"); }
    if ($("#horror").is(':checked') == true)         { genre_codes = append_genre_code(genre_codes, "#horror"); }
    if ($("#music").is(':checked') == true)          { genre_codes = append_genre_code(genre_codes, "#music"); }
    if ($("#mystery").is(':checked') == true)        { genre_codes = append_genre_code(genre_codes, "#mystery"); }
    if ($("#romance").is(':checked') == true)        { genre_codes = append_genre_code(genre_codes, "#romance"); }
    if ($("#sciencefiction").is(':checked') == true) { genre_codes = append_genre_code(genre_codes, "#sciencefiction"); }
    if ($("#thriller").is(':checked') == true)       { genre_codes = append_genre_code(genre_codes, "#thriller"); }
    if ($("#tvmovie").is(':checked') == true)        { genre_codes = append_genre_code(genre_codes, "#tvmovie"); }
    if ($("#war").is(':checked') == true)            { genre_codes = append_genre_code(genre_codes, "#war"); }
    if ($("#western").is(':checked') == true)        { genre_codes = append_genre_code(genre_codes, "#western"); }

    // Get user provided max number of recommended movies
    limit = parseInt($("#limitsearch :selected").text());

    console.log("get_rec_movies(" 
                + rtscore + ", "
                + releaseyear + ", "
                + "'" + genre_codes + "', "
                + limit + ")"
    );
    
    // Get recommended movies that satisfy user's criteria
    get_rec_movies(rtscore,     // Minimum rotten tomatoes rating
        genre_codes,            // Genre codes to be sent to api
        releaseyear,            // Year
        limit);                 // Limit recommended movies size
    
});

///////////////////////////////////////////////////////////////////////////////
// Generate genre string
function append_genre_code(genre_codes, genre_str) {
    console.log(genre_codes + ", " + genre_str);
    if (genre_codes == "") { genre_codes  =       genres[$(genre_str).val()]; }
    else                   { genre_codes += "," + genres[$(genre_str).val()]; }
    console.log(genre_codes);
    return genre_codes;
}

///////////////////////////////////////////////////////////////////////////////
// Display modal window when "More" is clicked
$(document).on('click', '.go-to-modal', function (event) {
    var movie_num = $(this).data("ref");    // range: 1-16
    var index = movie_num - 1;              // convert to: 0-15  

    // Get required data for modal window
    var title = recommended_movies[index].Title;
    var plot = recommended_movies[index].Plot;
    var rating = get_rotten_tomatoes(recommended_movies[index].Ratings);
    var runtime = recommended_movies[index].Runtime.slice(0,-4);

    // Create modal window html content
    var modal_html = 
          "<b>Title:</b> " + title
        + "<br>"
        + "<br>"
        + "<b>Plot:</b>" 
        + "<br>  " 
        + plot
        + "<br>"
        + "<br>"
        + "<b>Rotten Tomatoes:</b> " + rating + "%"
        + "<br>"
        + "<br>"
        + "<b>Runtime:</b> " + runtime + " minutes"
        + "<br>"
        + "<br>"
        + "<b>Time to Finish:</b> If you watched this now, you will finish at "
        + moment().add(runtime, 'minutes').calendar()
        + "<br>"
        + "<br>"
        // + "<div id='youtube-trailer'>"
        // + "  <iframe width='560' height='315' src='https://www.youtube.com/embed/vKQi3bBA1y8' frameborder='0' allow='autoplay; encrypted-media'"
        // + "  allowfullscreen></iframe>"
        // + "</div>"
    ;
    //console.log(modal_html);

    // Replace existing content with new
    $("#modal-body" + movie_num).html(modal_html);
});

///////////////////////////////////////////////////////////////////////////////
// Add movie to favorites in Firebase when "Add to favorites" is clicked
// $(".add-to-favs").on("click", function(event) {
//     event.preventDefault();

//     // get_user_id_node();
//     // get_favorites_node();
//     var movie_num = $("this").attr("data-ref");
//     console.log("******************* " + movie_num);

// });
