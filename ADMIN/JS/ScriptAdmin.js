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
		
				"<div class='col'>"+
					"<div class='row'>"+
						"<div class='col'>"+
						"<p style='font-size:50px;'>Modifier les informations d'un enseignant</p>"+
						"</div>"+ 
					"</div>"+ 
				"</div>"+ 	
				
					"<div class='col'>"+
					"<div class='row' style='display: flex;align-content: center;text-align: center;justify-content: center; margin-right:5%;'>"+
						"<div class='col' style='display: flex;align-content: center;text-align: center;justify-content: center; margin-right:5%;'>"+
							"<img  id='profilePicture' src='../../RESSOURCES/PHOTO_ENSEIGNANT/"+matricule+".png' style='max-width:300px;max-height: 300px;' alt='Image preview...'></img>"+
						"</div>"+
						"<div class='col' style='display: flex;align-content: center;text-align: center;justify-content: center;'>"+
							"<div class='row' style='display: flex;align-content: center;text-align: center;justify-content: center;'>"+
								"<form action='javascript:;' onsubmit='rien("+matricule+")' enctype='multipart/form-data' id='send' style='display: flex;justify-content: center;align-items: center;flex-direction: column;'>"+
									"<input type='file'  onchange='changePicture()' id='fileToUpload' name='fileToUpload'>"+
									"<input type='submit' name='submit' class='horizontal' style='font-size:10px' value='Sauvegarder '>"+
								"</form>"+
							"</div>"+
						"</div>"+
					"</div>"+
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
		
							
							"<div class='col'>"+
							"<div class='row justify-content-evenly'>"+
								"<p class='horizontal' style='max-width:300px;max-height:100px;' onclick='sauvegarderEnseignant("+matricule+")'><span class='text'>Sauvegarder</span></p>"+
								"<p class='horizontal' style='max-width:300px;max-height:100px;' onclick='supprimerEnseignant("+matricule+")'><span class='text'>Supprimer le profil</span></p>"+
								"</div>"+ 
							"</div>"+ 
					"</div>"+
					
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

function changePicture(){
	var preview = document.getElementById('profilePicture');
	var file    = document.querySelector('input[type=file]').files[0];
	var reader  = new FileReader();

	reader.onloadend = function () {
		preview.src = reader.result;
	}

	if (file) {
		reader.readAsDataURL(file);
	} else {
		preview.src = "";
	}
}

function rien(matricule){
	var formSend = new FormData(document.getElementById('send'));
	formSend.append("matricule",matricule);
	$.ajax({
				url:"../PHP/upload.php",
				type:"POST",
				dataType:"json",
				data: formSend,
				contentType: false,
				cache : false,
				processData: false,
				success: function(result){
					alert("La photo à bien été modifier!");
					location.reload();
				},
				error: function (message, er) {
					console.log("erreur lors de l'ajout du fichier:" + er);
					alert("Une erreur c'est produit durant le téléversement de la photo!")
				}
			});
   }

