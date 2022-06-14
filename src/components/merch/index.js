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

class Merch extends React.Component {
  constructor() {
    super();
    this.state = {
      modalOpen: false,
    };
  }

  merchClick = () => {
    this.setState({
      modalOpen: true,
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
              />
            </MerchModalAnimation>
          )}
        </AnimatePresence>
        <MerchWrapper>
          <MerchContainer>
            {MerchItems.map((item) => (
              <>
                <MerchButton onClick={this.merchClick}>
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
