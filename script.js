alert("music player made by Rahil");
let songname= document.querySelector("#song-name");
let songsinger= document.querySelector("#song-artist");
let songimage = document.querySelector(".song-image");
let playpauseimg= document.querySelector("#play-img");
let volumerange= document.querySelector("#volume-range");
let volSvg = document.querySelector("#vol-svg");
let duration = document.querySelector("#song-duration");
let musicAnime = document.querySelector("#musicanime");
let playListimage = document.querySelector("#playlist-img");
let playList = document.querySelector(".playlist");
let playListsong = document.querySelectorAll(".playlist-song");

let index = 2;
let playingsong = false;
let track = document.createElement("audio");
let songs = [
    {
        name: "runnig up that hill" ,
        path: "running.mp3",
        img: "running.jpg",
        singer: "Kate Bush"
    },
     {
        name: "end of begginnig" ,
        path: "end.mp3",
        img: "end.jpg",
        singer: " djo "
    },
     {
        name: "gone gone gone" ,
        path: "gone.mp3",
        img: "gone.jpg",
        singer: " phhilips  "
    },
     {
        name: "asma ul husna" ,
        path: "asma.mp3",
        img: "asma.jpg",
        singer: " mishary rashid alafasy "
    }
]
function loadtrack(index){
    track.src = songs[index].path;
    songname.innerHTML = songs[index].name;
    songsinger.innerHTML = songs[index].singer;
songimage.style.backgroundImage = `url('${songs[index].img}')`;

setvolume();
changesongduration();
setInterval(() => {
    duration.max = track.duration;
    duration.value = track.currentTime 
}, 1000);
track.loop=true;
track.load();
}

loadtrack(index);


function playpause(){
    if(playingsong==false){
        playsong();
    }
    else{
        pausesong();
    }
    }
function playsong(){
    track.play();
    playingsong=true;
    playpauseimg.src="pause.svg";
    musicAnime.style.display="block";

}    
function pausesong(){
    track.pause();
    playingsong=false;
    playpauseimg.src="play.svg";
        musicAnime.style.display="none";

}
function nextsong(){
    if(index < songs.length -1){
        index ++;
        loadtrack(index);
        playsong();
    }
    else{
        index=0;
        loadtrack(index);
        playsong();
    }   
}
function previoussong(){
    if(index >0){
        index -=1;
        loadtrack(index);
        playsong();
    }
    else{
        index = songs.length -1;
        loadtrack(index);
        playsong();
    }
}
function setvolume(){
    track.volume = volumerange.value / 100;
    if(volumerange.value == 0){
        volSvg.src="mute.svg";
    }
    else{
        volSvg.src="volume.svg";
    }
}
function changesongduration(){
     track.currentTime = duration.value;
}
playListimage.addEventListener("click",()=>{{
    playList.classList.toggle("playlist-active");
    if(playList.classList.contains("playlist-active")){
        playListimage.src="cross.svg";
    }
    else{
        playListimage.src="playlist.svg";
    } 
}});
playListsong.forEach((element,ind)=>{
    element.addEventListener("click",()=>{
        loadtrack(ind);
        playsong();
        playList.classList.remove("playlist-active");
        playListimage.src="playlist.svg";
    })
});
