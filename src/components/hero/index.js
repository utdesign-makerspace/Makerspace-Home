import React from "react";
import {
  HeroContainer,
  HeroContent,
  HeroH1,
  HeroP,
  HeroCopyright,
} from "./elements";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, Pagination, Navigation } from "swiper";
import "swiper/css";
import "swiper/css/effect-fade";
import "swiper/css/pagination";
import "swiper/css/navigation";
import HeroImage from "../heroimage";

const Backgrounds = [
  { subtitle: "3D printing fans", image: "hero/printers.png" },
  {
    subtitle: "cosplayers",
    image: "hero/cosplay.png",
    copyright: "Thomas Cortez (Biotom27)",
    year: "2022",
  },
  {
    subtitle: "engineers",
    image: "hero/aiaa.png",
    copyright: "Erik Nguyen",
    year: "2022",
  },
  { subtitle: "game developers", image: "hero/arcade.png" },
  {
    subtitle: "programmers",
    image: "hero/sgda2.png",
    copyright: "Student Game Developer Association",
    year: "2022",
  },
  {
    subtitle: "workshop attendees",
    image: "hero/sgda1.png",
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
            <HeroImage filename={bg.image} />
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
