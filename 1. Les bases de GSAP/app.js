// const img1 = document.querySelector(".container-images img:nth-child(1)");
// const btnCat = document.querySelector(".cat-fade");

// gsap.to(img1, { x: 100, duration: 2 });
// gsap.to("h1", { color: "red" });
// gsap.fromTo(img1, { opacity: 0 }, { opacity: 1 });
// gsap.to(img1, { x: 100, duration: 2, scale: 2, delay: 0.2 });

// gsap.to(".container-images img", {
//   y: 300,
//   duration: 1,
//   scale: 1.2,
//   ease: "power2",
//   stagger: function (index) {
//     console.log(index);
//     return index * 0.5;
//   },
// });

// btnCat.addEventListener("click", () => {});

// gsap.from(".btn", { duration: 0.2, x: -50, stagger: 0.2 });

// gsap.to(".btn", { duration: 0.2, x: "random(-100, 100)", stagger: 0.2 });

// const complete = () => {
//     console.log("terminée");
//   };

// gsap.to(".container-images img:nth-child(2)", {
//   y: 100,
//   repeat: 1,
//   onComplete: complete,
//     onStart: () => console.log("demarrage"),
//     onUpdate: () => console.log("Anim en cours"),
//     onRepeat: () => console.log("repetition"),
// });

// gsap.registerEffect({
//   name: "imgCrazy",
//   effect: (targets, config) => {
//     return gsap.to(targets, {
//       duration: config.duration,
//       y: 200,
//       scale: 1.4,
//       rotation: 360,
//     });
//   },
//   defaults: { duration: 2 },
// });

// gsap.effects.imgCrazy(img1, { duration: 3 });

// gsap.set(img1, { opacity: 0 });

// TWEEN

// const anim = gsap.to(img1, {
//   y: 250,
//   yoyo: true,
//   repeat: 1,
// });

// anim.duration(5);
// anim.pause();
// anim.resume();

//

// TIMELINE TUTO

const img1 = document.querySelector(".container-images img:nth-child(1)");
const img2 = document.querySelector(".container-images img:nth-child(2)");
const img3 = document.querySelector(".container-images img:nth-child(3)");
const title = document.querySelector(".title");
const txt = document.querySelector(".txt");

const TL = gsap.timeline({
  defaults: {
    duration: 1,
    ease: "power2",
  },
  //   repeat: -1,
  //   repeatDelay: 0.5,
  //   yoyo: true,
  //   onComplete: () => console.log("complete"),
  //   pause: true,
});

// Avec position relatif aka 0.25s après le début de la précédente
TL.to(img1, { y: 0, autoAlpha: 1 });
TL.to(img2, { y: 0, autoAlpha: 1 }, "-=0.75");
TL.to(img3, { y: 0, autoAlpha: 1 }, "-=0.75");
TL.to(title, { y: 0, autoAlpha: 1 }, "-=0.75");
TL.add(() => console.log("timeline terminado"));
TL.to(txt, { y: 0, autoAlpha: 1 }, "-=0.75");

//  < signifie "au début du tween précedent" et superieur "a la fin du tween precedent"
//  on peut utiliser "<0.5"  qui signifie "0.5s après la fin du tween précedent"

setTimeout(() => {
  //   TL.play("endAnim");
}, 1000);
