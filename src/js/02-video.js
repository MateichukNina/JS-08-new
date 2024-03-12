import Player from "@vimeo/player";
import throttle from 'lodash.throttle';
import simpleLightbox from "simplelightbox";

const iframe = document.querySelector('iframe');
const player = new Player(iframe);

 function saveCurrentTime(evt){
   const currentTime = evt.seconds;
   localStorage.setItem("videoplayer-current-time", JSON.stringify(currentTime))
 }

 player.on('play', onPlay);

 function onPlay(){
   player.on("timeupdate", throttle(saveCurrentTime, 1000)); 
   const getTime = localStorage.getItem("videoplayer-current-time");
   const parseTime = JSON.parse(getTime);
    
   player.setCurrentTime(parseTime).then(function() {
    //  мать его тудысь((   
    }).catch(function(error) {
        switch (error.name) {
            case 'RangeError':
                break;

            default:
                break;
        }
    })

 }



