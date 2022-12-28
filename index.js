
// Make sound with mouse click

var NumOfDrums = document.querySelectorAll(".drum").length;

for(var i=0; i<NumOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("click", function () {
        var keyClicked = this.innerHTML;
        makeSound(keyClicked);
        buttonAnimation(keyClicked);
    });
}

// Make sound with keyboard click

for(var i=0; i<NumOfDrums; i++) {
    document.querySelectorAll(".drum")[i].addEventListener("keypress", function (event) {
        makeSound(event.key);
        buttonAnimation(event.key);
    });
}



// Function to make sound based on the Character.

function makeSound(button) {
    switch (button) {
        case "w": 
            var sound = new Audio("sounds/crash.mp3");
            sound.play();
            break;
        case "a":
            var sound = new Audio("sounds/kick-bass.mp3");
            sound.play();
            break;
        case "s":
            var sound = new Audio("sounds/snare.mp3");
            sound.play();
            break;
        case "d":
            var sound = new Audio("sounds/tom-1.mp3");
            sound.play();
            break;
        case "j":
            var sound = new Audio("sounds/tom-2.mp3");
            sound.play();
            break;
        case "k":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        case "l":
            var sound = new Audio("sounds/tom-3.mp3");
            sound.play();
            break;
        default:console.log(this.innerHTML);
            break;
    }

}


// Function to add animation 

function buttonAnimation(CurrentKey) {
    var activeKey = document.querySelector("." + CurrentKey);
    activeKey.classList.add("pressed");

    setTimeout(function(){
        activeKey.classList.remove("pressed")
    },100);

}


