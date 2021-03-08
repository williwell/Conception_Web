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
		$("#Event").append(
			"<div onclick='EventClick(this.id)' id='"+list[i][1]+"' class='col-md-3'>"+
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

function putEventCal(list){
	console.log("downloading event for calendar");
	for(var i=0; i < list.length; i++) {
		var a=list[i][2].substr(0,4);
		var m=list[i][2].substr(5,2);
		var j=list[i][2].substr(8);
		
		if(a-2011==$('#select-year').val()){
			if(m-1==$('#select-mois').val()){
				x=new Date(+a,m-1,1);
				d=new Date(+a,m-1,+j);
				y=x.getDay();
				//alert((+j+y)/7);
				switch(true){
					case (+j+y)/7<=1:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim1').style.color="red";break;}
							case(1):{document.getElementById('lun1').style.color="red";break;}
							case(2):{document.getElementById('mar1').style.color="red";break;}
							case(3):{document.getElementById('mer1').style.color="red";break;}
							case(4):{document.getElementById('jeu1').style.color="red";break;}
							case(5):{document.getElementById('ven1').style.color="red";break;}
							case(6):{document.getElementById('sam1').style.color="red";break;}
						}
						break;
					}
					case (+j+y)/7<=2:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim2').style.color="red";break;}
							case(1):{document.getElementById('lun2').style.color="red";break;}
							case(2):{document.getElementById('mar2').style.color="red";break;}
							case(3):{document.getElementById('mer2').style.color="red";break;}
							case(4):{document.getElementById('jeu2').style.color="red";break;}
							case(5):{document.getElementById('ven2').style.color="red";break;}
							case(6):{document.getElementById('sam2').style.color="red";break;}
					}
					break;}
					case (+j+y)/7<=3:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim3').style.color="red";break;}
							case(1):{document.getElementById('lun3').style.color="red";break;}
							case(2):{document.getElementById('mar3').style.color="red";break;}
							case(3):{document.getElementById('mer3').style.color="red";break;}
							case(4):{document.getElementById('jeu3').style.color="red";break;}
							case(5):{document.getElementById('ven3').style.color="red";break;}
							case(6):{document.getElementById('sam3').style.color="red";break;}
					}
					break;}
					case (+j+y)/7<=4:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim4').style.color="red";break;}
							case(1):{document.getElementById('lun4').style.color="red";break;}
							case(2):{document.getElementById('mar4').style.color="red";break;}
							case(3):{document.getElementById('mer4').style.color="red";break;}
							case(4):{document.getElementById('jeu4').style.color="red";break;}
							case(5):{document.getElementById('ven4').style.color="red";break;}
							case(6):{document.getElementById('sam4').style.color="red";break;}
					}
					break;}
					case (+j+y)/7<=5:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim5').style.color="red";break;}
							case(1):{document.getElementById('lun5').style.color="red";break;}
							case(2):{document.getElementById('mar5').style.color="red";break;}
							case(3):{document.getElementById('mer5').style.color="red";break;}
							case(4):{document.getElementById('jeu5').style.color="red";break;}
							case(5):{document.getElementById('ven5').style.color="red";break;}
							case(6):{document.getElementById('sam5').style.color="red";break;}
						}
						break;
					}
					case (+j+y)/7<=6:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim6').style.color="red";break;}
							case(1):{document.getElementById('lun6').style.color="red";break;}
							case(2):{document.getElementById('mar6').style.color="red";break;}
							case(3):{document.getElementById('mer6').style.color="red";break;}
							case(4):{document.getElementById('jeu6').style.color="red";break;}
							case(5):{document.getElementById('ven6').style.color="red";break;}
							case(6):{document.getElementById('sam6').style.color="red";break;}
					}
					break;}
				}
				//Pour la prochaine fois, trouver le jour de la semaine à partir de la date et faire une division par 7 pour trouver quelle semaine on est
				//exemple: mardi 23: 23/7=3, semaine 0,1,2,3 donc la case à changer sera mar4
			}
		}
	}
}


function putActualite(list) {
	console.log("téléchargement des actualités: success");
	for(var i=0; i < list.length; i++) {
		$('#Actu').append(
			"<div onclick='clickActu(this.id)' class='col-md-4' style='cursor: pointer;' id='"+list[i][1]+"'>"+
				"<img src='../RESSOURCES/Photo_Actu/"+list[i][3]+"' style='width: 100%; height: 250px; border: solid black; border-width: thin;'>"+
        		"<h5 id='actu'>"+list[i][1]+"</h5>"+
			"</div>");
	}
}

function putActualiteDetail(list) {
	console.log("téléchargement des infos actualités: success");
	for(var i=0; i < list.length; i++) {
		$('#Actualite').append(
			"<div class='row' style='margin-bottom: 5%; border: solid black; border-width: thin;' id='"+list[i][1]+"'>"+
				"<div class='col-md-4'>"+
					"<img src='../RESSOURCES/Photo_Actu/"+list[i][3]+"'style='width: 100%; height: 250px;'>"+
				"</div>"+
				"<div class='col-md-8'>"+
					"<h3>"+list[i][1]+"</h3>"+
					"<p>"+list[i][2]+"</p>"+
				"</div>"+
			"</div>"
		);
	}
}

function scrollActu(){
	if(localStorage.getItem("moveActu") == "true")
    {
		try
		{
			document.getElementById(localStorage.getItem("actu")).scrollIntoView();
			localStorage.setItem("moveActu","false");
			clearInterval(myVar);
		}
        catch(err)
		{}
    }
	else{
		clearInterval(myVar)
	}
}
 