import frame1 from "../../../../src/assets/img/Frame1.png";
import frame2 from "../../../../src/assets/img/Frame2.png";
export default function CollectionImages(){
    return(
                    <div className="desktop">
                        <div className="container-images">
                                <div className="image">
                                    <img src={frame1}/>
                                </div>
                                <div className="image">
                                    <div className="image-text">
                                        <div className="text">
                                            <span>Brazil</span>
                                            <span>Sunglasses</span>
                                        </div>
                                        <div className="image-button"><button className="button">Learn more</button> </div>

                                    </div>
                                    <img src={frame2}/>
                                </div>
                                <div className="image">
                                    <div className="image-text">
                                        <div className="text">
                                            <span>Maldives</span>
                                            <span>Sunglasses</span>
                                        </div>
                                        <div className="image-button"><button className="button">Learn more</button> </div>

                                    </div>
                                    <img src={frame1}/>
                                </div>
                                <div className="image">
                                    <img src={frame2} />
                                </div>
                            </div>  
                        </div> 
    )
}