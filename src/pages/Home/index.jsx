import NavBar from "../../componentes/NavBar";
import "./home.css";
import React, { useEffect, useCallback } from 'react';
import gsap from 'gsap';

import imgBackground from "../../assets/img/image.png";
export default function Home() {



  const updateAnimations = useCallback(() => {
    gsap.set('nav', { y: -100 });
    gsap.set('.letter-wrapper', { y: 400 });
    gsap.defaults({ duration: 1, ease: 'power3.out' });
    const tl = gsap.timeline({ paused: true, delay: 0.5 });
    const isMobile = window.innerWidth <= 900;

    tl.to('.letter-wrapper', {
      y: 0,
      stagger: 0.2,
    })
      .to('.header-item-1', {
        left: isMobile ? '1vw' : '10.5vw',
      })
      .to(
        '.header-item-2',
        {
          right: isMobile ? '10vw' : '15vw',
        },
        '<'
      )
      .to(
        '.item-main .item-img img',
        {
          clipPath: 'polygon(0% 100%, 100% 100%, 100% 0%, 0% 0%)',
        },
        '<'
      )
      .to('.header-item-1', {
        left: 0,
        scale: 1,
        stagger: 0,
      })
      .to(
        '.header-item-2',
        {
          right: 0,
          scale: 1,
          stagger: 0,
        },
        '<'
      )
      .to(
        '.item-main .item-img img',
        {
          width:'100vw',
          height: '101vh',
          zIndex: 1,
          ease: 'power3.inOut',
          scale: 1,
          stagger: 10,
        },
        '<'
      )
      .to(
        '.header',
        {
          bottom: '0',
        },
        '<'
      );
    tl.play();
    animateNav();
  }, []);

  const animateNav = useCallback(() => {
    gsap.to('nav', {
      y: 0,
      duration: 1,
      ease: 'power3.out',
    });
  }, []);

  const pageTransition = useCallback(() => {
    var tl = gsap.timeline();

    tl.to('.transition', {
      duration: 1,
      scaleY: 1,
      transformOrigin: 'bottom',
      ease: 'power4.inOut',
    });
    
    tl.to('.transition', {
      duration: 1,
      scaleY: 0,
      transformOrigin: 'top',
      ease: 'power4.inOut',
      delay: 0.2,
    });
  }, []);

  useEffect(() => {
    updateAnimations();
    window.addEventListener('resize', updateAnimations);
    return () => {
      window.removeEventListener('resize', updateAnimations);
    };
  }, [updateAnimations]);

    return (
      <section>
        <NavBar/>
            <div className="container" >
            <div className="content">
                <div className="items">
                    <div className="item-main">
                        <div className="item-img">
                            <img src={imgBackground} alt="lets see" />
                        </div>
                    </div>
                </div>

                <div className="header">
                    <div className="header-item header-item-1">
                        <div className="letter"><div className="letter-wrapper">L</div></div>
                        <div className="letter"><div className="letter-wrapper">e</div></div>
                        <div className="letter"><div className="letter-wrapper">t’</div></div>
                        <div className="letter"><div className="letter-wrapper">s</div></div>
                    </div>
                    <div className="header-item header-item-2">
                        <div className="letter"><div className="letter-wrapper">&nbsp;</div></div>
                        <div className="letter"><div className="letter-wrapper">s</div></div>
                        <div className="letter"><div className="letter-wrapper">e</div></div>
                        <div className="letter"><div className="letter-wrapper">e</div></div>
                    </div>
                </div>
            </div>
        </div> 
      </section>
    );
  }
  
  