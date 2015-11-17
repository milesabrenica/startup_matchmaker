$(document).ready(function(){
		$('a.developer').click(function() {
			if ( $('#developer_page').is(":hidden") ) {
				$('.page').fadeOut("slow");
				$('#developer_page').fadeIn("slow");
			};
				
		});
		$('a.designer').click(function() {
			if ( $('#designer_page').is(':hidden') ) {
				$('.page').fadeOut("slow");
				$('#designer_page').fadeIn("slow");

			};
		});
		
		$('header h1').click(function() {
			if ( $('#homepage').is(':hidden') ) {
				$('.page').fadeOut("slow");
				$('#homepage').fadeIn("slow");
			};
			
		});

	$(".profile-photo").append("<div class='profile-photo'>"+"<img class='nophoto'src='nophoto.png'>"+"</div>")
});

