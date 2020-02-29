// jQuery
$(function() {});

// MUSIX MATCH INTERACTION
//Declare variables for use in MusixMatch API calls
var musixMatchAPIKey = "ff638efb051ac2658abd908eeca29217";
var song = "somewhere over the rainbow";
var encodedSong = encodeURI(song);
var resultsNUM = 3;

// AJAX call for song information, specifically via ?q_track variable
// The URL we need to query song title (q_track). Note that you have to add the cors-anywhere element, see below sample
function getMusicMatch(encodedSong) {
	var queryURLMM =
		"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track=" +
		encodedSong +
		"&page_size=" +
		resultsNUM +
		"&page=1&s_track_rating=desc&apikey=" +
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
		// Log the track name for first result(WE WILL WANT TO ADJUST THE 'track_list[0]' TO GET INFO FOR EACH RESULT )
		console.log(
			"MusicMatch response first track title: " +
				JSON.parse(response).message.body.track_list[0].track.track_name
		);
		// Log the artist name for first result
		console.log(
			"MusicMatch response first track artist name: " +
				JSON.parse(response).message.body.track_list[0].track.artist_name
		);
		// Log the SHARE lyrics URL for first result
		console.log(
			"MusicMatch response first track lyrics SHARE URL: " +
				JSON.parse(response).message.body.track_list[0].track.track_share_url
		);
		// Log the EDIT lyrics URL for first result
		console.log(
			"MusicMatch response first track lyrics EDIT URL: " +
				JSON.parse(response).message.body.track_list[0].track.track_edit_url
		);
	});
}

//Search button function (assigned to ID #searchBtn currently), turns text input into song
// $("#searchBtn").click(function (event) {
// 	event.preventDefault();
// 	var song = $("#searchInput").val();
// 	console.log(event);
// 	console.log(song);
// getMusicMatch(encodedSong);
// });

function displayDeezer(result) {
	console.log(result);
	// var songShowing = result.data[0].title;
	// var artistShowing = result.data[0].artist.name;
	// var imageURL = result.data[0].artist.picture_big;
	var playSample = result.data[0].preview;
	// $("#songList").html(
	// 	'<p class="panel-heading">' + songShowing + " by " + artistShowing + "</p>"
	// );
	// $("#songList").append(
	// 	'<a class="panel-block" id="backResults">Back to Results (not functional)</a>'
	// );

	// var artistInfoBlock =
	// 	'<h3 id="artistName">' +
	// 	artistShowing +
	// 	'</h3><img src="' +
	// 	imageURL +
	// 	'" alt="Artist Image">';
	// 	$("#artistBox").html(artistInfoBlock);

	var playBox =
		'<div id="playBox"><h3>Play Sample:</h3><audio controls><source src="' +
		playSample +
		'" type="audio/mpeg"></audio></div>';
	// where to put this??
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
	//	showLyrics();
});
