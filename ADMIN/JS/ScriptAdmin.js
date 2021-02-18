function printCardsAdmin(list) {
	console.log("téléchargement de la card des enseignant: success");
	var nbrGestion = 0;
    for (var i = 0; i < list.length; i++) {
		var id="#"+list[i][0];
		var matricule= list[i][0];
		var idClose = list[i][0]+"close";
		var prenom= list[i][1];
		var nom= list[i][2];
		var emploi= list[i][3];
		var courriel= list[i][4];
		var telephone= list[i][5];
		var poste= list[i][6];
		$("#Teacher").append("<div id='"+list[i][0]+"' class='col-xl justify-content-center align-items-center' style='display:flex;' onclick='gestionEnseignant("+matricule + ",\"" + prenom + "\",\"" + nom + "\",\"" + emploi + "\",\"" + courriel + "\",\"" + telephone + "\",\"" + poste + "\")'>"+
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
					  "<p class='card__job'>"+emploi+"</p>"+
                      "<p class='card__bio'>"+list[i][4]+"<br>"+list[i][5]+" poste "+list[i][6]+"</p>"+
					"</div>"+
				  "</div>"+
				"</div>"
				  );

    }
   

}


function gestionEnseignant(matricule,prenom,nom,emploi,courriel,telephone, poste) {
	if( $('#GestionEnseignant').is(':empty') ) {
		$("#GestionEnseignant").append(
			"<div class='teacherAdminCard justify-content-evenly container-fluid' style='padding:5%'>"+
					"<div class='row justify-content-end'>"+
						"<div class='col align-self-end'>"+
							"<i  class='material-icons closeIcon'>close</i>"+
						"</div>"+  
					"</div>"+ 
		
		
					"<div class='row justify-content-evenly centerItemPlz'>"+
							"<p class='centerItemPlz' style='font-size:50px;'>Modifier les informations d'un enseignant</p>"+
					"</div>"+ 
					
				"<div class='row justify-content-center'>"+
		
						"<div class='col centerItemPlz'>"+
							"<div class='row centerItemPlz'>"+
								"<img class='centerItemPlz' src='../../RESSOURCES/PHOTO_ENSEIGNANT/"+matricule+".png' alt='author picture' width='150PX' height='150PX'>"+
							"</div>"+
							"<div class='row centerItemPlz'>"+
								"<p class='horizontal centerItemPlz' style='height:25%;'><span class='text'>Changer la photo</span></p>"+
							"</div>"+
						"</div>"+
					"<div class='col'>"+
						"<form action='' method='post' enctype='text/plain'>"+
		
							"<div class='col'><br>"+
								"<label for='Matricule'>Matricule</label><br>"+
								"<input type='text' class='form-control' id=Matricule readonly name=Matricule value="+matricule+">"+
							"</div><br>"+
		
							"<div class='col'>"+
								"<label for='Prenom'>Prénom</label><br>"+
								"<input type='text' class='form-control' id=Prenom name=Prenom value="+prenom+">"+
							"</div>"+
							
							"<div class='col'><br>"+
								"<label for='Nom'>Nom</label><br>"+
								"<input type='text' class='form-control' id=Nom name=Nom value="+nom+">"+
							"</div>"+
							
							"<div class='col'><br>"+
								"<label for='Courriel'>Courriel</label>"+
								"<input type='email' class='form-control' id=Courriel name=Courriel value="+courriel+">"+
							"</div><br>"+
							
							"<div class='col'><br>"+
							"<label for='Emploi'>Emploi</label>"+
							"<input type='text' class='form-control' id=Emploi name=Emploi value="+emploi+">"+
							"</div><br>"+
							
							"<div class='col'><br>"+
							"<label for='Telephone'>Telephone</label>"+
							"<input type='text' class='form-control' id=Telephone name=Telephone value=\"" + telephone + "\">"+
							"</div><br>"+
		
							"<div class='col'><br>"+
							"<label for='Poste'>Poste</label>"+
							"<input type='text' class='form-control' id=Poste name=Poste value="+poste+">"+
							"</div><br><br>"+
		
							"<div class='row justify-content-evenly'>"+
								"<p class='horizontal' onclick='sauvegarderEnseignant("+matricule+")'><span class='text'>Sauvegarder</span></p>"+
								"<p class='horizontal' onclick='supprimerEnseignant("+matricule+")'><span class='text'>Supprimer le profil</span></p>"+
							"</div>"+ 
						"</form>"+ 
					"</div>"+
					
				"</div>"+    
		
				"</div>"
				
		);
	}
		$(".closeIcon").click(function(){
			nbrGestion = 0;
			$("#GestionEnseignant").empty();
		});

}

