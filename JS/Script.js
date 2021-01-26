function printCards(list) {
	console.log("downloading book review: success");
    for (var i = 0; i < list.length; i++) {
					$("#Teacher").append("<section class='wrapper'>"+
					"<div class='card' data-effect='zoom'>"+
					"<button class='card__save  js-save' type='button'>"+
					  "<i class='fa  fa-bookmark'></i>"+
					"</button>"+
                    "<figure class='card__image'>"+
					  "<img src='../RESSOURCES/PHOTO_ENSEIGNANT/background.png' alt='book cover'>"+
					"</figure>"+
					"<div class='card__header'>"+
					"<figure class='card__profile'>"+
						"<img src='../RESSOURCES/PHOTO_ENSEIGNANT/"+list[0][0]+".png' alt='author picture' width='25px' height='25px'>"+
					  "</figure>"+
					"</div>"+
					"<div class='card__body'>"+
					  "<h3 class='card__name'>"+list[0][1]+' '+list[0][2]+"</h3>"+
					  "<p class='card__job'>"+list[0][3]+"</p>"+
                      "<p class='card__bio'>"+list[0][5]+"</p>"+
                      "<p class='card__bio'>"+list[0][6]+" poste "+list[0][7]+"</p>"+
					"</div>"+
					"<div class='card__footer'>"+
					  //"<p class='card__date'>"+list[0][5]+"</p><br>"+
					  //"<p class='card__date'>"+list[0][6]+" poste "+list[0][7]+"</p>"+
					"</div>"+
				  "</div>"+
				"</section>"
	  			);
				
}
}