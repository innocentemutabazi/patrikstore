import { FunctionComponent } from "react";
import { css } from "@emotion/css";
import MobileShoppingCard1 from "./MobileShoppingCard1";
import MobileShoppingCard from "./MobileShoppingCard";

export type ProductGridType = {
  className?: string;
};

const ProductGrid: FunctionComponent<ProductGridType> = ({
  className = "",
}) => {
  return (
    <div
      className={[
        css`
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-21xl-3);
          max-width: 100%;
          text-align: center;
          font-size: var(--neue-medium-16-size);
          color: var(--whatsapp-white-11);
          font-family: var(--neue-medium-20);
          @media screen and (max-width: 750px) {
            gap: var(--gap-xl);
          }
        `,
        className,
      ].join(" ")}
    >
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-5xl);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
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
              background-color: var(--whatsapp-black-11);
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
                padding: 0px var(--padding-sm);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 116px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-white-01);
                  text-align: center;
                  display: inline-block;
                  min-width: 116px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                New Arrivals
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right1.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 107px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 107px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Retro stock
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right2.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 108px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 108px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Best sellers
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right3.svg"
              />
            </div>
          </button>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            @media screen and (max-width: 1225px) {
              gap: var(--gap-157xl);
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-69xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-25xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: grid;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-12xs) 0px 0px;
              gap: var(--gap-2xl);
              grid-template-columns: repeat(4, minmax(214px, 1fr));
              @media screen and (max-width: 1050px) {
                justify-content: center;
                grid-template-columns: repeat(2, minmax(214px, 372px));
              }
              @media screen and (max-width: 450px) {
                grid-template-columns: minmax(214px, 1fr);
              }
            `}
          >
            <MobileShoppingCard1 unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png" />
            <MobileShoppingCard1
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-1@2x.png"
            />
            <MobileShoppingCard1
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-2@2x.png"
            />
            <MobileShoppingCard1
              propOverflowY="auto"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-3@2x.png"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          padding: 0px 0px var(--padding-sm);
          box-sizing: border-box;
          gap: var(--gap-5xl);
          max-width: 100%;
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
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
              background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-sm);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 116px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 116px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                New Arrivals
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right1.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-black-11);
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
                padding: 0px var(--padding-lg);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 107px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-white-01);
                  text-align: center;
                  display: inline-block;
                  min-width: 107px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Retro stock
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right2.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 108px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 108px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Best sellers
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right3.svg"
              />
            </div>
          </button>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            @media screen and (max-width: 1225px) {
              gap: var(--gap-157xl);
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-69xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-25xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: grid;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-12xs) 0px 0px;
              gap: var(--gap-2xl);
              grid-template-columns: repeat(4, minmax(214px, 1fr));
              @media screen and (max-width: 1050px) {
                justify-content: center;
                grid-template-columns: repeat(2, minmax(214px, 372px));
              }
              @media screen and (max-width: 450px) {
                grid-template-columns: minmax(214px, 1fr);
              }
            `}
          >
            <MobileShoppingCard1
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu@2x.png"
            />
            <MobileShoppingCard1
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-1@2x.png"
            />
            <MobileShoppingCard1
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-2@2x.png"
            />
            <MobileShoppingCard1
              propOverflowY="auto"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-3@2x.png"
            />
          </div>
        </div>
      </div>
      <div
        className={css`
          align-self: stretch;
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          justify-content: flex-start;
          gap: var(--gap-5xl);
          max-width: 100%;
          font-size: var(--font-size-sm);
        `}
      >
        <div
          className={css`
            display: flex;
            flex-direction: row;
            align-items: flex-start;
            justify-content: flex-start;
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
              background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-sm);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 116px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 116px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                New Arrivals
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right1.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-white-01);
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
                padding: 0px var(--padding-lg);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 107px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-black-11);
                  text-align: center;
                  display: inline-block;
                  min-width: 107px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Retro stock
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right2.svg"
              />
            </div>
          </button>
          <button
            className={css`
              cursor: pointer;
              border: 1px solid var(--cyber-punk-gradient);
              padding: var(--padding-7xs) var(--padding-6xs);
              background-color: var(--whatsapp-black-11);
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
                padding: 0px var(--padding-lg);
                gap: var(--gap-5xs);
              `}
            >
              <div
                className={css`
                  width: 108px;
                  position: relative;
                  font-size: var(--garamond-bold-20-size);
                  line-height: 120%;
                  font-family: var(--neue-medium-20);
                  color: var(--whatsapp-white-01);
                  text-align: center;
                  display: inline-block;
                  min-width: 108px;
                  @media screen and (max-width: 450px) {
                    font-size: var(--neue-medium-16-size);
                    line-height: 19px;
                  }
                `}
              >
                Best sellers
              </div>
              <img
                className={css`
                  height: 12px;
                  width: 12px;
                  position: relative;
                  overflow: hidden;
                  flex-shrink: 0;
                  display: none;
                `}
                alt=""
                src="/arrow-right3.svg"
              />
            </div>
          </button>
        </div>
        <div
          className={css`
            align-self: stretch;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: flex-start;
            @media screen and (max-width: 1225px) {
              gap: var(--gap-157xl);
            }
            @media screen and (max-width: 750px) {
              gap: var(--gap-69xl);
            }
            @media screen and (max-width: 450px) {
              gap: var(--gap-25xl);
            }
          `}
        >
          <div
            className={css`
              align-self: stretch;
              display: grid;
              flex-direction: row;
              align-items: center;
              justify-content: flex-start;
              padding: 0px var(--padding-12xs) 0px 0px;
              gap: var(--gap-2xl);
              grid-template-columns: repeat(4, minmax(214px, 1fr));
              @media screen and (max-width: 1050px) {
                justify-content: center;
                grid-template-columns: repeat(2, minmax(214px, 372px));
              }
              @media screen and (max-width: 450px) {
                grid-template-columns: minmax(214px, 1fr);
              }
            `}
          >
            <MobileShoppingCard
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-8@2x.png"
              eXPLOREPATRIKOLOR="EXPLORE PATRIKOLOR"
              classicRunwayDress="Classic runway dress"
            />
            <MobileShoppingCard
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-9@2x.png"
              eXPLOREPATRIKOLOR="TIMELESS FEEL"
              classicRunwayDress="Premium drape orange. Find your taste"
            />
            <MobileShoppingCard
              propOverflowY="unset"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-10@2x.png"
              eXPLOREPATRIKOLOR="WHATS YOUR FLAVOUR"
              classicRunwayDress="Classic office high heels"
            />
            <MobileShoppingCard
              propOverflowY="auto"
              unsplashb4Xk6bzgQWU="/unsplashb4xk6bzgqwu-11@2x.png"
              eXPLOREPATRIKOLOR="CHILDREN IN PATRIK"
              classicRunwayDress="Classic office high heels"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductGrid;
