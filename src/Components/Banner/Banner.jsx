import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import '../../../public/style.css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';

const Banner = () => {
    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
      progressCircle.current.style.setProperty('--progress', 1 - progress);
      progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };
    return (
        <div className='mx-auto w-11/12  my-12'>
            <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        onAutoplayTimeLeft={onAutoplayTimeLeft}
        className="mySwiper rounded"
      >
        <SwiperSlide>
            <div className="hero min-h-[500px] rounded" style={{backgroundImage: 'url(https://i.ibb.co/cCj4rYP/australia-beautiful-places-sydney-harbour.jpg)'}}>
            <div className="hero-overlay bg-opacity-40"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold ">Australia </h1>
                <p className="mb-5 ">- The sun-lit sky and sea blend perfectly into each other. - The awe-inspiring sun danced in from <br />the horizon. .</p>
                <button className="btn btn-warning text-xl px-8 text-white">See More</button>
                </div>
            </div>
            </div>
                    
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-[500px] rounded" style={{backgroundImage: 'url(https://i.ibb.co/nMCv5Zd/360-F-431797063-t-UEOKp-IXp-BH3c-G6-Gx0xk-E73b-Eiwg-C3-Qv.jpg)'}}>
            <div className="hero-overlay"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Bangladesh</h1>
                <p className="mb-5">- The sun-lit sky and sea blend perfectly into each other. - The awe-inspiring sun danced in from <br />the horizon. .</p>
                <button className="btn btn-warning px-8 text-xl text-white">See More</button>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <SwiperSlide>
        <div className="hero min-h-[500px] rounded" style={{backgroundImage: 'url(https://i.ibb.co/bzvyn7K/Dubai-Skylines-at-night-Pexels-3787839.jpg)'}}>
            <div className="hero-overlay bg-opacity-10"></div>
            <div className="hero-content text-center text-neutral-content">
                <div className="max-w-md">
                <h1 className="mb-5 text-5xl font-bold">Dubai</h1>
                <p className="mb-5">- The sun-lit sky and sea blend perfectly into each other. - The awe-inspiring sun danced in from <br />the horizon. .</p>
                <button className="btn btn-warning px-8 text-xl text-white" >See More</button>
                </div>
            </div>
            </div>
        </SwiperSlide>
        <div className="autoplay-progress" slot="container-end">
          <svg viewBox="0 0 48 48" ref={progressCircle}>
            <circle cx="24" cy="24" r="20"></circle>
          </svg>
          <span ref={progressContent}></span>
        </div>
      </Swiper>
        </div>
    );
};

export default Banner;