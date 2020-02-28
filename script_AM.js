// jQuery
$(function() {

//Declare variables for use in MusixMatch API calls
    var musixMatchAPIKey = "ff638efb051ac2658abd908eeca29217";
    var song = ""; 

//Search button function (assigned to ID #searchBtn currently), turns text input into song
    $("#searchBtn").click(function (event) {
        event.preventDefault();
        var song = $("#searchInput").val();
        console.log(event);
        console.log(song);

// AJAX call for song information, specifically via ?q_track variable
// The URL we need to query song title (q_track). Note that you have to add the cors-anywhere element, see below sample
        var queryURLMM = "https://cors-anywhere.herokuapp.com/http://api.musixmatch.com/ws/1.1/track.search?q_track="+song+"&page_size=3&page=1&s_track_rating=desc&apikey="+musixMatchAPIKey;

//Query and console logging the object below
        
        $.ajax({
            url: queryURLMM,
            method: "GET"
        }).then(function (response) {

            // Log the queryURL
            console.log(queryURLMM);
            // Log the resulting object
            console.log(response);   
})})});
