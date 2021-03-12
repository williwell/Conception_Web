function scrollActu(){
	alert(document.getElementById(localStorage.getItem("actu")));
    if(localStorage.getItem("moveActu") == "true")
    {
		alert(document.getElementById(localStorage.getItem("actu")));
        document.getElementById(localStorage.getItem("actu")).scrollIntoView();
        localStorage.setItem("moveActu","false");
		alert(localStorage.getItem("moveActu"));
    }
}