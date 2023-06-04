import React from 'react';
import s from '../Footer/Footer.module.scss'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from 'swiper';
import 'swiper/css/autoplay'
import "swiper/css";
import Image from 'next/image';

const FooterSlider = ({ FooterImgDate }) => {
	return (
		<div className={s.footer_slide_block}>
			<Swiper slidesPerView={10}
				className="myFooterSlider"
				modules={[Autoplay]}
				autoplay={{delay: 500}}
				speed={600}
				loop={true}
				breakpoints={{
					1920: {
						slidesPerView: 10
					},
					1533: {
						slidesPerView: 9,
					},
					1288: {
						slidesPerView: 8,
					},
					1024: {
						slidesPerView: 7,
					},
					820: {
						slidesPerView: 6,
					},
					710: {
						slidesPerView: 5,
					},
					520: {
						slidesPerView: 4,
						spaceBetween: 70,
					},
					420: {
						slidesPerView: 3,
					},
					320: {
						slidesPerView: 2,
					},
					260: {
						slidesPerView: 1,
					}
				}}
			>
				{
					FooterImgDate.map((item => {
						return (
							<SwiperSlide key={item.id}><Image src={item.img} alt='brand_img'/></SwiperSlide>
						)
					}))
				}
			</Swiper>
		</div>
	);
};

export default FooterSlider;