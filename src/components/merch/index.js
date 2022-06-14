import React from "react";
import MerchImage from "../merchimage";
import {
  MerchContainer,
  MerchWrapper,
  MerchButton,
  MerchText,
} from "./elements";

const MerchItems = [
  {
    name: "Pride Sticker",
    price: 1,
    thumbnail: "merch/pride.png",
  },
  {
    name: "Pride Sticker Collection",
    price: 6,
    thumbnail: "merch/pridecollection.png",
  },
];

const Merch = ({ data }) => {
  return (
    <>
      <MerchWrapper>
        <MerchContainer>
          {MerchItems.map((item) => (
            <>
              <MerchButton>
                <MerchImage name={item.name} filename={item.thumbnail} />
                <MerchText>
                  <h2>{item.name}</h2>
                  <p>
                    Starting at{" "}
                    <b>
                      {Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price)}
                    </b>
                  </p>
                </MerchText>
              </MerchButton>
            </>
          ))}
        </MerchContainer>
      </MerchWrapper>
    </>
  );
};

export default Merch;
