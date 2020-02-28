// jQuery
$(function() {});

// Deezer Interaction
function getDeezer(song, artist) {
	console.log(song);
	console.log(artist);

	// set url
	var queryURL =
		'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search?q=artist:"' +
		artist +
		'" track:"' +
		song +
		'"';

	// Get data from Open Weather API
	$.ajax({
		url: queryURL,
		headers: {
			"Access-Control-Allow-Origin": "*"
		},
		method: "GET"
	}).then(function(response) {
		console.log(response);
		console.log("Artist: " + response.data[0].artist.name);
		console.log("Link to Artist: " + response.data[0].artist.link);
		console.log("Link to Track: " + response.data[0].link);
	});
}

getDeezer("gooey", "glass animals");
