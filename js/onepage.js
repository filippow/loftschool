
var sections = $('.section');
var display = $('.maincontent');

var isScroll=false;

const mobileDetect = new MobileDetect(window.navigator.userAgent);
const isMobile = mobileDetect.mobile();

const tabletDetect = new MobileDetect(window.navigator.userAgent);
const isTablet = tabletDetect.tablet();


if (!isMobile && !isTablet) {
	console.log('da');
const setActiveMenuItem = itemEq => {
  	$('.navigat__item').eq(itemEq).addClass('navigat__item--active')
    	.siblings().removeClass('navigat__item--active')
} 

function scrollToSection(direction) {

	var sectionActive = sections.filter('.section--active');
	var sectionNext = sectionActive.next();
	var sectionPrev = sectionActive.prev();
	

			
		if (direction ==='up' && sectionPrev.length ) {	
			
			performTransition(sectionPrev.index());	
		}
		 if (direction === 'down' && sectionNext.length) {
		 	performTransition(sectionNext.index());		
		}
}

$('.arrows__img').on('click', function(e) {
	performTransition(1);
});

function performTransition(sectionEq) {
	
	if (isScroll) return;

	isScroll=true;	
	var position = `${sectionEq * -100}%`;

	display.css({
		'transform' : `translate(0, ${position})`,
		'-webkit-transform' : `translate(0, ${position})`,
	});
	sections.eq(sectionEq).addClass('section--active').siblings().removeClass('section--active');
	setActiveMenuItem(sectionEq);

	setTimeout( function() {
			isScroll=false;
		},600);
}

$(document).on({
	wheel: e => {
	var delta = e.originalEvent.deltaY;
	var direction  = delta > 0 ? 'down' : 'up';

	scrollToSection(direction);
	
	},
	keydown: e=> {
		switch(e.keyCode) {
			
			case 38: 
				scrollToSection('up');
				break;
			case 40:
			 	scrollToSection('down');
				break;
		}
	},
	//touchmove: el=> el.preventDefault()

});

$('[data-scroll-to]').on('click', e => {
	e.preventDefault();

	var target = parseInt($(e.currentTarget).attr('data-scroll-to'));
	performTransition(target);
});

}

else {

$('[data-scroll-to]').on('click', e => {
	e.preventDefault();
	console.log('fuf');

});

}
