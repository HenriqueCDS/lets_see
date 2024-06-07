window.addEventListener("DOMContentLoaded", function () {
  gsap.set("nav", { y: -100 });
  gsap.set(".letter-wrapper", { y: 400 });

  gsap.defaults({ duration: 1, ease: "power3.out" });
  const tl = gsap.timeline({ paused: true, delay: 0.5 });

function updateAnimations() {

  const isMobile = window.innerWidth <= 900;

  tl.to(".letter-wrapper", {
    y: 0,
    stagger: 0.2,
  })
    .to(".header-item-1", {
      left: isMobile ?  "1vw" : "14vw",
     
    })
    .to(
      ".header-item-2",
      {
        right:isMobile ? "1vw" : "16vw",
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
      stagger:0.1,   
    })
    
    .to(
      ".header-item-2",
      {
        right: 0,
        scale: 1,
        stagger:0.1,   

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
          

      },
      "<"
      

    )
   
   
  
    
    .to(
      "nav",
      {
        y: 0,
      },
      "<"
    )
    // Adicionar animação para mudar a imagem para background
    
    .to(
      ".header",
      {
        bottom: "0",
      },
      "<"
    )
  tl.play();
  
  }

  updateAnimations();

  // Update animations on window resize
  window.addEventListener("resize", updateAnimations);

});