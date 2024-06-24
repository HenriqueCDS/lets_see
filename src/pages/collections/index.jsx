import React, { useCallback, useEffect } from 'react';
import gsap from 'gsap';
import NavBar from "../../componentes/NavBar";
import "./collections.css";

import CollectionImages from "./CollectionImages/CollectionImages";
import CarrouselImages from './Carrouselmages/CarrouseImages';

export default function Collection() {
    const pageTransition = useCallback(() => {
        const tl = gsap.timeline();
    
        tl.to('.transition', {
          duration: 0.5,
          scaleY: 1,
          transformOrigin: 'top',
          ease: 'power4.inOut',
        });
  
       
        tl.to('.transition', {
          duration: 1,
          scaleY: 0,
          transformOrigin: 'bottom',
          ease: 'power4.inOut',
          delay: 0.2,
        });
        tl.to(".content-titule h1", {
            top: 0,
            duration: 1,
            ease: "power3.inOut",
            delay: 0.75,
          });
      }, []);
    
      useEffect(() => {
        // Call the pageTransition function when the component is mounted
        pageTransition();
      }, [pageTransition]);

    return (

      <section >
        <div className="transition"></div>
        <NavBar />
        <div className="container-collections" >
        <div className="content-collections" >
                 <div className="content-titule">
                     <h1>Collections</h1>
                 </div>
                 <div className="content-selector">
                    <ul>
                        <li><span>Short By</span></li>
                        <li><span>Sunglasses</span></li>
                        <li><span>Eyeglasses</span></li>
                        <li><span>Night Glasses</span></li>
                        <li><span>FashionDesign</span></li>
                       
                    </ul>
                    <div className="selector-img">
                        <div className="text">
                            <span>Sunglasses</span>
                            <span>Summer Edition</span>
                        </div>
                        <CollectionImages />
                        <CarrouselImages /> 
                   
                      
                           
                    </div>
                </div>            
          </div>
        </div>
  
      </section>
    );
  }
  
  