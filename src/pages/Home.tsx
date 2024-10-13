import { FunctionComponent } from "react";
import Header from "../components/Header";
import { css } from "@emotion/css";
import Here from "../components/Here";
import ProductGrid from "../components/ProductGrid";
import Newsletter from "../components/Newsletter";
import Footer from "../components/Footer";

const Home: FunctionComponent = () => {
  return (
    <div
      className={css`
        width: 100%;
        position: relative;
        background-color: var(--color-white);
        overflow: hidden;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        justify-content: flex-start;
        gap: 40px;
        line-height: normal;
        letter-spacing: normal;
        @media screen and (max-width: 750px) {
          gap: var(--gap-xl);
        }
      `}
    >
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-01);
          font-family: var(--neue-medium-20);
        `}
      >
        <Header />
        <div
          className={css`
            align-self: stretch;
            background-color: var(--iris-100);
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: var(--padding-base) var(--padding-xl);
          `}
        >
          <div
            className={css`
              width: 435px;
              position: relative;
              line-height: 17px;
              display: inline-block;
            `}
          >
            SAVE UP TO 60% WHEN YOU PURCHASE FROM OUR PATRIKLUB
          </div>
        </div>
        <Here />
      </section>
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 40px 60px var(--padding-13xl);
          box-sizing: border-box;
          max-width: 100%;
          @media screen and (max-width: 1225px) {
            padding-bottom: 39px;
            box-sizing: border-box;
          }
          @media screen and (max-width: 750px) {
            padding-bottom: 25px;
            box-sizing: border-box;
          }
        `}
      >
        <ProductGrid />
      </section>
      <section
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          max-width: 100%;
        `}
      >
        <Newsletter />
        <Footer />
      </section>
    </div>
  );
};

export default Home;
