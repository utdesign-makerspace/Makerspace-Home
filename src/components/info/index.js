import React, { useEffect } from "react";
import {
  InfoContainer,
  InfoWrapper,
  InfoRow,
  TextWrapper,
  Title,
  Description,
  Column1,
  Column2,
  Img,
  ImgWrap,
} from "./elements";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

import WorkspaceImg from "../../images/info/undraw_team_collaboration_re_ow29.svg";
import FreeImg from "../../images/info/undraw_virtual_reality_re_yg8i.svg";
import PresentationImg from "../../images/info/undraw_business_plan_re_0v81.svg";
import CommunityImg from "../../images/info/undraw_group_chat_re_frmo.svg";

const Infos = [
  {
    title: "A place for all Comets.",
    description:
      "UTDesign Makerspace is a free location for students, faculty, staff, and alumni to work on projects of any kind. We are located in SPN 2.220 and open from 7 AM to 9 PM on weekdays.",
    img: WorkspaceImg,
    imgAlt: "People collaborating on a project",
  },
  {
    title: "All tools are free. Seriously.",
    description:
      "We provide the equipment, you provide the materials and projects. All of our tools are free to use, including 3D printers, laser cutting, and virtual reality once you're trained.",
    img: FreeImg,
    imgAlt: "A person using a virtual reality headset",
  },
  {
    title: "A community of makers.",
    description:
      "We strive to build a community of Comets with hobbies across all majors. Whether you are creating an Iron Man cosplay or looking to advertise your video game, you are invited to join us.",
    img: CommunityImg,
    imgAlt: "A person using a virtual reality headset",
  },
  {
    title: "Free room reservations.",
    description:
      "Student organizations can reserve the classroom, meeting room, open lab, arcade cabinet, and more. We also provide lockers and work stations to organizations that need them.",
    img: PresentationImg,
    imgAlt: "A person giving a presentation",
  },
];

const Info = ({}) => {
  return (
    <>
      {Infos.map((i, index) => (
        <InfoSingle
          title={i.title}
          description={i.description}
          img={i.img}
          imgAlt={i.imgAlt}
          imgLeft={index % 2 == 1}
        />
      ))}
    </>
  );
};

const InfoSingle = ({ title, description, img, imgAlt, imgLeft }) => {
  const { ref, inView } = useInView();
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start({
        y: 0,
        opacity: 1,
        transition: { duration: 1.0 },
      });
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [inView]);

  return (
    <>
      <InfoContainer>
        <InfoWrapper>
          <InfoRow
            ref={ref}
            imgLeft={imgLeft}
            initial={{ y: 10, opacity: 0 }}
            animate={animation}
          >
            <Column1>
              <TextWrapper>
                <Title imgLeft={imgLeft}>{title}</Title>
                <Description imgLeft={imgLeft}>{description}</Description>
              </TextWrapper>
            </Column1>
            <Column2>
              <ImgWrap>
                <Img src={img} alt={imgAlt} title={imgAlt} />
              </ImgWrap>
            </Column2>
          </InfoRow>
        </InfoWrapper>
      </InfoContainer>
    </>
  );
};

export default Info;
