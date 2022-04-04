
//Javascript fil til webdokumentar

console.log('js.js = ok')

/**
 STUDIEDAG 4
 tilføj en youtube video, som afspilles når videoen bliver synlig
 **/

// Load the IFrame Player API code asynchronously.
var tag = document.createElement('script');
tag.src = "https://www.youtube.com/player_api";
var firstScriptTag = document.getElementsByTagName('script')[0];
firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

// Replace the 'ytplayer' element with an <iframe> and
// YouTube player after the API code downloads.
var player;

function onYouTubePlayerAPIReady() {
  player = new YT.Player('ytplayer', {
    height: '660',
    width: '940',
    videoId: '3oZ1k0b2K0c',
    events: {
      'onReady': onPlayerReady,
      'onStateChange': onPlayerStateChange
    }
  })
}

/* Player kontrolleres af funktioner */
function onPlayerReady(event) {
  console.log("player is ready");
  event.target.pauseVideo();
}

function playItSam(event) {
  console.log("player is ready");
  event.target.playVideo(); // event from player
}

function onPlayerStateChange() {
  console.log("player state change");

  if (event.data == YT.PlayerState.PLAYING && !done) {
    //setTimeout(stopVideo, 6000);
    done = true;
  }
}

/* is element visible? if ok playVideo() */
var elementet = document.getElementById("synlig");

window.addEventListener("scroll", function() {

  if (elFllVsbl(elementet)) {
    console.log("play video");
    player.playVideo(); // with player you can manipulate the video
  } else {
    console.log("pause video")
    player.pauseVideo();
  }
}); // end eventlistener

function elFllVsbl(el) {
  return (el.getBoundingClientRect().top >= 0 && el.getBoundingClientRect().bottom < window.innerHeight);
}



// globale variabler
let d = new Date(); // kan genbruges andre steder
let uge = ['søndag','mandag','tirsdag','onsdag','torsdag','fredag','lørdag'];
let maaneder = ['januar','februar','marts','april','maj','juni','juli','august','september','oktober','november','december'];

// footer som objekt
const info = {
  author: 'Katrine Aebelo, Patricia Tonnie, Lea Danielsen, Ditte schultz', // Spørgsmål 1
  dag: uge[ d.getDay() ],
  maaned: maaneder[ d.getMonth() ],
  dagImaaned: d.getDate(),
  aar: d.getFullYear(),
  time: d.getHours(),
  minut: d.getMinutes(),
  Uddannelse: 'Erhvervsakademiet Aarhus',
  adresse: 'Ringvej syd 104 <br>8260 Viby j',


  skrivTilFooter: function() {
    console.log('footeren.skrivTilFooter() = aktiv');
    footerInfo.innerHTML += `
      <div>
        &copy; Opgave - Webdokumentar<br>
        by ${this.author}
        ${this.dag}
        ${this.dagImaaned}.
        ${this.maaned}
        ${this.aar}.
      </div>
    `;
  },
  skrivAdresse: function() {
    footerInfo.innerHTML += `
      <div class="adresse">
        <p>${this.Uddannelse}</p>
        <p>
          ${this.adresse}
        </p>
      </div>
    `
  }
}

info.skrivAdresse(); // Spørgsmål 2
info.skrivTilFooter(); // Spørgsmål 1
