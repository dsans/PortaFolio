$(document).on('ready',function(){
	// Asignamos a la sección 1 el alto de la pantalla
	alturaventana= $(window).height();
	$(".app-header").css("height",alturaventana);
	$(window).scroll(function(){
		if($(this).scrollTop() > 200){
			$(".app-navbar").addClass("app-sticky")
			$(".app-navbar li a,.app-logo").css("color","white")
			
		}
		else{
			$(".app-navbar").removeClass("app-sticky")
			$(".app-navbar li a,.app-logo").css("color","black")
		}




	});
});
