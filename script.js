// jQuery
$(function() {});

// MUSIX MATCH INTERACTION
//Declare variables for use in MusixMatch API calls
var musixMatchAPIKey = "ff638efb051ac2658abd908eeca29217";
var song = "";
var encodedSong = encodeURI(song);
var resultsNUM = 3;

// Function to show the results from MusixMatch
function displayMusicMatch(response) {
	// clear previous song list
	$("#songList").empty();
	$("#listTitle").text("Versions of this Song");
	// temp button for troubleshooting
	// loop through new results
	var countMM;
	for (countMM = 0; countMM < resultsNUM; countMM++) {
		//Assigns song from MusicMatch
		var songFromMM = JSON.parse(response).message.body.track_list[countMM].track
			.track_name;

		//Assigns artist from MusicMatch
		var artistFromMM = JSON.parse(response).message.body.track_list[countMM]
			.track.artist_name;

		// Log the ID for first result
		var idFromMM = JSON.parse(response).message.body.track_list[countMM].track
			.track_id;

		var newSongBtn =
			'<div class="songBtn panel-block" id="' +
			idFromMM +
			'"><p id="songName">' +
			songFromMM +
			'</p><p id="artistName">' +
			artistFromMM +
			"</p></div>";
		$("#songList").append(newSongBtn);
		$("#songList")
			.parent()
			.show();
	}
	// Song button function (assigned to class songBtn) to listen for user selection
	$(".songBtn").click(function(event) {
		event.preventDefault();

		// SongName on selected button
		var selectedSong = $(this)
			.children("#songName")
			.text();
		// ArtistName on selected button
		var selectedArtist = $(this)
			.children("#artistName")
			.text();
		getDeezer(selectedSong, selectedArtist);
		// ID from selected button for Lyrics call
		var selectedID = this.id;

		showLyrics(selectedID);
	});
}

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
		displayMusicMatch(response);
	});
}

//Search button function (assigned to ID #searchBtn currently), turns text input into song
$("#searchBtn").click(function(event) {
	event.preventDefault();
	song = $("#searchBar").val();

	encodedSong = encodeURI(song);
	getMusicMatch(encodedSong);
});

//Creating showLyrics function that triggers off song ID from musixmatch, to generate lyrics.
function showLyrics(ID) {
	$("#lyricsTitle").text("Song Lyrics - Sing away!");

	var queryURLMMLyrics =
		"https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.lyrics.get?track_id=" +
		ID +
		"&apikey=" +
		musixMatchAPIKey;

	//Query and console logging the object below
	$.ajax({
		url: queryURLMMLyrics,
		method: "GET"
	}).then(function(response) {
		var lyricsFromMM = JSON.parse(response).message.body.lyrics.lyrics_body;

		var lyricPass = document.createElement("p");
		lyricPass.setAttribute("class", "mxm-lyrics__content");
		$(lyricPass).text(lyricsFromMM);

		$("#lyricArea").html(lyricPass);
		$("#lyricArea")
			.parent()
			.show();
	});
}

// DEEZER INTERACTION
// Function to display results from Deezer
function displayDeezer(result) {
	// Adding in calls to title blocks
	$("#artistTitle").text("Album Information");
	$("#playTitle").text("Play a Sample of this Song");
	var songArtist = result.data[0].artist.name;
	var songAlbum = result.data[0].album.title;
	var imageURL = result.data[0].album.cover_big;
	var playSample = result.data[0].preview;
	// display infomration about the artist for the selected song
	var infoBlock =
		"<p>" +
		songArtist +
		"</p><p>" +
		songAlbum +
		'</p><img src="' +
		imageURL +
		'" alt="Album Cover">';
	$("#artistBox").html(infoBlock);
	$("#artistBox")
		.parent()
		.show();
	// display audio control to play sample of selected song
	var playControl =
		'<audio controls><source src="' +
		playSample +
		'" type="audio/mpeg"></audio>';
	$("#playBox").html(playControl);
	$("#playBox")
		.parent()
		.show();
}

// AJAX call to Deezer using information from button user selected
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
