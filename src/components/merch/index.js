import React, { useEffect, useState } from "react";
import Papa from "papaparse";
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
    description:
      "We greatly appreciate your service as our walking billboard. Some shirts are available for a limited time only at low prices, so be sure to check them out!",
    terms:
      "This apparel is currently stored at UTDesign Makerspace and not available for shipping. Only the sizes above are available. These items are generally limited edition and will not be restocked. Please contact an officer to buy this item.",
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
      "Slap it on your favorite tech or our sticker bombed arcade cabinet.",
    terms:
      'Stickers are produced at UTDesign Makerspace and not available for shipping. Stickers are 2" but can be larger for a small fee. Prices listed reflect a cash discount. Please contact an officer to buy stickers.',
  },
};

const MerchItems = [
  {
    name: "Legacy Got Game Shirt",
    description:
      "A shirt to commemorate the Got Game game jam held in 2019. This shirt was available to participants and volunteers of the event. Various sponsors and partners are on the back of the shirt.",
    price: 5,
    thumbnail: "merch/ggfront.png",
    preview: "merch/ggback.png",
    type: MerchTypes.Apparel,
  },
  {
    name: "Legacy Long Sleeve Shirt",
    description:
      "Previously an officer-only item, this shirt is now available to all members of UTDesign Makerspace in limited quantities. Features BitBot in a shirt pocket with the Makerspace name on the left sleeve.",
    price: 10,
    thumbnail: "merch/longsleevefront.png",
    preview: "merch/longsleeveside.png",
    type: MerchTypes.Apparel,
  },
  {
    name: "Legacy Makerspace Shirt",
    description:
      "A general UTDesign Makerspace shirt from an unknown year. Features a full UTDesign Makerspace logo on the front and our slogan on the back.",
    price: 10,
    thumbnail: "merch/dreamfront.png",
    preview: "merch/dreamback.png",
    type: MerchTypes.Apparel,
  },
  {
    name: "Legacy Mining Shirt",
    description:
      "A shirt featuring various student organizations and BitBot holding a pickaxe from 2018. We... don't really remember who we gave this to. But hey, now you can own one of the remaining few!",
    price: 5,
    thumbnail: "merch/cryptofront.png",
    preview: "merch/cryptoback.png",
    type: MerchTypes.Apparel,
  },
  {
    name: "Legacy Robotics Shirt",
    description:
      "A shirt showcasing a UT Dallas Robotics logo. The group that made these shirts has since disbanded, but we were home to many of their events and many existing robotics organizations.",
    price: 5,
    thumbnail: "merch/roboticsfront.png",
    preview: "merch/roboticsback.png",
    type: MerchTypes.Apparel,
  },
  {
    name: "M Keychain",
    description:
      "Represent UTDesign Makerspace with an embossed keychain of our letterform logo.",
    price: 3,
    thumbnail: "merch/mkeychain.png",
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
      "Have a custom sticker made for you! We can make stickers of any size and shape. Please note that that this is based on availability and we are offering this as a paid service out of convenience. Orders will only be processed once we can fill a full sticker sheet. You are welcome to print your own stickers at home and cut them at the Makerspace.",
    price: 1.5,
    thumbnail: "merch/generalsticker.png",
    type: MerchTypes.Sticker,
  },
  {
    name: "Custom Sticker Sheet",
    description:
      'Have a custom 6.75" × 9.25" sticker sheet made for you! Please note that we are offering this as a paid service out of convenience. You are welcome to print your own stickers at home and cut them at the Makerspace.',
    price: 12,
    thumbnail: "merch/generalstickersheet.png",
    type: MerchTypes.Sticker,
  },
];

