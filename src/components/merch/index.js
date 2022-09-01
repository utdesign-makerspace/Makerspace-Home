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
  MerchHeader,
  MerchDescription,
} from "./elements";

const MerchTypes = {
  Apparel: {
    title: "Apparel",
    description: "We greatly appreciate your service as a walking billboard.",
    terms:
      'Stickers are produced at UTDesign Makerspace and not available for shipping. Stickers are 2" but can be larger for a small fee. Prices listed reflect a cash discount. Please contact an officer to buy stickers.',
  },
  Keychain: {
    title: "Keychains",
    description:
      "A unique conversation starter. Or a reminder of that one project you're putting off.",
    terms:
      "Keychains are produced at UTDesign Makerspace and not available for shipping. All keychains are 3D printed and may have small imperfections. Please contact an officer to buy keychains.",
  },
  Sticker: {
    title: "Stickers",
    description:
      "Slap it on your favorite tech or that one light pole by Hoblitzelle Hall.",
    terms:
      'Stickers are produced at UTDesign Makerspace and not available for shipping. Stickers are 2" but can be larger for a small fee. Prices listed reflect a cash discount. Please contact an officer to buy stickers.',
  },
};

const MerchItems = [
  {
    name: "M Keychain",
    description:
      "Represent UTDesign Makerspace with an embossed keychain of our letterform logo.",
    price: 3,
    thumbnail: "merch/filamentkeychain.png",
    type: MerchTypes.Keychain,
  },
  {
    name: "Filament Spool Keychain",
    description:
      "Show off your 3D printing mania with this keychain designed to look like a filament spool. Other colors may be available, so make sure to ask an officer!",
    price: 3,
    thumbnail: "merch/filamentkeychain.png",
    type: MerchTypes.Keychain,
  },
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
  {
    name: "Custom Sticker",
    description:
      "Have a custom sticker made for you! We can make stickers of any size and shape. Please note that we are offering this as a paid service out of convenience. You are welcome to print your own stickers at home and cut them at the Makerspace.",
    price: 1,
    thumbnail: "merch/generalsticker.png",
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
          <MerchSection
            type={MerchTypes.Apparel}
            merchClick={this.merchClick}
          />
          <MerchSection
            type={MerchTypes.Keychain}
            merchClick={this.merchClick}
          />
          <MerchSection
            type={MerchTypes.Sticker}
            merchClick={this.merchClick}
          />
        </MerchWrapper>
      </>
    );
  }
}

class MerchSection extends React.Component {
  itemArr = MerchItems.filter((item) => item.type === this.props.type);

  render() {
    return (
      <div
        style={{
          marginLeft: "40px",
          marginRight: "40px",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <MerchHeader>{this.props.type.title}</MerchHeader>
        <MerchDescription>{this.props.type.description}</MerchDescription>
        {this.itemArr.length > 0 ? (
          <MerchContainer>
            {this.itemArr.map((item) => (
              <>
                <MerchButton
                  onClick={() =>
                    this.props.merchClick(
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
        ) : (
          <p style={{ textAlign: "center", color: "#aaa" }}>
            No items available. Check back later!
          </p>
        )}
      </div>
    );
  }
}

export default Merch;
