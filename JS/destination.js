// hover active effect navigation planets

var btnContainer = document.getElementById("myLinks");
var links = btnContainer.getElementsByClassName("links");

for (var i = 0; i < links.length; i++){
    links[i].addEventListener("click", function(){
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        this.className += " active";
    });
}
