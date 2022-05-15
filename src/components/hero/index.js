import React from "react";
import { HeroContainer, HeroBg, HeroContent, HeroH1, HeroP } from "./elements";
import ArcadeBg from "../../images/hero/arcade.png";
import CosplayBg from "../../images/hero/cosplay.png";
import PrintersBg from "../../images/hero/printers.png";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Backgrounds = [
  { subtitle: "3D printing fans", image: PrintersBg },
  { subtitle: "cosplayers", image: CosplayBg },
  { subtitle: "game developers", image: ArcadeBg },
];

const Hero = () => {
  return (
    <Swiper
      slidesPerView={1}
      spaceBetween={30}
      effect={"fade"}
      autoplay={{
        delay: 5000,
        disableOnInteraction: true,
      }}
      loop={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, EffectFade, Pagination, Navigation]}
      className="mySwiper"
      id="home"
      speed={1000}
      allowTouchMove={false}
      initialSlide={Math.floor(Math.random() * Backgrounds.length)}
    >
      {Backgrounds.map((bg) => (
        <SwiperSlide>
          <HeroContainer>
            <HeroBg src={bg.image} />
            <HeroContent>
              <HeroH1>
                We are a community of
                <br />
                {bg.subtitle}.
              </HeroH1>
              <HeroP>
                UTDesign Makerspace is a free-to-use place of innovation,
                collaboration, and education for all majors.
              </HeroP>
            </HeroContent>
          </HeroContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
