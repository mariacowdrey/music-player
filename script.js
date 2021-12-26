const musicContainer = document.getElementById('music-container');
const playBtn = document.getElementById('play');
const prevBtn = document.getElementById('prev');
const nextBtn = document.getElementById('next');

const audio = document.getElementById('audio');
const progress = document.getElementById('progress');
const progressContainer = document.getElementById('progress-container');
const title = document.getElementById('title');
const cover = document.getElementById('cover');

// Song titles
const songs = ['Baby Tu - Nico Rengifo', 'Better Kind of Bitter - Peachy Pavement', 'Hold You - Deanz', 'Losing You - Deanz', 'One of Those Things - Sture Zetterberg', 'Que - Lu-Ni', 'Rolled the Die - BLAEKER', 'Say More - Tilden Parc'];

// Keep track of songs
let songIndex = 7;

// Initially load song into DOM
loadSong(songs[songIndex]);

// Update song details
function loadSong(song) {
    title.innerText = song;
    audio.src = `music/${song}.mp3`;
    cover.src = `images/${song}.jpeg`;
}

function playSong() {
    musicContainer.classList.add('play');
    playBtn.querySelector('i.fas').classList.remove('fa-play');
    playBtn.querySelector('i.fas').classList.add('fa-pause');

    audio.play();
}

function pauseSong() {
    musicContainer.classList.remove('play');
    playBtn.querySelector('i.fas').classList.add('fa-play');
    playBtn.querySelector('i.fas').classList.remove('fa-pause');

    audio.pause();
}

function prevSong() {
    songIndex--;

    if (songIndex < 0) {
        songIndex = songs.length -1;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function nextSong() {
    songIndex++;

    if (songIndex > songs.lenth - 1) {
        songIndex = 0;
    }

    loadSong(songs[songIndex]);

    playSong();
}

function updateProgress(e) {
    const {duration, currentTime} = e.srcElement
    const progressPercent = (currentTime / duration) * 100
    progress.style.width = `${progressPercent}%`
        
  
}

// Event listeners
playBtn.addEventListener('click', () => {
    const isPlaying = musicContainer.classList.contains('play')

    if(isPlaying) {
        pauseSong();
    } else {
        playSong();
    }
})

// Change song events
prevBtn.addEventListener('click', prevSong);
nextBtn.addEventListener('click', nextSong);

audio.addEventListener('timeupdate', updateProgress);

