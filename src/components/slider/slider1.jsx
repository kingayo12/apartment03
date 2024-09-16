import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider1.css";
import { Navigation, Autoplay } from "swiper/modules";
import Img2 from "../../assets/imgs/hero1.jpg";
import Img3 from "../../assets/imgs/hero12.png";
import Img4 from "../../assets/imgs/hero3.jpg";
import Img5 from "../../assets/imgs/hero10.png";
import Img6 from "../../assets/imgs/hero5.jpg";
import Img7 from "../../assets/imgs/hero11.png";
import Img8 from "../../assets/imgs/hero7.jpg";
import Img9 from "../../assets/imgs/hero13.png";
import Img10 from "../../assets/imgs/hero9.jpg";

const Slider1 = () => {
  return (
    <div className='loop_container'>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Navigation, Autoplay]}
        className='mySwiper'
      >
        <SwiperSlide>
          <img src={Img2} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img3} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img4} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img5} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img6} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img7} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img8} alt='' />
        </SwiperSlide>
        <SwiperSlide>
          <img src={Img9} alt='' />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Slider1;
