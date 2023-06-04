import React, { useEffect, useMemo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import s from "./MostPopular.module.scss";
import { Scrollbar } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/scrollbar";
import { Navigation } from "swiper";
import { mostPopularContent } from "@/constants/mostPopular";

const SliderBlock = () => {
  // const [currentSlide, setCurrentSlide] = useState(mostPopularContent[0]);
  const [search, setSearch] = useState("");
  // const slidesPerView = Math.min(mostPopularContent.length);

  // const getRealIndex = (index, length) => {
  //   if (index >= length) {
  //     return index % length;
  //   } else if (index < 0) {
  //     return ((index % length) + length) % length;
  //   }
  //   return index;
  // };

  // const initialSlideContent = (id) => {
  //   const realIndex = getRealIndex(id.realIndex, slidesCount);
  //   setCurrentSlide(mostPopularContent[realIndex]);
  // };

  const searchAndFilteredSlides = useMemo(() => {
    if (search) {
      return mostPopularContent.filter((item) => {
        return item.title.toLowerCase().includes(search.toLowerCase());
      });
    } else {
      return mostPopularContent;
    }
  }, [search, mostPopularContent]);

  return (
    <div className={s.slider}>
      {/* <div className={s.slider__item_first}>
        <h1 className={s.sliderImage__title}>
          {currentSlide.title} <br /> {currentSlide.type}
        </h1>
        <div className={s.sliderImage_text}>
          <p>Rent is from aed</p>
          <h1 className={s.sliderImage_price}>{currentSlide.price}</h1>
          <p>per day</p>
        </div>
        <img src={currentSlide.image} alt="car" />
      </div> */}

      <div className={s.slider__item_second}>
        <h1 className={s.slider__title}>Most Popular</h1>
        <input
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className={s.slider___search}
          placeholder="Car search"
        />
        <Swiper className="my-slider">
          {searchAndFilteredSlides.map((item, index) => {
            return (
              <SwiperSlide className="my-slide__item" key={item.id}>
                <h1>{item.title}</h1>
                <p>{item.type}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
        <button className={s.slider_button}>View all</button>
      </div>
    </div>
  );
};

export default SliderBlock;
