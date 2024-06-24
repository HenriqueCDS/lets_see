import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import './carrousel.css';
import frame1 from "../../../../src/assets/img/Frame1.png";
import frame2 from "../../../../src/assets/img/Frame2.png";
import { Pagination } from 'swiper/modules';

export default function CarrouselImages() {
    return(
       <div className='mobile'>
        <Swiper spaceBetween={12} slidesPerView={'auto'}  loop={true}  pagination={{
          clickable: true,
        }}
        modules={[Pagination]}>
        <SwiperSlide>
          <div className="image">
              <img src={frame1}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
              <img src={frame2}/>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="image">
              <img src={frame2}/>
          </div>
        </SwiperSlide>
      </Swiper>
      </div>
    )
}