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
import { ButtonLink, ButtonIconHolder, DisabledButton } from "../button";

const MerchModal = ({
  hideFunction,
  name,
  description,
  price,
  thumbnail,
  link,
  type,
  apparel,
}) => {
  function formatSizes(apparel) {
    let str = "";

    if (Number.isInteger(apparel.xs) && apparel.xs > 0) str += `X-Small | `;
    if (Number.isInteger(apparel.s) && apparel.s > 0) str += `Small | `;
    if (Number.isInteger(apparel.m) && apparel.m > 0) str += `Medium | `;
    if (Number.isInteger(apparel.l) && apparel.l > 0) str += `Large | `;
    if (Number.isInteger(apparel.xl) && apparel.xl > 0) str += `X-Large | `;
    if (Number.isInteger(apparel.xxl) && apparel.xxl > 0) str += `XX-Large | `;

    return str.substring(0, str.length - 3);
  }

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
              {type.title === "Stickers" ? "Starting at " : ""}
              {price}
            </p>
            <br />
            <p>{description}</p>
            {apparel && apparel.total > 0 && (
              <small style={{ marginTop: "4px" }}>{formatSizes(apparel)}</small>
            )}
            <br />
            <small>
              {link
                ? "This item is not produced by UTDesign Makerspace. We are unable to help you with your order should you run into any issues."
                : type.terms}
            </small>
            <br />
            {!apparel || apparel.total > 0 ? (
              link ? (
                <ButtonLink href={link} target="_blank">
                  <ButtonIconHolder>
                    <FaShoppingCart />
                  </ButtonIconHolder>
                  Purchase
                </ButtonLink>
              ) : (
                <ButtonLink href="https://utd.ms/discord" target="_blank">
                  <ButtonIconHolder>
                    <FaDiscord />
                  </ButtonIconHolder>
                  Contact an Officer
                </ButtonLink>
              )
            ) : (
              <DisabledButton>Out of Stock</DisabledButton>
            )}
          </MerchTextContainer>
        </MerchModalContainer>
      </MerchModalWrapper>
    </>
  );
};

export default MerchModal;
