import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "./slider2.css";
import { Navigation, Autoplay } from "swiper/modules";

// Import your images
import Imgs1 from "../../assets/imgs/hero1.jpg";
import Imgs2 from "../../assets/imgs/hero12.png";
import Imgs3 from "../../assets/imgs/hero3.jpg";
import Imgs4 from "../../assets/imgs/hero10.png";
import Imgs5 from "../../assets/imgs/hero5.jpg";
import Imgs6 from "../../assets/imgs/hero11.png";
import Imgs7 from "../../assets/imgs/hero7.jpg";
import Imgs8 from "../../assets/imgs/hero13.png";
import Imgs9 from "../../assets/imgs/1.png";
import Imgs10 from "../../assets/imgs/2.png";
import Imgs11 from "../../assets/imgs/3.png";
import Imgs12 from "../../assets/imgs/4.png";
import Imgs13 from "../../assets/imgs/5.png";
import Imgs14 from "../../assets/imgs/6.png";
import Imgs15 from "../../assets/imgs/7.png";
import Imgs16 from "../../assets/imgs/8.png";
import Imgs17 from "../../assets/imgs/9.png";
import Imgs18 from "../../assets/imgs/10.png";
import Imgs19 from "../../assets/imgs/11.png";
import Imgs20 from "../../assets/imgs/12.png";
import Imgs21 from "../../assets/imgs/13.png";
import Imgs22 from "../../assets/imgs/14.png";
import Imgs23 from "../../assets/imgs/15.png";
import Imgs24 from "../../assets/imgs/16.png";
import Imgs25 from "../../assets/imgs/17.png";
import Imgs26 from "../../assets/imgs/18.png";
import Imgs27 from "../../assets/imgs/19.png";
import Imgs28 from "../../assets/imgs/20.png";
import Imgs29 from "../../assets/imgs/21.png";
import Imgs30 from "../../assets/imgs/22.png";
import Imgs31 from "../../assets/imgs/23.png";

// Combine the imported images and dynamically loaded additional images
const allImages = [
  { img: Imgs1, alt: "Rear View" },
  { img: Imgs2, alt: "top View" },
  { img: Imgs3, alt: "balcony View" },
  { img: Imgs4, alt: "Garden View" },
  { img: Imgs5, alt: "Parking View" },
  { img: Imgs6, alt: "Living Room" },
  { img: Imgs7, alt: "Poolside View" },
  { img: Imgs8, alt: "Resident Club" },
  { img: Imgs9, alt: "Ground floor" },
  { img: Imgs10, alt: "Foyer" },
  { img: Imgs11, alt: "View 3" },
  { img: Imgs12, alt: "First Floor" },
  { img: Imgs13, alt: "Elegant interior" },
  { img: Imgs14, alt: "Fully fitted kichen" },
  { img: Imgs15, alt: "Second Floor" },
  { img: Imgs16, alt: "Family Lounge" },
  { img: Imgs17, alt: "View 9" },
  { img: Imgs18, alt: "View 10" },
  { img: Imgs19, alt: "View 11" },
  { img: Imgs20, alt: "View 12" },
  { img: Imgs21, alt: "View 13" },
  { img: Imgs22, alt: "View 14" },
  { img: Imgs23, alt: "View 15" },
  { img: Imgs24, alt: "View 16" },
  { img: Imgs25, alt: "View 17" },
  { img: Imgs26, alt: "View 18" },
  { img: Imgs27, alt: "View 19" },
  { img: Imgs28, alt: "View 20" },
  { img: Imgs29, alt: "View 21" },
  { img: Imgs30, alt: "View 22" },
  { img: Imgs31, alt: "View 23" },
];

const Slider2 = () => {
  return (
    <div className='gallery_container'>
      {/* <div className='circlebig1'></div>
      <div className='circlebig2'></div> */}
      <div className='bg_blur'>
        <section className='title container'>
          <h1>Gallery</h1>
        </section>
        <Swiper
          slidesPerView={1}
          spaceBetween={10}
          centeredSlides={true}
          breakpoints={{
            640: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
          }}
          autoplay={{
            delay: 6500,
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
          {allImages.map((image, index) => (
            <SwiperSlide key={index}>
              <img src={image.img} alt={image.alt} loading='lazy' />
              <div className='text_box'>{image.alt}</div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Slider2;
