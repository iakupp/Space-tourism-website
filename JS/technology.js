// hover active effect navigation planets

var carousel = document.getElementById("carousel");
var number = carousel.getElementsByClassName("number");

for (var i = 0; i < number.length; i++){
    number[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
