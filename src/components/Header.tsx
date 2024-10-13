import { FunctionComponent } from "react";
import { css } from "@emotion/css";

export type HeaderType = {
  className?: string;
};

const Header: FunctionComponent<HeaderType> = ({ className = "" }) => {
  return (
    <header
      className={[
        css`
          align-self: stretch;
          background-color: var(--whatsapp-white-01);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          padding: var(--padding-base) var(--padding-45xl);
          top: 0;
          z-index: 99;
          position: sticky;
          gap: var(--gap-xl);
          text-align: center;
          font-size: var(--garamond-bold-20-size);
          color: var(--whatsapp-white-01);
          font-family: var(--header-2);
          @media screen and (max-width: 1050px) {
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
          background-color: var(--whatsapp-black-11);
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: center;
          padding: var(--padding-5xs);
        `}
      >
        <a
          className={css`
            text-decoration: none;
            position: relative;
            letter-spacing: -0.02em;
            font-weight: 700;
            color: inherit;
          `}
        >
          <p
            className={css`
              margin: 0;
            `}
          >
            Patrik
          </p>
          <p
            className={css`
              margin: 0;
            `}
          >
            Wears
          </p>
        </a>
      </div>
      <div
        className={css`
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-5xs);
          font-size: var(--neue-light-12-size);
          color: var(--whatsapp-black-11);
          font-family: var(--neue-medium-20);
        `}
      >
        <div
          className={css`
            border-radius: var(--br-base);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
          `}
        >
          <div
            className={css`
              width: 25px;
              position: relative;
              line-height: 120%;
              display: inline-block;
              min-width: 25px;
            `}
          >
            Men
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-base);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
          `}
        >
          <div
            className={css`
              width: 43px;
              position: relative;
              line-height: 120%;
              display: inline-block;
              min-width: 43px;
            `}
          >
            Women
          </div>
        </div>
        <div
          className={css`
            border-radius: var(--br-base);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
          `}
        >
          <div
            className={css`
              width: 25px;
              position: relative;
              line-height: 120%;
              display: inline-block;
              min-width: 25px;
            `}
          >
            Kids
          </div>
        </div>
        <div
          className={css`
            background-color: var(--whatsapp-black-11);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
            font-size: var(--neue-medium-16-size);
            color: var(--whatsapp-white-01);
          `}
        >
          <div
            className={css`
              width: 40px;
              position: relative;
              line-height: 120%;
              display: inline-block;
              min-width: 40px;
              white-space: nowrap;
            `}
          >
            Flash
          </div>
        </div>
        <div
          className={css`
            background-color: var(--whatsapp-black-11);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-5xs);
            font-size: var(--neue-medium-16-size);
            color: var(--whatsapp-white-01);
          `}
        >
          <div
            className={css`
              width: 54px;
              position: relative;
              line-height: 120%;
              display: inline-block;
              min-width: 54px;
              white-space: nowrap;
            `}
          >
            Gbanjo
          </div>
        </div>
      </div>
      <div
        className={css`
          width: 309px;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: flex-start;
          gap: var(--gap-5xs);
        `}
      >
        <div
          className={css`
            flex: 1;
            border-radius: var(--br-base);
            background-color: var(--whatsapp-white-04);
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            gap: var(--gap-xl);
          `}
        >
          <input
            className={css`
              width: 55px;
              border: none;
              outline: none;
              background-color: transparent;
              height: 30px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
              box-sizing: border-box;
              font-family: var(--neue-medium-20);
              font-size: var(--neue-light-12-size);
              color: var(--color-gray-100);
            `}
            placeholder="Search"
            type="text"
          />
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/search.svg"
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              loading="lazy"
              alt=""
              src="/person.svg"
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              loading="lazy"
              alt=""
              src="/heart.svg"
            />
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
              padding: var(--padding-5xs);
            `}
          >
            <img
              className={css`
                height: 24px;
                width: 24px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              loading="lazy"
              alt=""
              src="/cart.svg"
            />
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
