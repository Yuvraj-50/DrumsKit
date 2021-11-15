var drums = document.querySelectorAll(".drum").length;
for (i = 0; i < drums; i++) {
    document.querySelectorAll("button")[i].addEventListener("click", function () {

        var hello = this.innerHTML;

        ckickCheck(hello);

        buttonAnimation(hello);
        
    });

}

document.addEventListener("keypress",  function(event){

        ckickCheck(event.key);

        buttonAnimation(event.key);
    });

    function ckickCheck(key){
        switch (key) {
            case "a":
                var tom1 = new Audio("sounds/tom-1.mp3");
                tom1.play();
                break;

            case "s":
                var tom2 = new Audio("sounds/tom-2.mp3");
                tom2.play();
                break;

            case "d":
                var tom3 = new Audio("sounds/tom-3.mp3");
                tom3.play();
                break;

            case "f":
                var tom4 = new Audio("sounds/tom-4.mp3");
                tom4.play();
                break;

            case "j":
                var kickBass = new Audio("sounds/snare.mp3");
                kickBass.play();
                break;

            case "k":
                var snare = new Audio("sounds/crash.mp3");
                snare.play();
                break;

            case "l":
                var crash = new Audio("sounds/kick-bass.mp3");
                crash.play();
                break;


            default:
                console.log(hello);
                break;
        }
    }
function buttonAnimation(currentKey){

    var activeButton =   document.querySelector( "." + currentKey);
        activeButton.classList.add("pressed"); 
        setTimeout(function (){
            activeButton.classList.remove("pressed");},100);

}



