const musicContainer = document.querySelector('.music-container')
const playBtn = document.querySelector('#play')
const prevBtn = document.querySelector('#prev')
const nextBtn = document.querySelector('#next')
const audio = document.querySelector('#audio')
const progress = document.querySelector('.progress')
const progressContainer = document.querySelector('.progress-container')
const title = document.querySelector('#title')
const cover = document.querySelector('#cover')

// Song titles
const songs = [ 'Baby Tu - Nico Rengifo', 'Better Kind of Bitter - Peachy Pavement', 'Hold You - Deanz', 'Losing You - Deanz', 'One of Those Things - Sture Zetterberg', 'Que - Lu-Ni', 'Rolled the Die - BLAEKER', 'Say More - Tilden Parc']

// Keep track of songs
let songIndex = 7

// Initially load song into DOM
loadSong(songs[songIndex])

// Update song details
function loadSong(song) {
    title.innerText = song
    audio.src = 'music/${song}.mp3'
    audio.src = 'music/${song}.jpeg'
}
