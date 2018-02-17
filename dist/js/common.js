	$(document).ready(function() {

	var owl = $(".carousel");
	owl.owlCarousel({
		// margin: 10,
		// stagePudding: 20,
		items : 6,
		autoplay: true,
		autoplaytimeout: 1000,
		// responsive: {
		// 	0: {
		// 		items: 6,
		// 	},
		// 	320: {
		// 		items: 3,
		// 	},
		// 	480: {
		// 		items: 4,
		// 	},
		// 	768: {
		// 		items: 5,
		// 	},
		// 	992: {
		// 		items: 5,
		// 		autoplay: true,
		// 	},
		// 	1200: {
		// 		items: 6,
		// 		autoplay: true,
		// 	},
		// }	
	});
	owl.on("mousewheel", ".owl-wrapper", function (e) {
		if (e.deltaY > 0) {
			owl.trigger("owl.next");
		} else {
			owl.trigger("owl.prev");
		}
		e.preventDefault();
	});
	$(".next_button").click(function(){
		owl.trigger("owl.prev");
	});
	$(".prev_button").click(function(){
		owl.trigger("owl.next");
	});

});

let menu = document.getElementsByClassName('aside')[0];

function toogleMenu() {
    if (menu.className === 'aside') {
    	menu.className += " aside_header";
    } else {
    	menu.className = "aside";
    }
}