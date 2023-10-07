"use client";
import React from 'react'
import style from './Style.module.scss'
import Image from 'next/image'
import Banner1 from '../../Assets/Image/banner1.jpg'
import Banner2 from '../../Assets/Image/banner2.jpg'
import Banner3 from '../../Assets/Image/banner3.jpg'
import Banner4 from '../../Assets/Image/banner4.jpg'
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


const Banner = () => {
    const settings = {
        direction: "horizontal",
        loop: true,
        autoplay: {
            delay: 2500,
            disableOnInteraction: false,
        },
        spaceBetween: 0,
        pagination: {
            clickable: true
        },
        slidesPerView: 1,
        modules: [Navigation, Pagination, Mousewheel, Autoplay],
        navigation: true,
        keyboard: true

    }

    return (
        <figure className={style.banner_Main}>

            <Swiper {...settings} className={style.swiper}>

                <SwiperSlide>
                    <Image className={style.Banner_img} src={Banner1} alt='banner-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={style.Banner_img} src={Banner2} alt='banner-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={style.Banner_img} src={Banner3} alt='banner-img' />
                </SwiperSlide>
                <SwiperSlide>
                    <Image className={style.Banner_img} src={Banner4} alt='banner-img' />
                </SwiperSlide>
            </Swiper>
        </figure>
    )
}

export default Banner