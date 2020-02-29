// jQuery
$(function() {});


// INGRID, ALL OF MY WORK IS INSIDE MUSIX MATCH INTERACTION
// I have added nothing beyond the function call for getMusicMatch

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
		"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track="+ encodedSong +"&page_size="+ resultsNUM+"&page=1&s_track_rating=desc&apikey="+musixMatchAPIKey;

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
		console.log("MusicMatch response first track title: " +JSON.parse(response).message.body.track_list[0].track.track_name);
		// Log the artist name for first result
		console.log("MusicMatch response first track artist name: " +JSON.parse(response).message.body.track_list[0].track.artist_name);
		// Log the SHARE lyrics URL for first result
		console.log("MusicMatch response first track lyrics SHARE URL: " +JSON.parse(response).message.body.track_list[0].track.track_share_url);
		// Log the EDIT lyrics URL for first result
		console.log("MusicMatch response first track lyrics EDIT URL: " +JSON.parse(response).message.body.track_list[0].track.track_edit_url);
	});
}
//Search button function (assigned to ID #searchBtn currently), turns text input into song
// $("#searchBtn").click(function (event) {
// 	event.preventDefault();
// 	var song = $("#searchInput").val();
// 	console.log(event);
// 	console.log(song);
getMusicMatch(encodedSong);
// });
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
