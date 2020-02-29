// jQuery
$(function() {});

// ** Andrew -
// I put the button listener on hold until the button exists in the html
// I also pulled the function out of the event listener and named it so it is more modular (and easier to test) - let's discuss if you have concerns.

//Search button function (assigned to ID #searchBtn currently), turns text input into song
// $("#searchBtn").click(function (event) {
// 	event.preventDefault();
// 	var song = $("#searchInput").val();
// 	console.log(event);
// 	console.log(song);
getMusicMatch(song);
// });

// MUSIC MATCH INTERACTION
//Declare variables for use in MusixMatch API calls
var musixMatchAPIKey = "ff638efb051ac2658abd908eeca29217";
var song = "somewhere over the rainbow";

// AJAX call for song information, specifically via ?q_track variable
// The URL we need to query song title (q_track). Note that you have to add the cors-anywhere element, see below sample
function getMusicMatch(song) {
	var queryURLMM =
		"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=" +
		song +
		"&page_size=3&page=1&s_track_rating=desc&apikey=" +
		musixMatchAPIKey;

	//Query and console logging the object below
	$.ajax({
		url: queryURLMM,
		method: "GET"
	}).then(function(response) {
		// Log the queryURL
		console.log("MusicMatch query: " + queryURLMM);
		// Log the resulting object
		console.log("MusicMatch response: " + response);
	});
}

// DEEZER INTERACTION
function getDeezer(song, artist) {
	console.log("Ask Deezer: " + song);
	console.log("Ask Deezer: " + artist);

	// set url
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"' +
		artist +
		'" track:"' +
		song +
		'"';

	// Get data from Deezer API
	$.ajax({
		url: queryURL,
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		method: "GET"
	}).then(function(response) {
		console.log("Deezer Response: " + response);
		console.log("Artist: " + response.data[0].artist.name);
		console.log("Link to Artist: " + response.data[0].artist.link);
		console.log("Link to Track: " + response.data[0].link);
	});
}

getDeezer("gooey", "glass animals");