function sauvegarderEnseignant(matricule){
	var prenom = $("#Prenom").val();
	var nom=$("#Nom").val();
	var typeEmployer=$("#Emploi").val();
	var courriel=$("#Courriel").val();
	var telephone= $("#Telephone").val();
	var poste=$("#Poste").val();
	
	if (confirm("Êtes-vous certain de vouloir mettre à jour les informations de l'enseignant: "+matricule)) {
		$.ajax({
			url: "../PHP/updateTeacher.php",
			type: "POST",
			data: {
				"matricule": matricule,
				"prenom": prenom, 
				"nom": nom,
				"typeEmployer": typeEmployer,
				"courriel": courriel,
				"telephone": telephone,
				"poste": poste
			},
			dataType: "json",
			success: function(result){
				$("#GestionEnseignant").empty();
				location.reload();
			},
			error: function (message, er) {
				console.log("error: " + er);
			}
		});
	  }
}

function supprimerEnseignant(matricule){
	if (confirm("Êtes-vous certain de vouloir supprimer l'enseignant: "+matricule)) {

		$.ajax({
			url: "../PHP/deleteTeacher.php",
			type: "POST",
			data: {
				"matricule": matricule
			},
			dataType: "json",
			success: function(result){
				$("#GestionEnseignant").empty();
				location.reload();
				$("#GestionEnseignant").empty();
			},
			error: function (message, er) {
				console.log("error: " + er);
			}
		});
	  } else {

	  }
	
}

function ajouterPageEnseignant(){
	if( $('#GestionEnseignant').is(':empty') ) {
		$("#GestionEnseignant").append(
			"<div class='teacherAdminCard justify-content-evenly container-fluid' style='padding:5%'>"+
					"<div class='row justify-content-end'>"+
						"<div class='col align-self-end'>"+
							"<i  class='material-icons closeIcon'>close</i>"+
						"</div>"+  
					"</div>"+ 
		
		
					"<div class='row justify-content-evenly centerItemPlz'>"+
							"<p class='centerItemPlz' style='font-size:50px;'>Ajouter un enseignant</p>"+
					"</div>"+ 
					
				"<div class='row justify-content-center'>"+
		
						"<div class='col centerItemPlz'>"+
							"<div class='row centerItemPlz'>"+
							"<img class='centerItemPlz' src='../../RESSOURCES/PHOTO_ENSEIGNANT/Background.png' alt='author picture' width='150PX' height='150PX'>"+
							"</div>"+
							"<div class='row centerItemPlz'>"+
							"<p class='horizontal centerItemPlz' style='height:25%;'><span class='text'>Changer la photo</span></p>"+
							"</div>"+
						"</div>"+
					"<div class='col'>"+
						"<form action='' method='post' enctype='text/plain'>"+
		
							"<div class='col'><br>"+
								"<label for='Matricule'>Matricule</label><br>"+
								"<input type='text' class='form-control' id=Matricule name=Matricule>"+
							"</div><br>"+
		
							"<div class='col'>"+
								"<label for='Prenom'>Prénom</label><br>"+
								"<input type='text' class='form-control' id=Prenom name=Prenom>"+
							"</div>"+
							
							"<div class='col'><br>"+
								"<label for='Nom'>Nom</label><br>"+
								"<input type='text' class='form-control' id=Nom name=Nom"+
							"</div>"+
							
							"<div class='col'><br>"+
								"<label for='Courriel'>Courriel</label>"+
								"<input type='email' class='form-control' id=Courriel name=Courriel>"+
							"</div><br>"+
							
							"<div class='col'><br>"+
							"<label for='Emploi'>Emploi</label>"+
							"<input type='text' class='form-control' id=Emploi name=Emploi>"+
							"</div><br>"+
							
							"<div class='col'><br>"+
							"<label for='Telephone'>Telephone</label>"+
							"<input type='text' class='form-control' id=Telephone name=Telephone>"+
							"</div><br>"+
		
							"<div class='col'><br>"+
							"<label for='Poste'>Poste</label>"+
							"<input type='text' class='form-control' id=Poste name=Poste>"+
							"</div><br><br>"+
		
							"<div class='row justify-content-evenly'>"+
								"<p class='horizontal' onclick='ajouterEnseignant()'><span class='text'>Ajouter un enseignant</span></p>"+
								"<p class='horizontal' onclick='effacerInformationEnseignant()'><span class='text'>Effacer</span></p>"+
							"</div>"+ 
						"</form>"+ 
					"</div>"+
					
				"</div>"+    
		
				"</div>"
				
		);
	}
		$(".closeIcon").click(function(){
			nbrGestion = 0;
			$("#GestionEnseignant").empty();
		});
}


function ajouterEnseignant(){
	var matricule = $("#Matricule").val();
	var prenom = $("#Prenom").val();
	var nom=$("#Nom").val();
	var typeEmployer=$("#Emploi").val();
	var courriel=$("#Courriel").val();
	var telephone= $("#Telephone").val();
	var poste=$("#Poste").val();

	
}

function effacerInformationEnseignant(){
	$("#Matricule").val('');
	$("#Prenom").val('');
	$("#Nom").val('');
	$("#Emploi").val('');
	$("#Courriel").val('');
	$("#Telephone").val('');
	$("#Poste").val('');
}