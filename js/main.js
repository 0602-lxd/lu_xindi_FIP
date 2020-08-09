


let adBtns=document.querySelectorAll(".adPic1 button");
let adSection=document.querySelector("#lightbox");
let adGround=document.querySelector(".adPic1 img");
let adPic=adSection.querySelector("img");
let adTitle=adSection.querySelector("h2");
let adDesc=adSection.querySelector("p");

const adInfo = [
        ["img/pro2.jpg","Promotion 1", `Buying two cases of TILEX beer will reduce 10% off.
        `],
        ["img/pro3.jpg","Promotion 2", `Choose any beer of four different degrees, as long as you buy enough four bottles, you can participate in the lottery with the purchase certificate.
        `],
        ["img/pro4.jpg","Promotion 3", `Customers who purchase beer on the website for more than 200$ have the opportunity to obtain related peripheral products, or purchase peripheral products for 200$ can get beer or exquisite gifts. 
        `]
        ];

var profuctTargetList=document.querySelectorAll(".list img");
var showAlbum=document.querySelector("#showAlbum");

function choosePDT(e){
	showAlbum.src=e.target.src;
}
profuctTargetList.forEach(product => {
	product.addEventListener("click",choosePDT);
	product.addEventListener("mouseover",choosePDT)
});
//profuctTargetList.forEach(product => product.addEventListener("mouseover",choosePDT));


function showAD(){
		adGround.src=adInfo[this.dataset.offset][0];
		adPic.src=adInfo[this.dataset.offset][0];
		adTitle.innerHTML=adInfo[this.dataset.offset][1];
		adDesc.innerHTML=adInfo[this.dataset.offset][2];
		adSection.classList.add("show-lightbox");
}


adBtns.forEach(btn=>{
	btn.addEventListener("click",showAD);
});

document.querySelector(".close-lb").addEventListener("click",function(){
		adSection.classList.remove("show-lightbox");
});


