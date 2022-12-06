let loc = window.location.pathname;
let effectDir = loc.substring(0, loc.lastIndexOf('/'))+"/Pics/BG_Effects";
effectDir = effectDir.replace("Pages/","");
let picDir = loc.substring(0, loc.lastIndexOf('/'))+"/Pics/BG_Stills";
picDir = picDir.replace("Pages/","");
let numLimit = 5;
let picPathsWebm = [];
let picPathsMp4 = [];
let picPathPosters = [];
let randomPick = Math.floor(1+5*Math.random());
let picPathWebm;
let picPathMp4;
let picPathPoster;

for(let i = 1; i <= numLimit; i++){
    picPathsWebm.push(effectDir+"/BG_"+i+".webm");
    picPathsMp4.push(effectDir+"/BG_"+i+".mp4");
    picPathPosters.push(picDir+"/BG_"+i+".jpg");
}

picPathMp4 = picPathsMp4[randomPick-1];
picPathWebm = picPathsWebm[randomPick-1];
picPathPoster = picPathPosters[randomPick-1];

window.onload = function() {
    let background_image_dynamics_id = document.getElementById("background_image_dynamics");
    background_image_dynamics_id.src = picPathWebm;
}