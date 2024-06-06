window.addEventListener("DOMContentLoaded", function () {
  gsap.set("nav", { y: -100 });
  gsap.set(".letter-wrapper", { y: 400 });
  gsap.set(".item-copy-wrapper p", { y: 50 });

  gsap.defaults({ duration: 1, ease: "power3.out" });
  const tl = gsap.timeline({ paused: true, delay: 0.5 });

  tl.to(".letter-wrapper", {
    y: 0,
    stagger: 0.1,
  })
    .to(".header-item-1", {
      left: "0",
      color:"white",
    })
    .to(
      ".header-item-2",
      {
        right: "0",
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
    })
    .to(
      ".header-item-2",
      {
        right: 0,
        scale: 1,
      },
      "<"
    )
    .to(
      ".item-main .item-img img",
      {
        scale: 1,
      },
      "<"
    )
    .to(
      ".item-side .item-img",
      {
        clipPath: "polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)",
        stagger: 0.1,
      },
      "<"
    )
    .to(
      ".header",
      {
        y: 120,
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
      ".item-main .item-img img",
      {
        width: "100vw", // Ajuste o tamanho da largura para cobrir a tela inteira
        height: "100vh", // Ajuste o tamanho da altura para cobrir a tela inteira
        zIndex: 1, // Coloque a imagem atrás de outros elementos
        ease: "power3.inOut",
      }
    );

  tl.play();
});