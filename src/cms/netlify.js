import React from "react";
import { StyleSheetManager } from "styled-components";
import CMS from "netlify-cms-app";
import Navbar from "../components/navbar";
import Footer from "../components/footer";
import {
  BlogPostContainer,
  BlogPostContent,
  BlogPostWrapper,
  BlogPostHeader,
} from "../templates/blog-post/elements";
import "../pages/style.css";

class CSSInjector extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      iframeRef: "",
    };
  }

  componentDidMount() {
    const iframe = document.getElementsByTagName("iframe")[0];
    const iframeHeadElem = iframe.contentDocument.head;
    this.setState({ iframeRef: iframeHeadElem });
  }

  render() {
    return (
      <div>
        {this.state.iframeRef && (
          <StyleSheetManager target={this.state.iframeRef}>
            {this.props.children}
          </StyleSheetManager>
        )}
      </div>
    );
  }
}

const BlogPostPreview = ({ entry, widgetFor, getAsset }) => (
  <>
    <Navbar />
    <BlogPostWrapper>
      <BlogPostContainer>
        <BlogPostHeader>
          <h1>{entry.getIn(["data", "title"])}</h1>
          <p>{entry.getIn(["data", "description"])}</p>
          <small>
            {new Date(entry.getIn(["data", "date"])).toLocaleString("default", {
              month: "long",
              day: "numeric",
              year: "numeric",
              timeZone: "UTC",
            })}
          </small>
        </BlogPostHeader>
        <img
          src={getAsset(entry.getIn(["data"]).toJS().thumbnail).url}
          style={{ width: "100%" }}
          alt={entry.getIn(["data", "title"])}
        />
        <BlogPostContent className="text">{widgetFor("body")}</BlogPostContent>
      </BlogPostContainer>
    </BlogPostWrapper>
    <Footer />
  </>
);

CMS.registerPreviewTemplate("blog", (props) => (
  <CSSInjector>
    <BlogPostPreview {...props} />
  </CSSInjector>
));
