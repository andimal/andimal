function sizeWork() {
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
}

sizeWork();

/*$(window).resize(function(){ 
	sizeWork();
});*/

$('.link').click(function() {
	var address = $(this).find('a').attr('href');
	window.location = address;
});



