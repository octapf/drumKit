

var w = document.querySelector(".w");
var a = document.querySelector(".a");
var s = document.querySelector(".s");
var d = document.querySelector(".d");
var j = document.querySelector(".j");
var k = document.querySelector(".k");
var l = document.querySelector(".l");
var bodyElement = document.querySelector("body");

var drum = document.querySelector(".drum");

for (let i = 0; i < document.querySelectorAll(".drum").length ; i++) {
    
    document.querySelectorAll(".drum")[i].addEventListener("click", function (event) {  handleSound ( document.querySelectorAll(".drum")[i].innerHTML ); buttonAnimation(document.querySelectorAll(".drum")[i].innerHTML);  } ) ;
    
}

//event listener to the whole document

document.addEventListener("keydown", function(event){ handleSound ( event.key ); buttonAnimation(event.key); } );

function buttonAnimation ( currentKey ) {
   

    var activeButton = document.querySelector("." + currentKey);
    activeButton.classList.add( "pressed" );

    setTimeout ( function () { activeButton.classList.remove ( "pressed" ) }, 100 ) ;

}

function  handleSound(letter) {
    
    switch (letter) {
        case "w":
            var audioW = new Audio("sounds/tom-1.mp3");
            audioW.play();

            break;
    ç
        case "a":
            var audioA = new Audio("sounds/tom-2.mp3");
            audioA.play();

            break;

        case "s":
            var audioS = new Audio("sounds/tom-3.mp3");
            audioS.play();

            break;

        case "d":
            var audioD = new Audio("sounds/tom-4.mp3");
            audioD.play();


            break;

        case "j":
            var audioJ = new Audio("sounds/crash.mp3");
            audioJ.play();

            break;

        case "k":
            var audioK = new Audio("sounds/kick-bass.mp3"); 
            audioK.play();

            break;

        case "l":
            var audioL = new Audio("sounds/snare.mp3");
            audioL.play(); 
    
            break;
        
        default:

            break;
    }
    
}

