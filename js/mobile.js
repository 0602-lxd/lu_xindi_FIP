var menuContent=document.querySelector(".header .content");

function switchMenu(){
	if(menuContent.classList.contains("showMoblieMenu")){
		menuContent.classList.remove("showMoblieMenu");
	}else{
		menuContent.classList.add("showMoblieMenu");
	}
}


document.querySelector("#menuButton").addEventListener("click",switchMenu);


