window.addEventListener("DOMContentLoaded", function () {
 
  console.log("DOMContentLoaded");
  updateAnimations();
  window.addEventListener("resize", updateAnimations);
  
});

function updateAnimations() {
  gsap.set("nav", { y: -100 });
  gsap.set(".letter-wrapper", { y: 400 });
  gsap.defaults({ duration: 1, ease: "power3.out" });
  const tl = gsap.timeline({ paused: true, delay: 0.5 });
  const isMobile = window.innerWidth <= 900;
  tl.to(".letter-wrapper", {
    y: 0,
    stagger: 0.2,
  })
    .to(".header-item-1", {
      left: isMobile ?  "1vw" : "10.5vw",
     
    })
    .to(
      ".header-item-2",
      {
        right:isMobile ? "10vw" : "15vw",
      },
      "<"
    )
    .to(
      ".item-main .item-img img",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",

      },
      "<"
    ) 
    .to(".header-item-1", {
      left: 0,
      scale: 1,
      stagger: 0,   
    })
    .to(
      ".header-item-2",
      {
        right: 0,
        scale: 1,
        stagger:0,   

      },
      "<"
    )
    .to(
      ".item-main .item-img img",
      {
        width: "100vw", 
        height: "100vh", 
        zIndex: 1, 
        ease: "power3.inOut",
        scale: 1,
        stagger: 10,

      },
      "<"
    )
    
    .to(
      ".header",
      {
        bottom: "0",
      },
      "<"
    )
  tl.play();
  animateNav();

  }

  function animateNav() {
    gsap.to("nav", {
      y: 0,
      duration: 1,
      ease: "power3.out",
    });
  }

function pageTransition() {
  var tl = gsap.timeline();

  tl.to(".transition", {
    duration: 1,
    scaleY: 1,
    transformOrigin: "bottom",
    ease: "power4.inOut",
  });

  tl.to(".transition", {
    duration: 1,
    scaleY: 0,
    transformOrigin: "top",
    ease: "power4.inOut",
    delay: 0.2,
  });
}





