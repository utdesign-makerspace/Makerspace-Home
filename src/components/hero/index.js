import React from "react";
import {
  HeroContainer,
  HeroBg,
  HeroContent,
  HeroH1,
  HeroP,
  HeroCopyright,
} from "./elements";

import AIAABg from "../../images/hero/aiaa.jpg";
import ArcadeBg from "../../images/hero/arcade.jpg";
import CosplayBg from "../../images/hero/cosplay.jpg";
import PrintersBg from "../../images/hero/printers.jpg";
import SGDA1Bg from "../../images/hero/sgda1.jpg";
import SGDA2Bg from "../../images/hero/sgda2.jpg";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";

const Backgrounds = [
  { subtitle: "3D printing fans", image: PrintersBg },
  {
    subtitle: "cosplayers",
    image: CosplayBg,
    copyright: "Thomas Cortez (Biotom27)",
    year: "2022",
  },
  {
    subtitle: "engineers",
    image: AIAABg,
    copyright: "Erik Nguyen",
    year: "2022",
  },
  { subtitle: "game developers", image: ArcadeBg },
  {
    subtitle: "programmers",
    image: SGDA2Bg,
    copyright: "Student Game Developer Association",
    year: "2022",
  },
  {
    subtitle: "workshop attendees",
    image: SGDA1Bg,
    copyright: "Student Game Developer Association",
    year: "2022",
  },
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
            {bg.copyright && (
              <HeroCopyright>
                © {bg.copyright}, {bg.year ? bg.year : "2022"}
              </HeroCopyright>
            )}
          </HeroContainer>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default Hero;
