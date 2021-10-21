const song = document.querySelector("#song");
const thumbnail = document.querySelector("#thumbnail");

const songArtist = document.querySelector(".songArtist");
const progressBar = document.querySelector("#progress-bar");
const songTitle = document.querySelector(".songTitle");
let ppause = document.querySelector("#play-pause");

songIndex = 0;
songs = [
  "LALLIJO-Ramya NSK.mp3",
  "PARAYUVAN-SIDSRIRAM.mp3",
  "Ananya Birla - Circles Acoustic.mp3",
  "KSHMR_Lost Stories_Kavita Seth - Bombay Dreams.mp3",
  "prema.mp3",
]; // object storing paths for audio objects
songArtists = [
  "Ramya NSK",
  "Sid-Sriram",
  "Ananya birla",
  "KSHMR",
  "Hriday Gattani,",
]; // object storing track artists
songTitles = [
  "Laalijo",
  "Parayuvan",
  "Circles",
  "Bombay",
  "prema parichayamey",
]; // object storing track titles
let playing = true;
function playPause() {
  if (playing) {
    song.play();
    playing = false;
    ppause.src = "images/playy.png";
  } else {
    song.pause();
    playing = true;
    ppause.src = "images/pausee.png";
  }
}

song.addEventListener("ended", function () {
  nextSong();
});

function nextSong() {
  songIndex++;
  if (songIndex > 4) {
    songIndex = 0;
  }

  song.src = songs[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

function previousSong() {
  songIndex--;
  if (songIndex < 0) {
    songIndex = 4;
  }
  song.src = songs[songIndex];
  songArtist.innerHTML = songArtists[songIndex];
  songTitle.innerHTML = songTitles[songIndex];

  playing = true;
  playPause();
}

playing = true;
playing = false;

function updateProgressValue() {
  progressBar.max = song.duration;
  progressBar.value = song.currentTime;
  document.querySelector(".currentTime").innerHTML = formatTime(
    Math.floor(song.currentTime)
  );
  if (document.querySelector(".durationTime").innerHTML === "NaN:NaN") {
    document.querySelector(".durationTime").innerHTML = "0:00";
  } else {
    document.querySelector(".durationTime").innerHTML = formatTime(
      Math.floor(song.duration)
    );
  }
}

setInterval(updateProgressValue, 500);

function changeProgressBar() {
  song.currentTime = progressBar.value;
}
