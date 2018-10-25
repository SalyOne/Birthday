let tl= new TimelineMax();
let cont=document.querySelector(".container");

tl.to('.atom-elipse1', 2, {rotation:180, repeat:-1, },1)
tl.play();
cont.onmouseenter=function(){
	tl.play();
}
cont.onmouseleave=function(){
	// tl.reverse();
}