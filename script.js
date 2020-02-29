// jQuery
$(function() {});

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
	console.log("url: " + queryURLMM);

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

//Search button function (assigned to ID #searchBtn currently), turns text input into song
// $("#searchBtn").click(function (event) {
// 	event.preventDefault();
// 	var song = $("#searchInput").val();
// 	console.log(event);
// 	console.log(song);
// INGRID PUT THIS ON HOLD FOR NOW  getMusicMatch(song);
// });

// INGRID WORKED HERE:
function displayDeezer(result) {
	console.log("Deezer ID: " + result.data[0].id);
	console.log("Artist: " + result.data[0].artist.name);
	console.log("Link to Artist: " + result.data[0].artist.link);
	console.log("Link to Track: " + result.data[0].link);
	$("#songList").append("<p>Deezer Results Here</p>");
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
		displayDeezer(response);
	});
}

// Temporary song button function - will eventually be the function to show the results from Music Match
function displayMusicMatch(result) {
	// temp assignments
	songFromMM = "somewhere over the rainbow";
	artistFromMM = "ariana grande";

	// eventually put in loop for all returned elements
	var newSongBtn =
		'<a class="songBtn panel-block"><p id="songName">' +
		songFromMM +
		'</p><p id="artistName">' +
		artistFromMM +
		"</p</a>";
	$("#songList").append(newSongBtn);
}

displayMusicMatch("willberesponse");

// Song button function (assigned to class songBtn)
$(".songBtn").click(function(event) {
	event.preventDefault();

	// SongName on selected button (or should we just use the global song variable?)
	var selectedSong = $(this)
		.children("#songName")
		.text();

	// ArtistName on selected button (or should we just use the global song variable?)
	var selectedArtist = $(this)
		.children("#artistName")
		.text();
	getDeezer(selectedSong, selectedArtist);
});

// END INGRID ADD
