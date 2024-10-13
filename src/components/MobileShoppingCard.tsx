import { FunctionComponent, type CSSProperties } from "react";
import { css } from "@emotion/css";

export type MobileShoppingCardType = {
  className?: string;
  unsplashb4Xk6bzgQWU?: string;
  eXPLOREPATRIKOLOR?: string;
  classicRunwayDress?: string;

  /** Style props */
  propOverflowY?: CSSProperties["overflowY"];
};

const MobileShoppingCard: FunctionComponent<MobileShoppingCardType> = ({
  className = "",
  propOverflowY,
  unsplashb4Xk6bzgQWU,
  eXPLOREPATRIKOLOR,
  classicRunwayDress,
}) => {
  return (
    <div
      className={[
        css`
          height: 447px;
          background-color: var(--whatsapp-white-01);
          border: 1px solid var(--whatsapp-white-02);
          box-sizing: border-box;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: center;
          padding: var(--padding-5xs) var(--padding-6xs);
          gap: var(--gap-base);
          text-align: center;
          font-size: var(--font-size-sm);
          color: var(--whatsapp-white-11);
          font-family: var(--neue-medium-20);
          overflow-y: ${propOverflowY};
        `,
        className,
      ].join(" ")}
    >
      <img
        className={css`
          align-self: stretch;
          flex: 1;
          position: relative;
          max-width: 100%;
          overflow: hidden;
          max-height: 100%;
          object-fit: cover;
        `}
        alt=""
        src={unsplashb4Xk6bzgQWU}
      />
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-11xs);
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
          `}
        >
          <div
            className={css`
              width: 156px;
              position: relative;
              line-height: 17px;
              display: inline-block;
            `}
          >
            {eXPLOREPATRIKOLOR}
          </div>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            text-align: left;
            font-size: var(--neue-light-12-size);
          `}
        >
          <div
            className={css`
              flex: 1;
              position: relative;
              line-height: 120%;
              font-weight: 300;
            `}
          >
            {classicRunwayDress}
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: var(--gap-0);
          row-gap: 20px;
          font-size: var(--neue-medium-16-size);
        `}
      >
        <div
          className={css`
            width: 234px;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: flex-start;
          `}
        >
          <div
            className={css`
              width: 89px;
              position: relative;
              line-height: 120%;
              display: inline-block;
              min-width: 89px;
            `}
          >
            SHOP NOW
          </div>
        </div>
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: center;
            padding: var(--padding-11xs) 0px;
          `}
        >
          <div
            className={css`
              height: 12px;
              width: 12px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                height: 12px;
                width: 12px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/star.svg"
            />
          </div>
          <div
            className={css`
              height: 12px;
              width: 12px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                height: 12px;
                width: 12px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/star.svg"
            />
          </div>
          <div
            className={css`
              height: 12px;
              width: 12px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
            `}
          >
            <img
              className={css`
                height: 12px;
                width: 12px;
                position: relative;
                overflow: hidden;
                flex-shrink: 0;
              `}
              alt=""
              src="/star.svg"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: none;
          flex-direction: row;
          align-items: center;
          justify-content: space-between;
          gap: var(--gap-xl);
        `}
      >
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
              height: 40px;
              width: 40px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
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
              height: 40px;
              width: 40px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
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
              src="/cart.svg"
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
              height: 40px;
              width: 40px;
              border-radius: var(--br-base);
              display: flex;
              flex-direction: row;
              align-items: center;
              justify-content: center;
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
              src="/add.svg"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileShoppingCard;
