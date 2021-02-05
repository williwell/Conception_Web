function printCardsAdmin(list) {
	console.log("téléchargement de la card des enseignant: success");
	var nbrGestion = 0;
    for (var i = 0; i < list.length; i++) {
		var id="#"+list[i][0];
		var matricle= list[i][0];
		var idClose = list[i][0]+"close";
					$("#Teacher").append("<div id='"+list[i][0]+"' class='col-xl justify-content-center align-items-center' style='display:flex;'>"+
					"<div class='card' data-effect='zoom'>"+
					"<button class='card__save  js-save' type='button'>"+
					  "<i class='fa  fa-bookmark'></i>"+
					"</button>"+
                    "<figure class='card__image'>"+
					  "<img src='../../RESSOURCES/PHOTO_ENSEIGNANT/background.png' alt='book cover'>"+
					"</figure>"+
					"<div class='card__header'>"+
					"<figure class='card__profile'>"+
						"<img src='../../RESSOURCES/PHOTO_ENSEIGNANT/"+list[i][0]+".png' alt='author picture' width='25px' height='25px'>"+
					  "</figure>"+
					"</div>"+
					"<div class='card__body'>"+
					  "<h3 class='card__name'>"+list[i][1]+' '+list[i][2]+"</h3>"+
					  "<p class='card__job'>"+list[i][3]+"</p>"+
                      "<p class='card__bio'>"+list[i][4]+"<br>"+list[i][5]+" poste "+list[i][6]+"</p>"+
					"</div>"+
				  "</div>"+
				"</div>"
				  );
				
				  $(id).click(function() {
					if(nbrGestion == 0){
						nbrGestion = 1;
						$("#GestionEnseignant").append(
						"<div class='teacherAdminCard justify-content-evenly'>"+
								"<div class='row justify-content-end'>"+
									"<div class='col align-self-end'>"+
										"<i  class='material-icons closeIcon'>close</i>"+
									"</div>"+  
								"</div>"+ 
								
								
							"<div class='row justify-content-evenly'>"+
								"<div class='col justify-content-center align-items-center'>"+
									"<img src='../../RESSOURCES/PHOTO_ENSEIGNANT/"+matricle+".png' alt='author picture' width='100%' height='70%'>"+
									"<p class='horizontal' ><span class='text'>Changer la photo</span></p>"+
								"</div>"+

								"<div class='col'>"+
									"<form action='' method='post' enctype='text/plain'>"+
										"<div class='col'>"+
											"<label for='Prenom'>Prénom</label><br>"+
											"<input type='text' class='form-control' id=Prenom name=Prenom>"+
										"</div>"+
										
										"<div class='col'><br>"+
											"<label for='Nom'>Nom</label><br>"+
											"<input type='text' class='form-control' id=Nom name=Nom>"+
										"</div>"+
										
										"<div class='col'><br>"+
											"<label for='Adresse'>Courriel</label>"+
											"<input type='email' class='form-control' id=Adresse name=Adresse>"+
										"</div><br>"+
										
										"<div class='col'>"+
											"<label for='Message'>Message</label><br>"+
											"<textarea type='text' class='form-control' id=Message name=Message rows='7'></textarea>"+
										"</div><br>"+
										
										"<div class='row justify-content-evenly'>"+
											"<p class='horizontal'><span class='text'>Sauvegarder</span></p>"+
											"<p class='horizontal' ><span class='text'>Supprimer le profil</span></p>"+
											
										"</div>"+ 
									"</form>"+ 
								"</div>"+
								
							"</div>"+    
    
							"</div>"
							);
							$(".closeIcon").click(function(){
								nbrGestion = 0;
								$("#GestionEnseignant").empty();
							});
					}
				  });
			
    }
   

}