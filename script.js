let tl= new TimelineMax();
let cont=document.querySelector(".container");


tl.from('.box-bottom , .box-hat', 2,{ scale:0.5 ,transformOrigin:"50% 50%",ease: Bounce.easeOut})
.to('.box-hat', 2,{ scale:0.9,rotation:35, y:-50,transformOrigin:"50% 50%",ease: Bounce.easeOut})
.staggerFromTo('.text', 2,{ scale:0.5,y:0,transformOrigin:"50% 50%",ease: Bounce.easeOut},
					{ scale:1.5,y:-30,transformOrigin:"50% 50%",ease: Bounce.easeOut})

