/*var paper = new Raphael($('.tumblr .icon')[0], '100%', '100%');

var tumblr = paper.path('M45.445,31.001V36.2h4.881v3.229h-4.881v5.274c0,1.192,0.064,1.958,0.189,2.297' +
						'c0.127,0.339,0.361,0.608,0.705,0.811c0.455,0.272,0.975,0.409,1.562,0.409c1.039,0,2.076-0.338,3.105-1.016v3.244' +
						'c-0.879,0.414-1.674,0.705-2.387,0.871c-0.713,0.167-1.482,0.25-2.311,0.25c-0.939,0-1.771-0.118-2.494-0.355' +
						's-1.34-0.576-1.85-1.016s-0.863-0.907-1.061-1.402s-0.295-1.213-0.295-2.152v-7.215h-2.274v-2.91' +
						'c0.808-0.263,1.501-0.64,2.077-1.13c0.576-0.489,1.037-1.078,1.387-1.766c0.348-0.687,0.588-1.561,0.721-2.622H45.445z');
tumblr.attr({
	'fill'			: '#333',
	'stroke-width'	: 0
});
*/

$('.tile').hover(function() {
	$(this).find('.tile-meta').toggleClass('tile-over');
}, function() {
	$(this).find('.tile-meta').toggleClass('tile-over');
});

$('.tile-meta p').fitText();

$('.row').each(function() {
	var left	= $(this).children()[0],
		right	= $(this).children()[1],
		larger;

	if($(left).outerHeight() < $(right).outerHeight()) {
		larger = $(right).height();
		$(left).height($(right).outerHeight());
	} else {
		larger = $(left).height();
		$(right).height($(left).outerHeight());
	}

	$(this).children().each(function() {
		$(this).find('.icon').css('line-height', larger + 'px');
	});
});



