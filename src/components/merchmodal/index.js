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

const MerchModal = ({
  hideFunction,
  name,
  description,
  price,
  thumbnail,
  link,
  type,
}) => {
  return (
    <>
      <MerchModalBackground onClick={hideFunction} />
      <MerchModalWrapper>
        <MerchModalContainer>
          <MerchCloseModal onClick={hideFunction}>
            <FaTimes size={"24px"} />
          </MerchCloseModal>
          <MerchModalImage name={name} filename={thumbnail} />
          <MerchTextContainer>
            <h1>{name}</h1>
            <p>
              Starting at <b>{price}</b>
            </p>
            <br />
            <p>{description}</p>
            <br />
            <small>{type.terms}</small>
            <br />
            {!link && (
              <ButtonLink href="https://discord.gg/VQzQMnnWnx" target="_blank">
                <ButtonIconHolder>
                  <FaDiscord />
                </ButtonIconHolder>
                Contact an Officer
              </ButtonLink>
            )}
            {link && (
              <ButtonLink href={link} target="_blank">
                <ButtonIconHolder>
                  <FaShoppingCart />
                </ButtonIconHolder>
                Purchase
              </ButtonLink>
            )}
          </MerchTextContainer>
        </MerchModalContainer>
      </MerchModalWrapper>
    </>
  );
};

export default MerchModal;
