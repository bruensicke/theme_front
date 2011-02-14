
/* Drop-down menus on hover */
$('.primary li').hover(
	function() { $(this).find('ul.tabs').show(); },
	function() { $(this).find('ul.tabs').hide(); }
);


infoFade();
prevnextFade();
thumbzoomFade();
reboundzoomFade();
multizoomFade();
initFollowPrompts();

/*
 * jQuery extensions
 */

// Shows the current element(s) and hides the element(s) passed or specified by selector.
jQuery.fn.showAndHide = function(elemToHide) {
	$(elemToHide).hide();
	return this.show();
}

// Returns model id parsed from element id w/ format "prefix-<id>"
jQuery.fn.modelId = function() {
	var id = $(this).attr('id');
	if (id == null) return null; // Just in case; browsers tested return empty string for missing id.

	var idParts = id.split(/[-_]/g); // Split on hyphens and underscores
	return (idParts.length > 1) ? idParts[idParts.length-1] : null;
}

/*
 * Custom libs
 */

Notify = {
	success: function(message) {
		Notify.notify('success', message);
	}, 
	error: function(message) {
		Notify.notify('error', message);
	},
	notify: function(typeOfNoticeClass, message) {
		$('.notice').hide();
		$('#ajax-message').text(message);
		$('.notice').
			removeClass().
			addClass('notice').
			addClass(typeOfNoticeClass).
			show();
	}
}

ShowAndHideControl = function(options) {
	var elemToShowAndHide = $(options['target']);
	var showTriggers = $(options['showControl']);
	var hideTriggers = $(options['hideControl']);
	
	showTriggers.
		click(function() {
			elemToShowAndHide.showAndHide(showTriggers);
			return false;
		});

	hideTriggers.
		click(function() {
			elemToShowAndHide.hide();
			showTriggers.show();
			return false;
		});
}

/*
 * Converts a number to its value in thousands (K), e.g. 12,000 => 12
 */
function toK(num) {
	return num / 1000;
}

function formatK(num) {
	return toK(num) + 'K';
}

// show screenshot info on hover
function infoFade() {	
	$('ol.group li div.item-img').hover(
		function () {
        	$(this).find('a.item-over').stop().fadeTo('fast', 1);
        	},
        function () {
        	$(this).find('a.item-over').stop().fadeTo('fast', 0);
      	}
	);
}

// show prev/next arrows on hover
function prevnextFade() {	
	$('ol.prevnext li a').hover(
		function () {
        	$(this).find('strong').stop().fadeTo('fast', 1);
        	},
        function () {
        	$(this).find('strong').stop().fadeTo('fast', 0);
      	}
	);
}

// show zoom icon on thumbnail hover
function thumbzoomFade() {	
	$('ol.activity li div.act-shot a').hover(
		function () {
        	$(this).find('strong').stop().fadeTo('fast', 1);
        	},
        function () {
        	$(this).find('strong').stop().fadeTo('fast', 0);
      	}
	);
}

// show zoom icon on thumbnail hover
function reboundzoomFade() {	
	$('div.the-rebound div.item-img').hover(
		function () {
        	$(this).find('a.item-over').stop().fadeTo('fast', 1);
        	},
        function () {
        	$(this).find('a.item-over').stop().fadeTo('fast', 0);
      	}
	);
}

// show zoom icon on multi thumb hover
function multizoomFade() {	
	$('ol.multi-grid li a').hover(
		function () {
        	$(this).find('strong').stop().fadeTo('fast', 1);
        	},
        function () {
        	$(this).find('strong').stop().fadeTo('fast', 0);
      	}
	);
}

// show/hide pixel useage help
$('#pixels-help-a').click(function() {
	$('#pixels-help').slideToggle("normal");
	return false;
})

$('[rel=tipsy]').tipsy({fade: true, gravity: 's'});

