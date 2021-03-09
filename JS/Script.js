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
	console.log("downloading event: success");
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

function putEventDetailDate(list,date){
	$('#Event').empty();
	console.log("downloading event detail");
	var jour;
	var mois;
	if(date.getMonth()<10){mois="0"+(date.getMonth()+1)}else{mois=date.getMonth();}
	if(date.getDate()<10){jour="0"+date.getDate()}else{jour=date.getDate();}
	for(var i=0; i < list.length; i++) {
		if(list[i][2].substr(8,2)==jour){
			if(list[i][2].substr(5,2)==mois){
				if(list[i][2].substr(0,4)==date.getFullYear()){
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
		}
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
							case(0):{document.getElementById('dim1').style="border:1px solid #5296FF";document.getElementById('dim1').onclick=function(){var i=x;i.setDate(x.getDate()-(x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(1):{document.getElementById('lun1').style="border:1px solid #5296FF";document.getElementById('lun1').onclick=function(){var i=x;i.setDate(x.getDate()+(1-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(2):{document.getElementById('mar1').style="border:1px solid #5296FF";document.getElementById('mar1').onclick=function(){var i=x;i.setDate(x.getDate()+(2-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(3):{document.getElementById('mer1').style="border:1px solid #5296FF";document.getElementById('mer1').onclick=function(){var i=x;i.setDate(x.getDate()+(3-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(4):{document.getElementById('jeu1').style="border:1px solid #5296FF";document.getElementById('jeu1').onclick=function(){var i=x;i.setDate(x.getDate()+(4-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(5):{document.getElementById('ven1').style="border:1px solid #5296FF";document.getElementById('ven1').onclick=function(){var i=x;i.setDate(x.getDate()+(5-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(6):{document.getElementById('sam1').style="border:1px solid #5296FF";document.getElementById('sam1').onclick=function(){var i=x;i.setDate(x.getDate()+(6-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
						}
						break;
					}
					case (+j+y)/7<=2:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim2').style="border:1px solid #5296FF";document.getElementById('dim2').onclick=function(){var i=x;i.setDate(x.getDate()+(7-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(1):{document.getElementById('lun2').style="border:1px solid #5296FF";document.getElementById('lun2').onclick=function(){var i=x;i.setDate(x.getDate()+(8-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(2):{document.getElementById('mar2').style="border:1px solid #5296FF";document.getElementById('mar2').onclick=function(){var i=x;i.setDate(x.getDate()+(9-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(3):{document.getElementById('mer2').style="border:1px solid #5296FF";document.getElementById('mer2').onclick=function(){var i=x;i.setDate(x.getDate()+(10-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(4):{document.getElementById('jeu2').style="border:1px solid #5296FF";document.getElementById('jeu2').onclick=function(){var i=x;i.setDate(x.getDate()+(11-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(5):{document.getElementById('ven2').style="border:1px solid #5296FF";document.getElementById('ven2').onclick=function(){var i=x;i.setDate(x.getDate()+(12-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(6):{document.getElementById('sam2').style="border:1px solid #5296FF";document.getElementById('sam2').onclick=function(){var i=x;i.setDate(x.getDate()+(13-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
					}
					break;}
					case (+j+y)/7<=3:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim3').style="border:1px solid #5296FF";document.getElementById('dim3').onclick=function(){var i=x;i.setDate(x.getDate()+(14-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(1):{document.getElementById('lun3').style="border:1px solid #5296FF";document.getElementById('lun3').onclick=function(){var i=x;i.setDate(x.getDate()+(15-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(2):{document.getElementById('mar3').style="border:1px solid #5296FF";document.getElementById('mar3').onclick=function(){var i=x;i.setDate(x.getDate()+(16-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(3):{document.getElementById('mer3').style="border:1px solid #5296FF";document.getElementById('mer3').onclick=function(){var i=x;i.setDate(x.getDate()+(17-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(4):{document.getElementById('jeu3').style="border:1px solid #5296FF";document.getElementById('jeu3').onclick=function(){var i=x;i.setDate(x.getDate()+(18-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(5):{document.getElementById('ven3').style="border:1px solid #5296FF";document.getElementById('ven3').onclick=function(){var i=x;i.setDate(x.getDate()+(19-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(6):{document.getElementById('sam3').style="border:1px solid #5296FF";document.getElementById('sam3').onclick=function(){var i=x;i.setDate(x.getDate()+(20-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
					}
					break;}
					case (+j+y)/7<=4:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim4').style="border:1px solid #5296FF";document.getElementById('dim4').onclick=function(){var i=x;i.setDate(x.getDate()+(21-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(1):{document.getElementById('lun4').style="border:1px solid #5296FF";document.getElementById('lun4').onclick=function(){var i=x;i.setDate(x.getDate()+(22-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(2):{document.getElementById('mar4').style="border:1px solid #5296FF";document.getElementById('mar4').onclick=function(){var i=x;i.setDate(x.getDate()+(23-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(3):{document.getElementById('mer4').style="border:1px solid #5296FF";document.getElementById('mer4').onclick=function(){var i=x;i.setDate(x.getDate()+(24-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(4):{document.getElementById('jeu4').style="border:1px solid #5296FF";document.getElementById('jeu4').onclick=function(){var i=x;i.setDate(x.getDate()+(25-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(5):{document.getElementById('ven4').style="border:1px solid #5296FF";document.getElementById('ven4').onclick=function(){var i=x;i.setDate(x.getDate()+(26-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(6):{document.getElementById('sam4').style="border:1px solid #5296FF";document.getElementById('sam4').onclick=function(){var i=x;i.setDate(x.getDate()+(27-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
					}
					break;}
					case (+j+y)/7<=5:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim5').style="border:1px solid #5296FF";document.getElementById('dim5').onclick=function(){var i=x;i.setDate(x.getDate()+(28-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(1):{document.getElementById('lun5').style="border:1px solid #5296FF";document.getElementById('lun5').onclick=function(){var i=x;i.setDate(x.getDate()+(29-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(2):{document.getElementById('mar5').style="border:1px solid #5296FF";document.getElementById('mar5').onclick=function(){var i=x;i.setDate(x.getDate()+(30-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(3):{document.getElementById('mer5').style="border:1px solid #5296FF";document.getElementById('mer5').onclick=function(){var i=x;i.setDate(x.getDate()+(31-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(4):{document.getElementById('jeu5').style="border:1px solid #5296FF";document.getElementById('jeu5').onclick=function(){var i=x;i.setDate(x.getDate()+(32-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(5):{document.getElementById('ven5').style="border:1px solid #5296FF";document.getElementById('ven5').onclick=function(){var i=x;i.setDate(x.getDate()+(33-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(6):{document.getElementById('sam5').style="border:1px solid #5296FF";document.getElementById('sam5').onclick=function(){var i=x;i.setDate(x.getDate()+(34-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
						}
						break;
					}
					case (+j+y)/7<=6:{
						switch(d.getDay()){
							case(0):{document.getElementById('dim6').style="border:1px solid #5296FF";document.getElementById('dim6').onclick=function(){var i=x;i.setDate(x.getDate()+(35-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(1):{document.getElementById('lun6').style="border:1px solid #5296FF";document.getElementById('lun6').onclick=function(){var i=x;i.setDate(x.getDate()+(36-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(2):{document.getElementById('mar6').style="border:1px solid #5296FF";document.getElementById('mar6').onclick=function(){var i=x;i.setDate(x.getDate()+(37-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(3):{document.getElementById('mer6').style="border:1px solid #5296FF";document.getElementById('mer6').onclick=function(){var i=x;i.setDate(x.getDate()+(38-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(4):{document.getElementById('jeu6').style="border:1px solid #5296FF";document.getElementById('jeu6').onclick=function(){var i=x;i.setDate(x.getDate()+(39-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(5):{document.getElementById('ven6').style="border:1px solid #5296FF";document.getElementById('ven6').onclick=function(){var i=x;i.setDate(x.getDate()+(40-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
							case(6):{document.getElementById('sam6').style="border:1px solid #5296FF";document.getElementById('sam6').onclick=function(){var i=x;i.setDate(x.getDate()+(41-x.getDay()));putEventDetailDate(list,i);x.setDate(1);};break;}
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
	console.log("downloading book review: success");
	for(var i=0; i < list.length; i++) {
		$('#Actu').append(
			"<div onclick='clickActu(this.id)' class='col-md-4' style='cursor: pointer;' id='"+list[i][1]+"'>"+
				"<img src='../RESSOURCES/Photo_Actu/"+list[i][3]+"' style='width: 100%; height: 250px; border: solid black; border-width: thin;'>"+
        		"<h5 id='actu'>"+list[i][1]+"</h5>"+
			"</div>");
	}
}

function putActualiteDetail(list) {
	console.log("downloading news detail");
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
 