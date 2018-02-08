
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
//При клике на гамбургер, для появления меню на сером фоне

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
})


var link = document.querySelectorAll('.under-menu__item');

for (var i=0; i<link.length; i++) {
	link[i].addEventListener('click', function() {
		var underMenu = document.querySelector('.under-menu');
		underMenu.classList.add('not-visible');
	});
}
