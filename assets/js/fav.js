$("#add-to-favs1").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title1").text();
  var percent = get_rotten_tomatoes(recommended_movies[0].Ratings) + "%";
  var plot = recommended_movies[0].Plot;
  var runtime = recommended_movies[0].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs2").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title2").text();
  var percent = get_rotten_tomatoes(recommended_movies[1].Ratings) + "%";
  var plot = recommended_movies[1].Plot;
  var runtime = recommended_movies[1].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs3").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title3").text();
  var percent = get_rotten_tomatoes(recommended_movies[2].Ratings) + "%";
  var plot = recommended_movies[2].Plot;
  var runtime = recommended_movies[2].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs4").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title4").text();
  var percent = get_rotten_tomatoes(recommended_movies[3].Ratings) + "%";
  var plot = recommended_movies[3].Plot;
  var runtime = recommended_movies[3].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs5").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title5").text();
  var percent = get_rotten_tomatoes(recommended_movies[4].Ratings) + "%";
  var plot = recommended_movies[4].Plot;
  var runtime = recommended_movies[4].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs6").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title6").text();
  var percent = get_rotten_tomatoes(recommended_movies[5].Ratings) + "%";
  var plot = recommended_movies[5].Plot;
  var runtime = recommended_movies[5].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs7").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title7").text();
  var percent = get_rotten_tomatoes(recommended_movies[6].Ratings) + "%";
  var plot = recommended_movies[6].Plot;
  var runtime = recommended_movies[6].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs8").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title8").text();
  var percent = get_rotten_tomatoes(recommended_movies[7].Ratings) + "%";
  var plot = recommended_movies[7].Plot;
  var runtime = recommended_movies[7].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs9").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title9").text();
  var percent = get_rotten_tomatoes(recommended_movies[8].Ratings) + "%";
  var plot = recommended_movies[8].Plot;
  var runtime = recommended_movies[8].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

$("#add-to-favs10").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title10").text();
  var percent = get_rotten_tomatoes(recommended_movies[9].Ratings) + "%";
  var plot = recommended_movies[9].Plot;
  var runtime = recommended_movies[9].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});
$("#add-to-favs11").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title11").text();
  var percent = get_rotten_tomatoes(recommended_movies[10].Ratings) + "%";
  var plot = recommended_movies[10].Plot;
  var runtime = recommended_movies[10].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});
$("#add-to-favs12").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title12").text();
  var percent = get_rotten_tomatoes(recommended_movies[11].Ratings) + "%";
  var plot = recommended_movies[11].Plot;
  var runtime = recommended_movies[11].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});
$("#add-to-favs13").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title13").text();
  var percent = get_rotten_tomatoes(recommended_movies[12].Ratings) + "%";
  var plot = recommended_movies[12].Plot;
  var runtime = recommended_movies[12].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});
$("#add-to-favs14").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title14").text();
  var percent = get_rotten_tomatoes(recommended_movies[13].Ratings) + "%";
  var plot = recommended_movies[13].Plot;
  var runtime = recommended_movies[13].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});
$("#add-to-favs15").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title15").text();
  var percent = get_rotten_tomatoes(recommended_movies[14].Ratings) + "%";
  var plot = recommended_movies[14].Plot;
  var runtime = recommended_movies[14].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});
$("#add-to-favs16").on("click", function(event) {
  event.preventDefault();
  var movietitle = $("#title16").text();
  var percent = get_rotten_tomatoes(recommended_movies[15].Ratings) + "%";
  var plot = recommended_movies[15].Plot;
  var runtime = recommended_movies[15].Runtime.slice(0,-4);
  $( "#instructions" ).append( "<p>Movie added to favorites!</p>" );
  // Adds data to firebase after click on link
  var newFavorite = {
      name: movietitle,
      rtscore: percent,
      plot: plot,
      runtime: runtime
  };
  database.ref().push(newFavorite);
});

// Creates snapshot of child
database.ref().on("child_added", function(childSnapshot, prevChildKey) {

  var movietitle = childSnapshot.val().name;
  var percent = childSnapshot.val().rtscore;
  var plot = childSnapshot.val().plot;
  var runtime = childSnapshot.val().runtime;

  // Adds information to table
  $("#favorites-table > tbody").append("<tr><td>" + movietitle + "</td><td>" + percent + "</td><td>" + plot + "</td><td>" + runtime + "</tr>");
});