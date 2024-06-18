import NavBar from "../../componentes/NavBar";
import "./collections.css";
import frame1 from "../../assets/img/Frame1.png";
import frame2 from "../../assets/img/Frame2.png";

export default function Collection() {
    return (

      <section>
        <NavBar />
        <div class="container-collections" data-barba="wrapper">
        <div class="content-collections" data-barba="container" data-barba-namespace="">
                 <div class="content-titule">
                     <h1>Collections</h1>
                 </div>
                 <div class="content-selector">
                    <ul>
                        <li><span>Short By</span></li>
                        <li><span>Sunglasses</span></li>
                        <li><span>Eyeglasses</span></li>
                        <li><span>Night Glasses</span></li>
                        <li><span>FashionDesign</span></li>
                       
                    </ul>
                    <div class="selector-img">
                        <div class="text">
                            <span>Sunglasses</span>
                            <span>Summer Edition</span>
                        </div>
                        <div class="container-images">
                            <div class="image">
                                <img src={frame1}/>
                            </div>
                            <div class="image">
                                <div class="image-text">
                                    <div class="text">
                                        <span>Brazil</span>
                                        <span>Sunglasses</span>
                                    </div>
                                    <div class="image-button"><button class="button">Learn more</button> </div>

                                </div>
                                <img src={frame2}/>
                            </div>
                            <div class="image">
                                <div class="image-text">
                                    <div class="text">
                                        <span>Maldives</span>
                                        <span>Sunglasses</span>
                                    </div>
                                    <div class="image-button"><button class="button">Learn more</button> </div>

                                </div>
                                <img src={frame1}/>
                            </div>
                            <div class="image">
                                <img src={frame2}/>
                            </div>
                        </div>
                        <div class="text">
                            <span>Sunglasses</span>
                            <span>Summer Edition</span>
                        </div>
                        <div class="container-images">
                            <div class="image">
                                <img src={frame1}/>
                            </div>
                            <div class="image">
                                <div class="image-text">
                                    <div class="text">
                                        <span>Brazil</span>
                                        <span>Sunglasses</span>
                                    </div>
                                    <div class="image-button"><button class="button">Learn more</button> </div>

                                </div>
                                <img src={frame2}/>
                            </div>
                            <div class="image">
                                <div class="image-text">
                                    <div class="text">
                                        <span>Maldives</span>
                                        <span>Sunglasses</span>
                                    </div>
                                    <div class="image-button"><button class="button">Learn more</button> </div>

                                </div>
                                <img src={frame1}/>
                            </div>
                            <div class="image">
                                <img src={frame2} />
                            </div>
                        </div>                
                    </div>
                </div>            
          </div>
        </div>
  
      </section>
    );
  }
  
  