function sauvegarderEnseignant(matricule){
	var prenom = $("#Prenom").val();
	var nom=$("#Nom").val();
	var typeEmployer=$("#Emploi").val();
	var courriel=$("#Courriel").val();
	var telephone= $("#Telephone").val();
	var poste=$("#Poste").val();

	if(prenom=="" || prenom==null || !(/^[a-zA-Z]+$/.test(prenom))){
		alert("Le champs prénom est obligatoire, il doit être composé seulement de lettres");
	}
	else{
		if(nom=="" || nom==null || !(/^[a-zA-Z]+$/.test(nom))){
			alert("Le champs nom est obligatoire, il doit être composé seulement de lettres");
		}
		else{
			if(typeEmployer=="" || typeEmployer==null || !(/^[a-zA-Z]+$/.test(typeEmployer))){
				alert("Le champs type d'employé est obligatoire, il doit être composé seulement de lettres");
			}
			else{
				if(courriel=="" || courriel==null || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(courriel))){
					alert("Le champs courriel est obligatoire, vérifiez l'adresse entrée");
				}
				else{
					if(telephone=="" || telephone==null || !(/^[0-9]*$/.test(telephone)) || telephone.length>10 || telephone.length<10){
						alert("Le champs téléphone est obligatoire, vérifiez que le numéro entrée suit le forma suivant: 1111111111");
					}
					else{
						if(!(/^[0-9]*$/.test(poste))){
							alert("Le champs poste doit seulement contenir des chiffres");
						}
						else{
							if (confirm("Êtes-vous certain de vouloir mettre à jour les informations de l'enseignant: "+matricule)) {
								$.ajax({
									url: "../PHP/Gestion_Enseignant/updateTeacher.php",
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
					}
				}
			}
		}
	}
	
}

function supprimerEnseignant(matricule){
	if (confirm("Êtes-vous certain de vouloir supprimer l'enseignant: "+matricule)) {
		$.ajax({
			url: "../PHP/Gestion_Enseignant/deleteTeacher.php",
			type: "POST",
			data: {
				"matricule": matricule
			},
			dataType: "json",
			success: function(result){
				location.reload();
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
		
				"<div class='col'>"+
				"<div class='row' style='display: flex;align-content: center;text-align: center;justify-content: center; margin-right:5%;'>"+
					"<div class='col' style='display: flex;align-content: center;text-align: center;justify-content: center; margin-right:5%;'>"+
						"<img  id='profilePicture' src='../../RESSOURCES/PHOTO_ENSEIGNANT/Background.png' style='max-width:300px;max-height: 300px;' alt='Image preview...'></img>"+
					"</div>"+
					"<div class='col' style='display: flex;align-content: center;text-align: center;justify-content: center;'>"+
						"<div class='row' style='display: flex;align-content: center;text-align: center;justify-content: center;'>"+
							"<form action='javascript:;' onsubmit='rienAjouter()' enctype='multipart/form-data' id='send' style='display: flex;justify-content: center;align-items: center;flex-direction: column;'>"+
								"<input type='file'  onchange='changePicture()' id='fileToUpload' name='fileToUpload'>"+
								//"<input type='submit' name='submit' class='horizontal' style='font-size:10px' value='Sauvegarder '>"+
							"</form>"+
						"</div>"+
					"</div>"+
				"</div>"+
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
								"<p class='horizontal' style='max-width:300px;max-height:100px;' onclick='ajouterEnseignant()'><span class='text'>Sauvegarder</span></p>"+
								"<p class='horizontal' style='max-width:300px;max-height:100px;' onclick='effacerInformationEnseignant()'><span class='text'>Supprimer le profil</span></p>"+
							"</div>"+ 
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

	if(matricule=="" || matricule==null || !(/^[0-9]*$/.test(matricule)) || matricule.length>7 || matricule.length<7){
		alert("Le champs matricule est obligatoire, vérifiez que le matricule entré suit le format suivant: 1234567");
	}
	else{
		if(prenom=="" || prenom==null || !(/^[a-zA-Z]+$/.test(prenom))){
			alert("Le champs prénom est obligatoire, il doit être composé seulement de lettres");
		}
		else{
			if(nom=="" || nom==null || !(/^[a-zA-Z]+$/.test(nom))){
				alert("Le champs nom est obligatoire, il doit être composé seulement de lettres");
			}
			else{
				if(typeEmployer=="" || typeEmployer==null || !(/^[a-zA-Z]+$/.test(typeEmployer))){
					alert("Le champs type d'employé est obligatoire, il doit être composé seulement de lettres");
				}
				else{
					if(courriel=="" || courriel==null || !(/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(courriel))){
						alert("Le champs courriel est obligatoire, vérifiez l'adresse entrée");
					}
					else{
						if(telephone=="" || telephone==null || !(/^[0-9]*$/.test(telephone)) || telephone.length>10 || telephone.length<10){
							alert("Le champs téléphone est obligatoire, vérifiez que le numéro entrée suit le forma suivant: 1111111111");
						}
						else{
							if(!(/^[0-9]*$/.test(poste))){
								alert("Le champs poste doit seulement contenir des chiffres");
							}
							else{
								if (confirm("Êtes-vous certain de vouloir ajouter ce membre du personnel?"+matricule)) {
									$.ajax({
										url: "../PHP/Gestion_Enseignant/addTeacher.php",
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
											rienAjouter();
											location.reload();
										},
										error: function (message, er) {
											console.log("error: " + er);
										}
									});
								}
							}
						}
					}
				}
			}
		}
	}
	


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


function rienAjouter(){
	var matricule = $("#Matricule").val();
	if (matricule==null){

	}
	else{
		var formSend = new FormData(document.getElementById('send'));
		formSend.append("matricule",matricule);
	
		$.ajax({
					url:"../PHP/upload.php",
					type:"POST",
					dataType:"json",
					data: formSend,
					contentType: false,
					cache : false,
					processData: false,
					success: function(result){
						//alert("La photo à bien été ajouté!");
						location.reload();
					},
					error: function (message, er) {
						console.log("erreur lors de l'ajout du fichier:" + er);
						//alert("Un erreure c'est produit durant le téléversement de la photo!")
					}
				});
	}
	
   }