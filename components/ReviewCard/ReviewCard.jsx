import React, { useRef, useState } from "react";
import s from "./ReviewCard.module.scss";
import { CarVideos } from "../../constants/constants";
import { Autoplay } from "swiper";
import { Swiper, SwiperSlide, Navigation, Pagination } from "swiper/react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";
// import Captions from "yet-another-react-lightbox/plugins/captions";
// import Zoom from "yet-another-react-lightbox/plugins/zoom";
// Import Swiper styles
import "swiper/css";
// import slide from "../../assets/Merc.png";
// import slideTwo from "../../assets/Classic.png";
// import slideThree from "../../assets/Classic2.png";
// import slideFour from "../../assets/Audi.png";
import Video from "yet-another-react-lightbox/plugins/video";
const ReviewCard = () => {
  console.log(CarVideos);

  const [open, setOpen] = useState(false);
  const [animationDuration, setAnimationDuration] = useState(500);
  const [maxZoomPixelRatio, setMaxZoomPixelRatio] = useState(1);
  const [zoomInMultiplier, setZoomInMultiplier] = useState(2);
  const [doubleTapDelay, setDoubleTapDelay] = useState(300);
  const [doubleClickDelay, setDoubleClickDelay] = useState(300);
  const [doubleClickMaxStops, setDoubleClickMaxStops] = useState(2);
  const [keyboardMoveDistance, setKeyboardMoveDistance] = useState(50);
  const [wheelZoomDistanceFactor, setWheelZoomDistanceFactor] = useState(100);
  const [pinchZoomDistanceFactor, setPinchZoomDistanceFactor] =
    React.useState(100);
  const [scrollToZoom, setScrollToZoom] = React.useState(false);

  return (
    <div className={s.ReviewCard}>
      <Swiper
        speed={2000}
        slidesPerView={4}
        autoplay={{delay: 1000}}
        className="myReviewSwiper"
        breakpoints={{
          320: {
            width: 320,
            slidesPerView: 2,
          },
          360: {
            width: 360,
            slidesPerView: 2,
          },
          375: {
            width: 375,
            slidesPerView: 2,
          },
          425: {
            width: 425,
            slidesPerView: 2,
          },
          455: {
            width: 455,
            slidesPerView: 2,
          },
          485: {
            width: 480,
            slidesPerView: 2,
          },
          500: {
            width: 500,
            slidesPerView: 2,
          },
          525: {
            width: 525,
            slidesPerView: 2,
          },
          545: {
            width: 545,
            slidesPerView: 2,
          },
          565: {
            width: 565,
            slidesPerView: 2,
          },
          585: {
            width: 585,
            slidesPerView: 2,
          },
          605: {
            width: 605,
            slidesPerView: 2,
          },
          625: {
            width: 625,
            slidesPerView: 2,
          },
          645: {
            width: 645,
            slidesPerView: 2,
          },
          // when window width is >= 640px
          660: {
            width: 660,
            slidesPerView: 2,
          },
          685: {
            width: 625,
            slidesPerView: 2,
          },
          706: {
            width: 706,
            slidesPerView: 2,
          },
          726: {
            width: 726,
            slidesPerView: 2,
          },
          746: {
            width: 746,
            slidesPerView: 2,
          },
          // when window width is >= 768px
          768: {
            width: 768,
            slidesPerView: 3,
          },
          1024: {
            width: 1024,
            slidesPerView: 3,
          },
          1366: {
            width: 1366,
            slidesPerView: 3,
          },
          1440: {
            width: 1440,
            slidesPerView: 4,
          },
          1920: {
            width: 1920,
            slidesPerView: 4,
          },
        }}
        modules={[Autoplay]}
      >
        {CarVideos.map((item) => {
          return (
            <SwiperSlide
              key={item.id}
              id={item.id}
              className={s.slide}
              onClick={() => setOpen(true)}
            >
              <img src={item.link} alt="img" />
              <div className={s.overlay}>
                <img src="/play.png" alt="play" />
              </div>
            </SwiperSlide>
          );
        })}
      </Swiper>

      {/* <Lightbox
        open={open}
        close={() => setOpen(false)}
        Keyboard
        slides={[
          { src: slide.src },
          { src: slideTwo.src },
          { src: slideThree.src },
          { src: slideFour.src },
        ]}
        plugins={[Captions, Zoom]}
        animation={{ zoom: animationDuration }}
        zoom={{
          maxZoomPixelRatio,
          zoomInMultiplier,
          doubleTapDelay,
          doubleClickDelay,
          doubleClickMaxStops,
          keyboardMoveDistance,
          wheelZoomDistanceFactor,
          pinchZoomDistanceFactor,
          scrollToZoom,
        }}
      /> */}
      <Lightbox
        plugins={[Video]}
        open={open}
        close={() => setOpen(false)}
        Keyboard
        slides={[
          {
            type: "video",
            width: 1920,
            height: 1080,
            poster: "../../assets/Merc.png",
            sources: [
              {
                src: "https://player.vimeo.com/external/368320203.sd.mp4?s=38b1bac5d627b94fb902597643461ee5f233d00a&profile_id=164&oauth2_token_id=57447761",
                type: "video/mp4",
              },
            ],
          },
        ]}
      />
    </div>
  );
};

export default ReviewCard;
