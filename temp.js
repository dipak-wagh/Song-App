console.log("Welcome to Spotify");


//Initialize the variables
let songIndex=0;
let audioElement = new Audio('song/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let songItems=Array.from(document.getElementsByClassName('songItem'));



let songs=[
    {songName:"Dil Se Dil Tak",filePath:"song/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"Gulabi Sadi",filePath:"song/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Hum Honge Kamiyab",filePath:"song/3.mp3",coverPath:"covers/3.jpg"},
    {songName:"Ladh re Tu",filePath:"song/4.mp3",coverPath:"covers/4.jpg"},
    {songName:"Shabashiyaa",filePath:"song/5.mp3",coverPath:"covers/5.jpg"},
    {songName:"Old Song",filePath:"song/6.mp3",coverPath:"covers/6.jpg"},
    {songName:"Tere Hawale",filePath:"song/7.mp3",coverPath:"covers/7.jpg"},
    {songName:"Tumase Milake Aisa Laga",filePath:"song/8.mp3",coverPath:"covers/8.jpg"},
    {songName:"He Haniyaaa",filePath:"song/9.mp3",coverPath:"covers/9.jpg"},
    {songName:"Ved Tuza",filePath:"song/10.mp3",coverPath:"covers/10.jpg"}
]

songItems.forEach((element,i)=>{
    console.log(element,i);
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
     
})

//audioElement.play();

//handle play/pause click
document.querySelectorAll('.songListplay').forEach((element, index) => {
    element.addEventListener('click', () => {
        audioElement.src = songs[index].filePath;
        audioElement.currentTime = 0;
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    });
});

//Listen to Events
audioElement.addEventListener('timeupdate', ()=>{
//update seekbar
progress = parseInt((audioElement.currentTime/audioElement.duration)* 100);
myProgressBar.value = progress;
})

myProgressBar.addEventListener('change',()=>{
    audioElement.currentTime = myProgressBar.value * audioElement.duration/100;


})
console.log('Audio Source:', audioElement.src);

