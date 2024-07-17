
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import Slide from './Slide';
import bgImg1 from '../assets/images/woman-taking-care-girl-salon.jpg'
import bgImg2 from '../assets/images/bgImg2.jpg'
import bgImg3 from '../assets/images/bgImg3.jpg'


export default function Carousel() {
  return (
    <div className='container px-8 py-10 mx-auto'>
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        loop={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide>
           <Slide image={bgImg1} text='Get Your Web development projects done in minute'/>
              </SwiperSlide>
        <SwiperSlide>
           <Slide image={bgImg2} text='Get Your Web development projects done in minute'/>
              </SwiperSlide>
        <SwiperSlide>
           <Slide image={bgImg3} text='Get Your Web development projects done in minute'/>
              </SwiperSlide>

     
      </Swiper>
    </div>
  );
}
