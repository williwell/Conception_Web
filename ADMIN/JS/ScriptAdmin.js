function printCardsAdmin(list) {
	console.log("téléchargement de la card des enseignant: success");
	
    for (var i = 0; i < list.length; i++) {
					$("#Teacher").append("<div id='"+list[i][0]+"' class='col-xl justify-content-center align-items-center' style='display:flex;'  onclick='modifyTeacher("+list+","+i+")'>"+
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
    }
    var id="#"+list[i][0];
    $(id).click(function() {
        location.replace("Menu.html");
    });

}

function modifyTeacher(list,i){
alert("bruh");
}