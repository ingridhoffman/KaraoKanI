# Project1

## Project Description

Our project is an application that utilizes a user provided song name, which is then called against the MusixMatch API to generate a list of the artist(s) associated with this song. The user can then interact with this list to view further artist information via the Wikipedia API, as well as the song lyrics via another MusixMatch API call.

## User Story

AS A music lover
I WANT to know the lyrics to my favorite songs
SO THAT I can sing along

AS A music fan
I WANT to know about the artists who perform these songs
SO THAT I can compare the different versions of the songs

### Acceptance Criteria

GIVEN that I want more information about a song
WHEN I type the name of the song into a text box
THEN I see a list of versions of the song by various artists
WHEN I select a version of the song
THEN I get the lyrics of the song and an info box about that artist

GIVEN that I may want to get information about multiple versions of each song
WHEN I click to See More Versions
THEN I get the full list that was originally presented

GIVEN that I may want more information about each artist
WHEN I click on the artist info box (or links within)
THEN I am taken to external websites with more about that artist

### BONUS

GIVEN that I'll probably want to hear the song I am reading about
WHEN I click a button to Listen or View
THEN the current version of the song plays or I see a video of it

## Application layout (see Wireframe.jpg)

Our application consists of an input field and submit button at the top of the application. Upon submitting a song name, the associated artist(s) will be listed on the left hand side of the screen. When an artist is selected, additional information about the selected artist will replace the list of artists on the left hand side(toggle), and the lyrics for the song will be displayed on the right hand side of the screen.

## APIs utilized

MusixMatch (https://developer.musixmatch.com/)
Wikipedia (https://www.mediawiki.org/wiki/API:Main_page)
potentially: YouTube, iTunes, Spotify
