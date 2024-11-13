import React from "react";
import { Link } from "react-router-dom";

import { ContentWrapper, ContentLine, ContentText } from "./component.styles";

const Content = () => {
  return (
    <ContentWrapper>
      <ContentLine delay="0.5s">
        <ContentText>
          My name is Mohammed, and I am a founder and developer at{" "}
          <Link to="https://darkerverse.net" target="_blank">
            Darkerverse
          </Link>
          {". "}I don't like to talk or share too much, kind of introvert. So
          I'm gonna make it simple and to the point,
        </ContentText>
      </ContentLine>

      <ContentLine delay="1s">
        <ContentText>
          I like books, I really love to read! I don't have a favorite one, as
          when I read a new one, it becomes my favorite that fast. I read self
          help books most of the time, and biographies. Anyway, I created{" "}
          <Link to="https://darkerverse.net" target="_blank">
            Darkerverse
          </Link>{" "}
          because I like books! - I also like to build, I like to learn new
          things that interests me
        </ContentText>
        <ContentText>
          I don't play video games, literally my phone is empty, I don't like
          them. As for coding? I code when I feel I want to. Sometimes I feel
          procrastinated and don't code, I think that depends on my mood,
          situation, and something like that
        </ContentText>
        <ContentText>
          As for{" "}
          <Link to="https://darkerverse.net" target="_blank">
            Darkerverse
          </Link>{" "}
          I created it using TypeScript and React for the frontend, and
          Firebase, Firestore for the backend and database. Lemon Squeezy for
          the payment processing. Anyway, it's a platform that provides book
          summaries, and self publishing books, means you can publish your book
          and others can read it and engage, etc..
        </ContentText>
        <ContentText>
          {" "}
          There's also an AI chatbot assistant, I named it after my short name
          "MoejrAI", nice. It helps you with anything regarding the platform,
          whether support or book suggestions for you to read
        </ContentText>
        <ContentText>
          {" "}
          The Thoughts feature is like an article, everyone can post thoughts,
          articles.
        </ContentText>
        <ContentText>
          And your account is displayed to others, this means others can see
          your content, books you published or thoughts you shared, and they can
          engage, like or review, a reply too!
        </ContentText>
      </ContentLine>

      <ContentLine delay="1.5s">
        <ContentText>
          I also created an e-commerce web app that I wanted to sell it for any
          store, it's still for sale by the way!
        </ContentText>
        <ContentText>
          I created it using TypeScript, React, Redux, Firebase - Firestore,
          with Netlify serverless functions for the backend. I also integrated
          SendGrid for sending order and receipts emails to customers, etc..
        </ContentText>
        <hr />
        <ContentText>I'll be adding more if there's any!</ContentText>
      </ContentLine>

      <ContentLine delay="2s">
        <ContentText></ContentText>
        <ContentText></ContentText>
      </ContentLine>

      <ContentLine delay="2.5s">
        <ContentText></ContentText>
      </ContentLine>
    </ContentWrapper>
  );
};

export default Content;
