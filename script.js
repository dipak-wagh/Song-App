console.log("Welcome to Spotify");

// Initialize the variables
let songIndex = 0;
let audioElement = new Audio();
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Dil Se Dil Tak", filePath: "song/1.mp3", coverPath: "covers/1.jpg" },
    { songName: "Gulabi Sadi", filePath: "song/2.mp3", coverPath: "covers/2.jpg" },
    { songName: "Hum Honge Kamiyab", filePath: "song/3.mp3", coverPath: "covers/3.jpg" },
    {songName:"Ladh re Tu",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Shabashiyaa",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Old Song",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Tere Hawale",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Tumase Milake Aisa Laga",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"He Haniyaaa",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Ved Tuza",filePath:"song/10.mp3",coverPath:"covers/10.jpg"}
    // Add other songs here...
];

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
});

// Play/pause logic for `masterPlay`
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    } else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
});

// Play a specific song when a `songListplay` is clicked
document.querySelectorAll('.songListplay').forEach((element, index) => {
    element.addEventListener('click', () => {
        songIndex = index;
        audioElement.src = songs[songIndex].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    });
});

// Listen to audio events
audioElement.addEventListener('timeupdate', () => {
    const progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
});

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
});

const makeAllPlays=()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.target.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        console.log(e.target);
        makeAllPlays();
        
        songIndex=parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src=`song/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play(); 
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})

document.getElementById('next').addEventListener('click',()=>{
    if(songIndex>=9)
    {
        songIndex = 0
    }
    else{
        songIndex += 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

document.getElementById('previous').addEventListener('click',()=>{
    if(songIndex<=0)
    {
        songIndex = 0
    }
    else{
        songIndex -= 1;
    }
    audioElement.src=`song/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play(); 
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
})

