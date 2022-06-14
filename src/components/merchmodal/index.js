import React from "react";
import {
  MerchCloseModal,
  MerchModalBackground,
  MerchModalContainer,
  MerchModalWrapper,
  MerchTextContainer,
} from "./elements";
import { FaDiscord, FaShoppingCart, FaTimes } from "react-icons/fa";
import MerchModalImage from "../merchmodalimage";
import { ButtonLink, ButtonIconHolder } from "../button";

const MerchModal = ({ hideFunction }) => {
  return (
    <>
      <MerchModalBackground onClick={hideFunction} />
      <MerchModalWrapper>
        <MerchModalContainer>
          <MerchCloseModal onClick={hideFunction}>
            <FaTimes size={"24px"} />
          </MerchCloseModal>
          <MerchModalImage name="Pride Sticker" filename="merch/pride.png" />
          <MerchTextContainer>
            <h1>Pride Sticker</h1>
            <p>
              Starting at <b>$1.00</b>
            </p>
            <br />
            <p>
              Celebrate your pride with a sticker showcasing the Makerspace
              letterform logo and a pride flag of your choice. Available in
              rainbow, asexual, bisexual, lesbian, non-binary, pansexual, and
              transgender pride.
            </p>
            <br />
            <small>
              Stickers are produced at UTDesign Makerspace and not available for
              shipping. Stickers are 2" but can be larger for a small fee.
              Please contact an officer to commission a sticker order.
            </small>
            <br />
            <ButtonLink href="https://discord.gg/VQzQMnnWnx" target="_blank">
              <ButtonIconHolder>
                <FaDiscord />
              </ButtonIconHolder>
              Contact an Officer
              {/* <ButtonIconHolder>
                <FaShoppingCart />
              </ButtonIconHolder>
              Purchase */}
            </ButtonLink>
          </MerchTextContainer>
        </MerchModalContainer>
      </MerchModalWrapper>
    </>
  );
};

export default MerchModal;
