# Karao Kan I?

**Karao Kan I?** is an application that helps users determine whether or not they are up to performing any given song at karaoke. **KKI?** asks the user to enter the name of a song and then displays a list of the top 3 versions of that song. The user can select a version from this list to view album information, song lyrics, and play a sample of the song. 

It's never been easier to decide whether you want to stand up and sing, or sit down and drink!

<img src="https://github.com/ingridhoffman/KaraoKanI/blob/master/Assets/ingridhoffman.github.io_KaraoKanI_%20(1).png" width=90% />

### View Application:
https://ingridhoffman.github.io/KaraoKanI/

# User Story

```
AS AN aspiring karaoke superstar
I WANT to know the lyrics and cadence of my favorite songs
SO THAT I can stand up and sing, or sit down and drink, with confidence

AS A helpless member of the karaoke audience
I WANT would-be karaoke performers to understand their limits and stay in their lanes
SO THAT I can minimize the amount of aural trauma they subject me to
```

### Acceptance Criteria

```
GIVEN that I want to rapidly be able to determine whether a song is within my vocal ability
WHEN I type the name of a song into the search box
THEN I see the top 3 versions of the song by various artists
WHEN I select a version of the song
THEN I get the lyrics of the song, and the album cover for that version
```

### BONUS

```
GIVEN that I'll probably want to hear the song I am evaluating
WHEN I click a button to Listen or View
THEN the current version of the song plays or I see a video of it
```

# Development

### Application layout (see Wireframe.jpg)

Our application consists of an input field and submit button at the top of the application. Upon submitting a song name, the top 3 versions will be listed on the left hand side of the screen (tablets/desktop). When a version is selected, additional information about the selected version (album cover) will be presented beneath the version results, and both an audio sample and the lyrics for the song will be displayed on the right hand side of the application (tablet/desktop). When scaled down to mobile, the layout switches to a column, and the album cover is automatically hidden to facilitate user review of information.

### Technologies

- HTML
- CSS & Bulma (responsive design)
- Javascript, Jquery

### Server APIs

- MusixMatch (https://developer.musixmatch.com/)
- Deezer (https://developers.deezer.com/)

### Contributions
- Javascript - Ingrid and Andrew
- CSS/Bulma/HTML - Ingrid
- Pseudocode & Documentation - Andrew
- Presentation - Ingrid and Andrew

### Project Presentation
https://docs.google.com/presentation/d/1ojTZMwOJy5Lmvht-gZ1JFYT50dV1Aq-opCk1jzTDobQ/edit#slide=id.p

# License
MIT © Ingrid Hoffman, Andrew McIntire

