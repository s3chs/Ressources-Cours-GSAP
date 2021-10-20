gsap.to(".b2 h2", {
  duration: 1,
  y: 0,
  scale: 2,
  autoAlpha: 1,
  scrollTrigger: {
    trigger: ".b2 h2",
    markers: true,
    //   Trigger Scroller
    start: "top 20%",
    end: "bottom 10%",
    // onEnter onLeave onEnterBack onLeaveBack
    toggleActions: "play pause reverse reset",
    // toutes les actions: play pause resume reset restart complete reverse none
    onEnter: () => console.log("ENTER"),
    onLeave: () => console.log("LEAVE"),
    onEnterBack: () => console.log("ENTER BACK"),
    onLeaveBack: () => console.log("LEAVE BACK"),
    // le mettre à true si on veut que l'anim soit automatiquement dynamique. Autrement => on met une valeur pour que ça continue même à l'arret, une sorte de ease/delay.
    scrub: 1,
  },
});

// gsap.to(".b2", {
//   scrollTrigger: {
//     trigger: ".b2",
//     pin: true,
//     markers: true,
//     // Prendre en compte le pin spacing qui rajoute la taille l'élement en question en dessous.

//   },
// });

// Créer une instance direct parce qu'ici on a pas besoin du to
ScrollTrigger.create({
  trigger: ".b2",
  pin: true,
//   markers: true,
  //   ici on place un end pour que l'élement additionnel soit de moitié. En gros on réduit le pin spacing de 50%
  end: "bottom 50%",
});
