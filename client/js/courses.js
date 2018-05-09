$(document).on('ready', function(event) {

	function items_toggle() {
		console.log('pantallas menor a 768');			
		
		$('.courses-temary-item-bottom').stop(false).slideUp();

		$('.courses-temary-item.first').find('.courses-temary-item-top').addClass('active');
		$('.courses-temary-item.first').find('.courses-temary-item-bottom').stop(false).slideDown();
		
		$(".courses-temary-item-top").on('click', function(event) {
			$('.courses-temary-item-top').removeClass('active');			
			$('.courses-temary-item-bottom').stop(false).slideUp();
			
	
			if( $(".courses-temary-item-top").hasClass('active') ){
				console.log('este esta abierto');
				$(this).removeClass('active');
				$(this).closest('.courses-temary-item').find('.courses-temary-item-bottom').stop(false).slideUp();
			}else{
				console.log('este esta cerraod');
				
				$(this).addClass('active');
				$(this).closest('.courses-temary-item').find('.courses-temary-item-bottom').stop(false).slideDown();
			}
		});

		

		

			
		/*$('.courses-temary-item-bottom').stop(false).slideUp();
		$('.courses-temary-item.first').find('.courses-temary-item-bottom').stop(false).slideDown();
		$('.courses-temary-item.first').find('.courses-temary-item-top').addClass('active');
		
		var toggleTop = $('.courses-temary-item-top'),
			contador = 0;
		

		toggleTop.click(function() {
			console.log('entre');
			$('.courses-temary-item-top').removeClass('active');
			$('.courses-temary-item').removeClass('active');
			$('.courses-temary-item-bottom').stop(false).slideUp();
			$(this).closest('.courses-temary-item').find('.courses-temary-item-bottom').stop(false).slideDown()
			$(this).closest('.courses-temary-item').addClass('active')
			if(contador === 0){
				$(this).closest('.courses-temary-item').find('.courses-temary-item-top').addClass('active');
				contador = 1;
			}else if(contador === 1){
				$(this).closest('.courses-temary-item').find('.courses-temary-item-top').removeClass('active');
				contador = 0;
			}
		})*/
	}
	function items_desactive_toggle(){
		console.log('pantallas mayor a 768');

		
		
		$('.courses-temary-item.first').find('.courses-temary-item-bottom').stop(false).slideDown();
		$('.courses-temary-item.first').find('.courses-temary-item-top').removeClass('active');
		
		$('.courses-temary-item-top').click(function(){
			$('.courses-temary-item-bottom').stop(false).slideDown();
			$(this).closest('.courses-temary-item').find('.courses-temary-item-bottom').slideDown();

			$('.courses-temary-item.first').find('.courses-temary-item-bottom').stop(false).slideDown();
			$('.courses-temary-item.first').find('.courses-temary-item-top').removeClass('active');
			
		});

		$('courses-temary-item-bottom').css('display', 'block');
	} 



	if (matchMedia) {
		var mq = window.matchMedia("(max-width: 768px)");
		mq.addListener(WidthChange);
		WidthChange(mq);
	}

	// media query change
	function WidthChange(mq) {

		if (mq.matches ) {
			console.log('menor a 768');
			items_toggle();

		}
		else {
			console.log('mayor a 768');			
			items_desactive_toggle();
			
		};

	}

});

