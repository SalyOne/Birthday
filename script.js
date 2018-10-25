let tl= new TimelineMax();
let cont=document.querySelector(".container");

tl.from('.box-bottom', 2,{ scale:0.5 ,transformOrigin:"50% 50%",ease: Bounce.easeOut})
.to('.box-hat', 2,{ scale:0.9,rotation:35, y:-50,transformOrigin:"50% 50%",ease: Bounce.easeOut})
.to('.small', 2,{ scale:0.9,rotation:35, y:-50,transformOrigin:"50% 50%",ease: Bounce.easeOut})

