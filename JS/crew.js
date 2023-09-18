//hover active effect slideshow crew 

var dots = document.getElementById("dots");
var dot = dots.getElementsByClassName("dot");

for (var i = 0; i < dot.length; i++){
    dot[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
