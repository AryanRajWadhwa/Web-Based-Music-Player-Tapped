//console.log("Welcome to Tapped");
//Intialization
let songIndex = 0;
let audioElement = new Audio('Songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let Progress = document.getElementById('ProgressBar');
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName('songItem'));
let masterSongName = document.getElementById('songName');

let songs = [
    { songName: "Aaj Ke Baad", filePath: "Songs/1.mp3", coverPath: "Images/cover1.jpg" },
    { songName: "Tum Kya Mile", filePath: "Songs/2.mp3", coverPath: "Images/cover2.jpg" },
    { songName: "Obsessed", filePath: "Songs/3.mp3", coverPath: "Images/cover3.jpg" },
    { songName: "Believer", filePath: "Songs/4.mp3", coverPath: "Images/cover4.jpg" },
    { songName: "Enemy", filePath: "Songs/5.mp3", coverPath: "Images/cover5.jpg" },
    { songName: "Bones", filePath: "Songs/6.mp3", coverPath: "Images/cover6.jpg" },
]

songItem.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})

masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause');
        masterPlay.classList.add('fa-play');
        gif.style.opacity = 0;
    }
})
//Listen to Events
audioElement.addEventListener('timeupdate', () => {
    //console.log('timeupdate'); 

    //update seekbar
    prog = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    //console.log(prog);
    Progress.value = prog;
})

Progress.addEventListener('change', () => {
    audioElement.currentTime = Progress.value * audioElement.duration / 100;
})


const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause');
        element.classList.add('fa-play');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        
        makeAllPlays();
        songIndexString = e.target.id;
        songIndex = parseInt(e.target.id);
        songIndexString = "Songs/".concat("", songIndex).concat("", ".mp3");
        e.target.classList.remove('fa-play');
        e.target.classList.add('fa-pause');
        audioElement.src = songIndexString;
        masterSongName.innerText = songs[songIndex - 1].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play');
        masterPlay.classList.add('fa-pause');
        
    })
})

document.getElementById('next').addEventListener('click', () => {
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    songIndexString = songIndex.toString();
    songIndexString = "Songs/".concat("", songIndex).concat("", ".mp3");
    audioElement.src = songIndexString;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
})

document.getElementById('previous').addEventListener('click', () => {
    if (songIndex <= 0) {
        songIndex = 6;
    }
    else {
        songIndex -= 1;
    }
    songIndexString = songIndex.toString();
    songIndexString = "Songs/".concat("", songIndex).concat("", ".mp3");
    audioElement.src = songIndexString;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');
})

audioElement.addEventListener('ended', () => {
    if (songIndex >= 6) {
        songIndex = 0;
    }
    else {
        songIndex += 1;
    }
    songIndexString = songIndex.toString();
    songIndexString = "Songs/".concat("", songIndex).concat("", ".mp3");
    audioElement.src = songIndexString;
    masterSongName.innerText = songs[songIndex - 1].songName;
    audioElement.currentTime = 0;
    audioElement.play();
    gif.style.opacity = 1;
    masterPlay.classList.remove('fa-pause');
    masterPlay.classList.add('fa-play');

})