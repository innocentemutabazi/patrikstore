import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type HereType = {
  className?: string;
};

const Here: FunctionComponent<HereType> = ({ className = "" }) => {
  return (
    <div
      className={[
        css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          position: relative;
          row-gap: 20px;
          max-width: 100%;
          text-align: center;
          font-size: var(--garamond-bold-20-size);
          color: var(--color-white);
          font-family: var(--neue-medium-20);
          @media screen and (max-width: 1225px) {
            flex-wrap: wrap;
            justify-content: center;
          }
        `,
        className,
      ].join(" ")}
    >
      <img
        className={css`
          align-self: stretch;
          width: 426.7px;
          position: relative;
          max-height: 100%;
          object-fit: cover;
          min-height: 570px;
          max-width: 100%;
          flex-shrink: 0;
        `}
        alt=""
        src="/hero-background@2x.png"
      />
      <div
        className={css`
          height: 570px;
          width: 1280px;
          position: relative;
          max-width: 100%;
          flex-shrink: 0;
        `}
      >
        <img
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            bottom: 0px;
            left: 0px;
            max-height: 100%;
            width: 50%;
            object-fit: cover;
          `}
          alt=""
          src="/hero-images@2x.png"
        />
        <img
          className={css`
            position: absolute;
            height: 100%;
            top: 0px;
            bottom: 0px;
            max-height: 100%;
            width: 50%;
            object-fit: cover;
            z-index: 6;
          `}
          loading="lazy"
          alt=""
          src="\unsplashb4xk6bzgqwu-9@2x.png"
        />
      </div>
      <div
        className={css`
          width: 996px;
          margin: 0 !important;
          position: absolute;
          top: 394px;
          left: 40px;
          background-color: var(--color-gray-200);
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-base);
          box-sizing: border-box;
          gap: var(--gap-5xs);
          max-width: 100%;
          z-index: 2;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px 0px;
            box-sizing: border-box;
            max-width: 100%;
          `}
        >
          <h2
            className={css`
              margin: 0;
              width: 409px;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 400;
              font-family: inherit;
              display: inline-block;
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            MAINTAIN YOUR STEEZ AND COMPOSURE
          </h2>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
          `}
        >
          <h2
            className={css`
              margin: 0;
              flex: 1;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 400;
              font-family: inherit;
              display: inline-block;
              max-width: 100%;
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            From backpacks to sneakers. These are the best in the market of
            wears to help you look fresh and smart
          </h2>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: center;
            padding: 0px var(--padding-xl) 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-5xs);
            max-width: 100%;
            @media screen and (max-width: 750px) {
              flex-wrap: wrap;
            }
          `}
        >
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--electric-lime);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 95px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 95px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Shop Men
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 25px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/arrow-right.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--electric-lime);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                padding: 0px 0px 0px 0px;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 125px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 125px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Shop Women
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 1px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/arrow-right-1.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--electric-lime);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <div
              className={css`
                display: flex;
                flex-direction: row;
                align-items: center;
                justify-content: center;
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 96px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 96px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Shop Kids
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 24px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                `}
                alt=""
                src="/arrow-right-2.svg"
              />
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Here;
