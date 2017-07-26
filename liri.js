//needed NPM/files and variables
var key = require("./keys.js");
var request = require("request");
var Twitter = require("twitter");
var Spotify = require("node-spotify-api");
var fs = require("fs");
var movie;
var songs; //originally used song. This was a bad idea. songs probably was, too.
var tweeter; //ditto tweeter, was originally tweet.

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
    spotifyThis();
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
  if(secondInput===null) { movie = "Mr. Nobody";
}else{ movie = secondInput };
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


//Oh yeah, using constructors.
function myTweets(tweeter) {
  console.log("Flippin the bird")
      var twitter_client = new Twitter({
          consumer_key: keys.twitter_keys.consumer_key,
          consumer_secret: keys.twitter_keys.consumer_secret,
          access_token_key: keys.twitter_keys.access_token_key,
          access_token_secret: keys.twitter_keys.access_token_secret
      });

//provided so kindly by NPM twitter node thinger
  var params = {
   var screen_name: 'trollblems';
   var tweet_count: 20;
}
client.get('statuses/user_timeline', params, function(error, tweets, response) {
  if (!error) {
    console.log(tweets);
  } for(var i=0; i< tweets.length; i++){
    console.log(tweets[i].created_at + tweets[i].text);
  }
});
}

function spotifyThis(songs) {
  console.log("Time for some tunes?")
  if(secondInput === null){ songs = "The Sign"; }
  else{ songs = secondInput };

  //info from NPM spotify that was provided
  spotify.search({ type: 'track', query: 'songs' }, function(err, data) {
if (err) {
  return console.log('Error occurred: ' + err);
}

console.log(data);
});
  }



function doWhat(iWant){
  console.log("Bad idea. Now this song is stuck in your head forever.");
  fs.readfile("random.txt", "utf8", function (error, data) {
    var parameters = data.split(",");
		var clean = parameters[1].replace(/"/g , " ").trim();
		command_line_parameters(parameters[0],clean);
  });
};
function log (data) {
    fs.appendFile("log.txt", data, function (error) {
        if(error){
          console.log(error);
        }
    });
  }


//I didn't get to finish this. We unexpectedly had kids at our house. This is why I don't want to reproduce. They're
//loud and noisy. and they drip. Anyways, I understood the content, but didn't have time to finish. The Twitter section
// doesn't work, nor to Spotify. Spotify doesn't because I didn't finish it. Twitter doesn't because I didn't get
//get a chance to troubleshoot it. I'm not sure about the last bit, but in theory it works.
