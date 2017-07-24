//needed NPM/files and variables
var key = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var movie;
var song;

//arguements from NPM
var userInput = process.argv[2];
var secondInput = process.argv[3];

console.log("Pick your poison. my-tweets, spotify-this-song, movie-this, or do-what-it-says.");
//switch cases
function switchin(){
  switch (userInput) {
  case "my-tweets":
    myTweets();
    break;

  case "spotify-this-song":
    songifyThis();
    break;

  case "movie-this":
    movieThis();
    break;

  case "do-what-it-says":
    doWhat();
    break;
  }
}

//running omdb api, Mr. Nobody if nothing is input, outputting whatever movie is input otherwise
function movieThis(movie){
  console.log("Lets watch a movie.");
  if(secondInput===null) {
  movie = "Mr. Nobody";
  var query_url = "http://www.omdbapi.com/?t=" + movie + "&y=&plot=long&tomatoes=true&r=json";

    //request is NPM package, query_url is variable error, res, body are apart of package.
    request(query_url, function(error, res, body) {
        //status code 200 is basically good to go.
        if (!error && res.statusCode == 200) {
            //list below from OMDB api
            var movieInfo = {
                "Title"                 : JSON.parse(body).Title,
                "Released"              : JSON.parse(body).Released,
                "Country"               : JSON.parse(body).Country,
                "Languages"             : JSON.parse(body).Language,
                "Actors"                : JSON.parse(body).Actors,
                "IMDB Rating"           : JSON.parse(body).imdbRating,
                "Rotten Tomatoes Rating": JSON.parse(body).tomatoRating,
                "Rotten Tomatoes URL"   : JSON.parse(body).tomatoURL,
                "Plot"                  : JSON.parse(body).Plot
            };
          };
        });
      };
    };

function doWhat(iWant){
  console.log("");
  fs.readfile("random.txt", "utf8", function (error, data) {
  if(error) {
    console.log(error)
  }else{

  };
});
};
