function login() {

  let password = document.getElementById("username").value;

  if (password === "happymonthsary lovey") {

    document.getElementById("loginBox").style.display = "none";
    document.getElementById("websiteContent").style.display = "block";

  } else {

    alert("Wrong magic word 💔");

  }
}


// 🎵 MUSIC FUNCTION (Spotify-style)
let audio = document.getElementById("music");

let playBtn = document.querySelector(".play-btn");


function toggleMusic(){

  if(audio.paused){

    audio.play();

    playBtn.innerHTML = "⏸";

  }

  else{

    audio.pause();

    playBtn.innerHTML = "▶";

  }

}


function playSong(song){

  audio.src = song;

  audio.play();

  playBtn.innerHTML = "⏸";


  /* REMOVE ACTIVE STYLE */
  let songs = document.querySelectorAll(".song");

  songs.forEach(function(item){

    item.classList.remove("active");

  });


  /* ADD SPOTIFY ACTIVE BORDER */
  event.currentTarget.classList.add("active");

}


/* WHEN SONG ENDS */
audio.onended = function(){

  playBtn.innerHTML = "▶";

};