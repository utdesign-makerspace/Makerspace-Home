import React from "react";
import { AnimatePresence } from "framer-motion";
import MerchImage from "../merchimage";
import MerchModal from "../merchmodal";
import {
  MerchContainer,
  MerchWrapper,
  MerchButton,
  MerchText,
  MerchModalAnimation,
} from "./elements";

const MerchTypes = {
  Sticker: {
    terms:
      'Stickers are produced at UTDesign Makerspace and not available for shipping. Stickers are 2" but can be larger for a small fee. Prices listed reflect a cash discount. Please contact an officer to buy stickers.',
  },
};

const MerchItems = [
  {
    name: "M Sticker",
    description:
      "Represent UTDesign Makerspace with a sticker of our letterform logo.",
    price: 1,
    thumbnail: "merch/msticker.png",
    // link: "https://google.com/",
    type: MerchTypes.Sticker,
  },
  {
    name: "Pride Sticker",
    description:
      "Celebrate your pride with a sticker of the Makerspace letterform logo and a pride flag of your choice. Available in rainbow, asexual, bisexual, lesbian, non-binary, pansexual, and transgender pride.",
    price: 1,
    thumbnail: "merch/pride.png",
    type: MerchTypes.Sticker,
  },
  {
    name: "Pride Sticker Collection",
    description:
      "Celebrate your pride with a collection of stickers of the Makerspace letterform logo and the rainbow, asexual, bisexual, lesbian, non-binary, pansexual, and transgender pride flags. Also includes an M Sticker.",
    price: 6,
    thumbnail: "merch/pridecollection.png",
    type: MerchTypes.Sticker,
  },
];

class Merch extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    };
  }

  merchClick = (name, description, thumbnail, price, link, type) => {
    this.setState({
      modalOpen: true,
      item: {
        name: name,
        description: description,
        thumbnail: thumbnail,
        price: price,
        link: link,
        type: type,
      },
    });
  };

  render() {
    return (
      <>
        <AnimatePresence>
          {this.state.modalOpen && (
            <MerchModalAnimation
              initial={{ opacity: 0 }}
              animate={{ opacity: 1, transition: { duration: 0.25 } }}
              exit={{ opacity: 0, transition: { duration: 0.25 } }}
            >
              <MerchModal
                hideFunction={() => this.setState({ modalOpen: false })}
                name={this.state.item.name}
                description={this.state.item.description}
                thumbnail={this.state.item.thumbnail}
                price={this.state.item.price}
                link={this.state.item.link}
                type={this.state.item.type}
              />
            </MerchModalAnimation>
          )}
        </AnimatePresence>
        <MerchWrapper>
          <MerchContainer>
            {MerchItems.map((item) => (
              <>
                <MerchButton
                  onClick={() =>
                    this.merchClick(
                      item.name,
                      item.description,
                      item.thumbnail,
                      Intl.NumberFormat("en-US", {
                        style: "currency",
                        currency: "USD",
                      }).format(item.price),
                      item.link,
                      item.type
                    )
                  }
                >
                  <MerchImage name={item.name} filename={item.thumbnail} />
                  <MerchText>
                    <h3>{item.name}</h3>
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
  }
}

export default Merch;
