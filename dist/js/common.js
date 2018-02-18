	$(document).ready(function() {

	var owl = $(".carousel");
	owl.owlCarousel({
		// margin: 10,
		// stagePudding: 20,
		items : 6,
		// responsive: {
		// 	0: {
		// 		items: 1,
		// 	},
		// 	320: {
		// 		items: 1,
		// 	},
		// 	480: {
		// 		items: 1,
		// 	},
		// 	768: {
		// 		items: 1,
		// 	},
		// 	1024: {
		// 		items: 5,
		// 	},
		// 	1200: {
		// 		items: 6,
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