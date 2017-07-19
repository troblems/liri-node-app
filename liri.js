var key = require("keys.js");
var request = require("request");


switch (action) {
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
