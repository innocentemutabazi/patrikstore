import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type NewsLetterVariantType = {
  className?: string;
};

const NewsLetterVariant: FunctionComponent<NewsLetterVariantType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          background-color: var(--iris-100);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: var(--padding-30xl) var(--padding-45xl);
          box-sizing: border-box;
          max-width: 100%;
          gap: var(--gap-xl);
          text-align: center;
          font-size: var(--neue-medium-32-size);
          color: var(--color-white);
          font-family: var(--neue-medium-20);
          @media screen and (max-width: 1050px) {
            flex-wrap: wrap;
            padding-left: var(--padding-13xl);
            padding-right: var(--padding-13xl);
            box-sizing: border-box;
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          width: 622px;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          gap: var(--gap-9xs);
          max-width: 100%;
        `}
      >
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
          <h1
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
              @media screen and (max-width: 750px) {
                font-size: var(--font-size-7xl);
                line-height: 31px;
              }
              @media screen and (max-width: 450px) {
                font-size: var(--font-size-lgi);
                line-height: 23px;
              }
            `}
          >
            Join our exclusive Patriclub newsletter list
          </h1>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            max-width: 100%;
            font-size: var(--garamond-bold-20-size);
          `}
        >
          <h2
            className={css`
              margin: 0;
              position: relative;
              font-size: inherit;
              line-height: 120%;
              font-weight: 300;
              font-family: inherit;
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            Be the first to know when we have new releases
          </h2>
        </div>
      </div>
      <button
        className={css`
          cursor: pointer;
          border: 1px solid var(--cyber-punk-gradient);
          padding: var(--padding-3xl) var(--padding-mini);
          background-color: var(--whatsapp-black-11);
          width: 292px;
          border-radius: var(--br-base);
          box-sizing: border-box;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
        `}
      >
        <div
          className={css`
            height: 16px;
            flex: 1;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: 0px 0px;
            box-sizing: border-box;
            gap: var(--gap-5xs);
          `}
        >
          <div
            className={css`
              width: 182px;
              position: relative;
              font-size: var(--garamond-bold-20-size);
              line-height: 120%;
              font-family: var(--neue-medium-20);
              color: var(--whatsapp-white-01);
              text-align: center;
              display: inline-block;
              @media screen and (max-width: 450px) {
                font-size: var(--neue-medium-16-size);
                line-height: 19px;
              }
            `}
          >
            Sign me up for free!
          </div>
          <img
            className={css`
              height: 12px;
              flex: 1;
              position: relative;
              max-width: 100%;
              overflow: hidden;
            `}
            alt=""
            src="/arrow-right-3.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default NewsLetterVariant;
