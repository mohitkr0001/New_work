$(function() {
	var i=0;
var ar=["#e27a7a","#fbf370","#d371f7","#39f785","#f38943","#5ed2be","#cf62df","#f7537d","#bd59f1","#30dd9a","#e67c2e" ];
	$(".ripple").on('click', function(e) {
		i=Math.floor((Math.random() * 100) + 1);
		i=i%10;
		if ($(this).find('span').length === 0) {

			$(this).append('<span></span>');

			var ripple = $(this).find('span'),
				size = ( $(this).innerWidth() > $(this).innerHeight() ) ? $(this).innerWidth()*2 : $(this).innerHeight()*2,
				clickY = $(this).offset().top,
				clickX = $(this).offset().left,
				x = e.pageX - clickX,
				y = e.pageY - clickY;
			ripple.css({'top':y +'px','left':x +'px','background-color':ar[i]});
			
			ripple.animate({
				'width': size +'px',
				'height': size +'px',
				'margin-top': -size/2 +'px',
				'margin-left': -size/2 +'px',
				'opacity': 1,
			}, 600,function(){
				$('.ripple').css({'background-color':ar[i]});
				$(this).remove();
			});

		}
		
	});

});