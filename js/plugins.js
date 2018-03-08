$(document).ready(function() {

  /* Création des barres de compétences + animations */
  $('.barres li').each(function() {
  	var pourcentage = $(this).attr('data-skills');
  	/*if(pourcentage < 80)
		$(this).append($("<span style=\"background-color: rgb(153, 210, 230);\"></span>").animate({
			width : ''+ pourcentage*0.75 +'%' }, 2000));
	else
		$(this).append($("<span></span>").animate({
			width : ''+ pourcentage*0.75 +'%' }, 2000));*/
	offset = 1.5*((pourcentage-10)/100);
	$(this).append($("<span style=\"background-color: rgb("+Math.floor(255-205*offset)+", "+Math.floor(255-89*offset)+", "+Math.floor(255-50*offset)+");\"></span>").animate({
		width : ''+ pourcentage*0.75 +'%' }, 2000));
	/*$(this).append($("<span style=\"background-color: rgb("+1.53*pourcentage+", "+2.10*pourcentage+", "+2.30*pourcentage+");\"></span>").animate({
		width : ''+ pourcentage*0.75 +'%' }, 2000));*/
  });
   
  
}); // Fin document.ready
