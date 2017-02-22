//  interactive map

ymaps.ready(init);

function init() {
	var myMap = new ymaps.Map('map', {
		center: [59.93923400570833, 30.329127021209725],
		zoom: 16,
		controls: []
	});

	myMap.behaviors.disable('scrollZoom');

	myMap.controls.add("zoomControl", {
		position: {
			top: 15,
			left: 15
		}
	});

	var myPlacemark = new ymaps.Placemark(
		[59.93863106417265, 30.3230545], {}, {
			iconLayout: 'default#image',
			iconImageHref: 'img/marker.png',
			iconImageSize: [218, 142],
			iconImageOffset: [-45, -140]
		});

	myMap.geoObjects.add(myPlacemark);

}

//  modal-feedback

var feedback = document.querySelector(".feedback-btn");
var popup = document.querySelector(".modal-feedback");
var close = document.querySelector(".modal-feedback-close");

feedback.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.add("modal-feedback-show");
});

close.addEventListener("click", function(event) {
	event.preventDefault();
	popup.classList.remove("modal-feedback-show");
});


window.addEventListener("keydown", function(event) {
	if (event.keyCode == 27) {
		if (popup.classList.contains("modal-feedback-show")) {
			popup.classList.remove("modal-feedback-show");
		}
	}
});
