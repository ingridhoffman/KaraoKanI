3.2.20 - Ingrid

Revisions

- Deleted temp comments in files and added some logic comments

1. Script - Removed "var" before song and encoded song in Search Button function - these variables have already been declared at the top of the page
2. Script - Moved function to display musixmatch above function that calls it (per Tim's comments on best practice)
3. Script - temporarily disabled get lyrics ajax call
4. HTML - Removed "Song Version" panel heading (moved to script)
5. Script - In displayMusicMatch function changed empty() to html(panel heading) so panel heading would appear with song list (not before) and get displayed with each new list
6. HTML - restructured main column to have div for play button at top and then article for lyrics
7. Script - display play sample control just above lyrics
8. Script - added variable in song selection listener to feed ID to lyrics function

Questions/Comments

1. Do we need to parse the returned object to give the value to a variable?
2. We can use is-hidden to get rid of infoBox on mobile viewing
3. We can add is-grouped to search button to keep it with user input
4. Need to clear previous lyrics and album info when user does a new search
