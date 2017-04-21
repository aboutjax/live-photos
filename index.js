'use strict';
// A Player built from a pre-existing element:
const player = LivePhotosKit.Player(document.getElementById('live-photo'));

player.photoSrc = './src/IMG_5468.JPG';
player.videoSrc = './src/IMG_5468.mov';

// document.getElementsByClassName('lpk-badge')[0].addEventListener("mouseover", function(){
//   player.play()
// })