const Merch = () => {
  const [apparelData, setApparelData] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [item, setItem] = useState({});

  const merchClick = (name, description, thumbnail, price, link, type) => {
    let shirt = apparelData.find((i) => i.shirt === name);

    setModalOpen(true);
    setItem({
      name: name,
      description: description,
      thumbnail: thumbnail,
      price: price,
      link: link,
      type: type,
      apparel: shirt ? shirt : null,
    });
  };

  useEffect(() => {
    fetch(
      "https://docs.google.com/spreadsheets/d/e/2PACX-1vTZt8MpxTKM3kz2F_xK3SZmlihm_RhpkRE-aVHx1VrXokvdDWJGbO-B3yjQfPkMoo1No_JtswSR0b6b/pub?gid=0&single=true&output=csv"
    )
      .then((res) => {
        let reader = res.body.getReader();
        let decoder = new TextDecoder("utf-8");

        return reader.read().then((result) => {
          return decoder.decode(result.value);
        });
      })
      .then((data) => {
        Papa.parse(data, {
          header: true,
          dynamicTyping: true,
          complete: (apparel) => {
            setApparelData(apparel.data);
          },
        });
      });
  }, []);

  return (
    <>
      <AnimatePresence>
        {modalOpen && (
          <MerchModalAnimation
            initial={{ opacity: 0 }}
            animate={{ opacity: 1, transition: { duration: 0.25 } }}
            exit={{ opacity: 0, transition: { duration: 0.25 } }}
          >
            <MerchModal
              hideFunction={() => setModalOpen(false)}
              name={item.name}
              description={item.description}
              thumbnail={item.thumbnail}
              price={item.price}
              link={item.link}
              type={item.type}
              apparel={item.apparel ? item.apparel : null}
            />
          </MerchModalAnimation>
        )}
      </AnimatePresence>
      <MerchWrapper>
        <MerchSection
          type={MerchTypes.Apparel}
          apparelData={apparelData}
          merchClick={merchClick}
        />
        <MerchSection
          type={MerchTypes.Keychain}
          apparelData={apparelData}
          merchClick={merchClick}
        />
        <MerchSection
          type={MerchTypes.Sticker}
          apparelData={apparelData}
          merchClick={merchClick}
        />
        <div
          style={{
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "20px",
            marginBottom: "20px",
          }}
        >
          <MerchHeader>Donations</MerchHeader>
          <MerchDescription>
            If you want to donate without getting any merchandise.
          </MerchDescription>
          <MerchContainer>
            {/*
            !! IF ADDING A NEW DONATION CAMPAIGN !!
            Change the src to the PayPal campaign link and uncomment the iframe.
            */}
            {/* <iframe
              src="https://www.paypal.com/giving/campaigns?campaign_id=XT278LVCJGG7G"
              title="PayPal donate campaign card"
              frameborder="0"
              width={358}
              height={407}
              scrolling="no"
              style={{ margin: "8px 0px" }}
            /> */}
          </MerchContainer>
          <MerchContainer style={{ marginTop: "8px" }}>
            <form
              action="https://www.paypal.com/donate"
              method="post"
              target="_blank"
            >
              <input
                type="hidden"
                name="hosted_button_id"
                value="YYH3GDUAH84YS"
              />
              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_donateCC_LG.gif"
                border="0"
                name="submit"
                title="PayPal - The safer, easier way to pay online!"
                alt="Donate with PayPal button"
              />
              <img
                alt=""
                border="0"
                src="https://www.paypal.com/en_US/i/scr/pixel.gif"
                width="1"
                height="1"
              />
            </form>
          </MerchContainer>
        </div>
      </MerchWrapper>
    </>
  );
};

class MerchSection extends React.Component {
  itemArr = MerchItems.filter((item) => item.type === this.props.type);

  render() {
    this.itemArr.forEach((element) => {
      let temp = this.props.apparelData.find((i) => i.shirt === element.name);
      element.apparel = temp ? temp : null;
    });

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
        <MerchDescription
          style={{
            maxWidth: "800px",
            marginLeft: "auto",
            marginRight: "auto",
          }}
        >
          {this.props.type.description}
        </MerchDescription>
        {this.itemArr.length > 0 ? (
          <MerchContainer>
            {this.itemArr.map((item) => (
              <>
                <MerchButton
                  onClick={() =>
                    this.props.merchClick(
                      item.name,
                      item.description,
                      item.preview ? item.preview : item.thumbnail,
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
                      {!item.apparel || item.apparel.total > 0
                        ? (item.type.title === "Stickers"
                            ? "Starting at "
                            : "") +
                          Intl.NumberFormat("en-US", {
                            style: "currency",
                            currency: "USD",
                          }).format(item.price)
                        : "Out of Stock"}
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
