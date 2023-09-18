
// const primaryNav = document.querySelector(".primary-navigation");
// const navToggle = document.querySelector(".mobile-nav-toggle");


// navToggle.addEventListener("click", () => {
//     const visibility = primaryNav.getAttribute("data-visible");

//     if (visibility === "false"){
//         primaryNav.setAttribute("data-visible", true);
//         navToggle.setAttribute("aria-expanded", true);
//     }   
//     else if(visibility ==="true"){
//         primaryNav.setAttribute("data-visible", false)
//         navToggle.setAttribute("aria-expanded", false);
//     }
// });

// $(function () {
// 	$(".hover-underline-animation").click(function () {
// 	 $(".hover-underline-animation").removeClass("active");
// 	 $(this).addClass("active");
// 	});
//    });

// (function ($) {
	
// 	//Primary section / navigation
// 	var mainNav =$(".primary-header");
// 		menuLinks = mainNav.find("a");

// 	var pageSwitch = $(".page");
// 	pageSwitch.not(":first").hide(); // skryje vsetky sekcie, okrem prvej

// 	menuLinks.on("click", function (){
// 		var id = $(this).attr("href"); // hodnota href linku sa rovna idcku prislusnej sekcie
// 		pageSwitch.hide();
// 		$(id).fadeIn(); 	// kedze href je rovny idcku sekcie, mozem ho podla neho vytiahnut a zobrazit
// 	});



// 	// Planets section
// 	var platets = $(".planets-head");
// 	planetLinks = platets.find("a");

// 	var planetsSwitch = $(".planet");
// 	planetsSwitch.not(":first").hide(); // skryje vsetky sekcie, okrem prvej

// 	planetLinks.on("click", function (){
// 		var id = $(this).attr("href"); // hodnota href linku sa rovna idcku prislusnej sekcie
// 		planetsSwitch.hide();
// 		$(id).fadeIn(); 	// kedze href je rovny idcku sekcie, mozem ho podla neho vytiahnut a zobrazit
// 	});





// 	$(document).ready(function(){ 
//         $("#main1").click( function(){
// 			$('body').removeClass().addClass("bg1");
// 		});
// 	});
// 	$(document).ready(function(){ 
// 		$("#destination1").click( function(){
// 			$('body').removeClass().addClass("bg2");
//     	});
// 	});
// 	$(document).ready(function(){ 
// 		$("#crew1").click( function(){
// 			$('body').removeClass().addClass("bg3");
//     	});
// 	});
// 	$(document).ready(function(){ 
// 		$("#technology1").click( function(){
// 			$('body').removeClass().addClass("bg4");
// 		});
// 	});

	
    
// })(jQuery);
