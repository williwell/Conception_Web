function printCards(list) {
	console.log("téléchargement de la card des enseignant: success");
	
    for (var i = 0; i < list.length; i++) {
					$("#Teacher").append("<div class='col-xl justify-content-center align-items-center' style='display:flex;'>"+
					"<div class='card' data-effect='zoom'>"+
					"<button class='card__save  js-save' type='button'>"+
					  "<i class='fa  fa-bookmark'></i>"+
					"</button>"+
                    "<figure class='card__image'>"+
					  "<img src='../RESSOURCES/PHOTO_ENSEIGNANT/background.png' alt='book cover'>"+
					"</figure>"+
					"<div class='card__header'>"+
					"<figure class='card__profile'>"+
						"<img src='../RESSOURCES/PHOTO_ENSEIGNANT/"+list[i][0]+".png' alt='author picture' width='25px' height='25px'>"+
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
				
	}
}

function printProg(list){
	console.log("téléchargement du lien: success");
	
    for (var i = 0; i < list.length; i++) {
		if(list[i][1]=="Prog"){
					$("#Link").append(
					"<div class='col-md-2'></div>"+
					"<a class='col-md-7' style='text-decoration: none;color: black;display: flex;flex-direction: row;'href='"+list[i][3]+"'>"
					+"<div style='width:60%;border:1px solid black;display:flex;flex-direction: row;justify-content: center;' id='Description'><p>"+list[i][2]+"</p></div>"
					+"<div style='width:30%;border:1px solid black;display:flex;flex-direction: row;justify-content: center;' id='nom'><p>"+list[i][4]+"</p></div></a>"
					+"<div class='col-md-3'></div>"
				  );
			}	
	}
}

function printInfo(list){
	console.log("téléchargement du lien: success");
	
    for (var i = 0; i < list.length; i++) {
		if(list[i][1]=="Info"){
					$("#Link").append(
					"<div class='col-md-2'></div>"+
					"<a class='col-md-7' style='text-decoration: none;color: black;display: flex;flex-direction: row;'href='"+list[i][3]+"'><div style='width:60%;border:1px solid black;display:flex;flex-direction: row;justify-content: center;' id='Description'><p>"+list[i][2]+"</p></div>"
					+"<div style='width:30%;border:1px solid black;display:flex;flex-direction: row;justify-content: center;' id='nom'><p>"+list[i][4]+"</p></div></a>"
					+"<div class='col-md-3'></div>"
				  );
			}	
	}
}

function printAnnonces(list){
	console.log("téléchargement du lien: success");
	
    for (var i = 0; i < list.length; i++) {
		if(list[i][1]=="Annonces"){
					$("#Link").append(
					"<div class='col-md-2'></div>"+
					"<a class='col-md-7' style='text-decoration: none;color: black;display: flex;flex-direction: row;'href='"+list[i][3]+"'><div style='width:60%;border:1px solid black;display:flex;flex-direction: row;justify-content: center;' id='Description'><p>"+list[i][2]+"</p></div>"
					+"<div style='width:30%;border:1px solid black;display:flex;flex-direction: row;justify-content: center;' id='nom'><p>"+list[i][4]+"</p></div></a>"
					+"<div class='col-md-3'></div>"
				  );
			}	
	}
}

function putEvent(list) {
	console.log("téléchargement des événements: success");
    for (var i = 0; i < list.length; i++) {
					$("#Event").append("<div id='EventClick' class='col-md-3'>"+
					"<h5 style='cursor: pointer;'>"+list[i][1]+"</h5>"+
					"<h5 style='cursor: pointer;'>"+list[i][2]+"</h5>"+
				  "</div>"
	  			);
				
	}
}

function putEventDetail(list) {
	console.log("downloading event detail");
	for(var i=0; i < list.length; i++) {
		$('#Event').append(
			"<a href='"+list[i][3]+"'>"+
			"<div class='row' style='margin-bottom: 5%; border: solid black; border-width: thin;'>"+
				"<div class='col-md-4'>"+
					//"<img src='"+list[i][3]+"'style='width: 100%; height: 250px;'>"+
				"</div>"+
				"<div class='col-md-8'>"+
					"<h3>"+list[i][1]+"</h3>"+
					"<p>"+list[i][2]+"</p>"+
				"</div>"+
			"</div>"+
			"</a>"
		);
	}
}


function putActualite(list) {
	console.log("téléchargement des actualités: success");
	for(var i=0; i < list.length; i++) {
		$('#Actu').append("<div class='col-md-4'>"+
		"<img src='"+list[i][3]+
		"' style='width: 100%; height: 250px; border: solid black; border-width: thin;'>"+
        "<h5>"+list[i][1]+"</h5>"+
		"</div>");
	}
}

function putActualiteDetail(list) {
	console.log("téléchargement des infos actualités: success");
	for(var i=0; i < list.length; i++) {
		$('#Actualite').append(
			"<div class='row' style='margin-bottom: 5%; border: solid black; border-width: thin;'>"+
				"<div class='col-md-4'>"+
					"<img src='"+list[i][3]+"'style='width: 100%; height: 250px;'>"+
				"</div>"+
				"<div class='col-md-8'>"+
					"<h3>"+list[i][1]+"</h3>"+
					"<p>"+list[i][2]+"</p>"+
				"</div>"+
			"</div>"
		);
	}
}

