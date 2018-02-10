

//Аккордеон для секции МЕНЮ

 var acco2 = document.querySelectorAll(".menu__list"); 
 for (var i=0; i<acco2.length; i++) {
 	acco2[i].addEventListener('click',function(el) {
 		for (var j=0; j<acco2.length; j++) {
 			
 			acco2[j].classList.remove('menu__list--active');
 		}

 		el.currentTarget.classList.toggle('menu__list--active');
 	
 	});
 }

//Аккордеон для секции КОМАНДА

var acco = document.querySelectorAll(".team-acco__item");
 for (var i=0; i<acco.length; i++) {
 	acco[i].addEventListener('click',function(e) {
 		for (var j=0; j<acco.length; j++) {
 		
 			acco[j].classList.remove('team-acco__item--active');
 		}
 		e.currentTarget.classList.toggle('team-acco__item--active');
 	
 	});
 }


//При клике на гамбургер, для появления меню на планшете и телефоне

var gamburger = document.querySelector('.gamburger');
gamburger.addEventListener('click',function() {
	var underMenu = document.querySelector('.under-menu');
	underMenu.classList.remove('not-visible');
});


// При клике на меню на главном экране 

var exit = document.querySelector('.exit');
exit.addEventListener('click',function() {
	var underMenu = document.querySelector('.under-menu');
	underMenu.classList.add('not-visible');
});


var link = document.querySelectorAll('.under-menu__item');

for (var i=0; i<link.length; i++) {
	link[i].addEventListener('click', function() {
		var underMenu = document.querySelector('.under-menu');
		underMenu.classList.add('not-visible');
	});
}


// Появление состава при нажатии на кнопку состав

var consist = document.querySelector('.slider__consist');
consist.addEventListener('click', function() {
 	var show = document.querySelector('.consist-info');
 	show.classList.toggle('consist-info--visible');
 });



//		Навигационная панель

var navigat = document.querySelectorAll('.navigat__item');
for (var i=0; i<navigat.length; i++) {
		navigat[i].addEventListener('click', function(e) {
			for (var j=0; j<navigat.length; j++) {
				navigat[j].classList.remove('navigat__item--active');
			}
		e.currentTarget.classList.toggle('navigat__item--active');

		});
}






// ***********************		testing

/*

var prev = document.querySelector('.btn--prev');
var next = document.querySelector('.btn--next');
var prev = document.querySelector('.btn--prev');
var sliders = document.querySelectorAll('.test__item');

var current = 0;



next.addEventListener('click',function(e) {
	e.preventDefault();
	current++;
	if (current>=sliders.length) {
		current-=sliders.length;
	}
	show(current);
  
});
	
prev.addEventListener('click',function(e) {
	e.preventDefault();
	current--;
    if (current<0) {
		current=sliders.length-1;
	}
	show(current);
});


function show(n) {
		for (i=0; i<sliders.length; i++) {
			if (i!==n) {
				sliders[i].classList.remove('test__item--current');
			}
			else {
				sliders[i].classList.add('test__item--current');
			}
		}

}

*/


