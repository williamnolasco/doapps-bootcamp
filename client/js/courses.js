$(document).on('ready', function(event) {

	function items_toggle() {
		$('.courses-temary-item-bottom').slideUp();
		
		$(".courses-temary-item-top").on('click', function(event) {
			$('.courses-temary-item-top').removeClass('active');			
			$('.courses-temary-item-bottom').slideUp();
			$(this).addClass('active');
			$(this).closest('.courses-temary-item').find('.courses-temary-item-bottom').slideDown();
			/*$this = $(this);
	
			$contentItem = $this.siblings('.courses-temary-item-bottom');
	
			if($contentItem.is(":visible")){
	
				$this.find("h5 i").removeClass().addClass('icon-chevron-thin-left');
				$contentItem.slideUp();
			}
			else{
				$this.find("h5 i").removeClass().addClass('icon-angle-double-down');
				$contentItem.slideDown();
			}*/
	
		});
	}

	function media_768(){
		if( window.matchMedia("(max-width: 768px)").matches ){
			items_toggle();
		}
	}

	window.addEventListener('resize', function(event){
		media_768();
	});
	media_768();

});

