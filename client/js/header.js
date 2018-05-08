// Google Analytics
if(navigator.userAgent.indexOf("Speed Insights") == -1) {
	(function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
	(i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
	m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
	})(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

	ga('create', 'UA-54085612-1', 'auto');
	ga('send', 'pageview');
}
//End Google Analytics


var item_link = document.querySelectorAll('.item-link'),
	movable_bar = document.querySelector('.movable-bar');


function hoverItem(posLeft){
	return function(){
		movable_bar.style.opacity = '1';
		//movable_bar.style.left = ((posLeft*120) + 10) + 'px';
		if(posLeft === 0){
			movable_bar.style.left = (0 + 10) + 'px';
		}else if(posLeft === 1){
			movable_bar.style.left = (140 + 10) + 'px';
		}else if(posLeft === 2){
			movable_bar.style.left = (288 + 10) + 'px';
		}else if(posLeft === 3){
			movable_bar.style.left = (405 + 10) + 'px';
		}else if(posLeft === 4){
			movable_bar.style.left = (500 + 10) + 'px';
		}else if(posLeft === 5){
			movable_bar.style.left = (600 + 10) + 'px';
		}
	};
}

function hoverItem_desactivado(posLeft){
	return function(){
		movable_bar.style.opacity = '0';
	};
}


for(var a=0; a<item_link.length; a++){
	item_link[a].addEventListener('mouseover', hoverItem(a));
}
for(var a=0; a<item_link.length; a++){
	item_link[a].addEventListener('mouseout', hoverItem_desactivado(a));
}

movable_bar.style.opacity = '0';


//Menu Responsive

var list_items = document.querySelector('.list-items'),
	open_menu_mobile = document.querySelector('.open-menu-mobile'),
	link_logo = document.querySelector('.link-logo'),
	link_logo_mobile = document.querySelector('.link-logo-mobile'),
	contador = 0;

open_menu_mobile.addEventListener('click', function(){
	if( contador === 0 ){
		list_items.classList.add('active');
		open_menu_mobile.classList.add('active');
		link_logo.classList.add('active');
		link_logo_mobile.classList.add('active');
		contador = 1;
	}else if( contador === 1 ){
		list_items.classList.remove('active');
		open_menu_mobile.classList.remove('active');
		link_logo.classList.remove('active');
		link_logo_mobile.classList.remove('active');
		contador = 0;
	}
});
