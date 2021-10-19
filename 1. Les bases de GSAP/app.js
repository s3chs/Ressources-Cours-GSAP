const img1 = document.querySelector(".container-images img:nth-child(1)");
const btnCat = document.querySelector(".cat-fade");

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

const anim = gsap.to(img1, {
  y: 250,
  yoyo: true,
  repeat: 1,
});

anim.duration(5);
anim.pause();
anim.resume( );
