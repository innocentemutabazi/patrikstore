import { injectGlobal } from "@emotion/css";

export default function createGlobalStyle() {
  injectGlobal`
    body {
      margin: 0; line-height: normal;
    }
:root {

/* fonts */
--garamond-bold-20: Garamond;
--display-medium-24: 'Playfair Display';
--neue-medium-20: 'Helvetica Neue';
--header-2: 'Work Sans';

/* font sizes */
--garamond-bold-20-size: 20px;
--neue-medium-16-size: 16px;
--display-medium-24-size: 24px;
--neue-light-12-size: 12px;
--neue-medium-32-size: 32px;
--font-size-lgi: 19px;
--font-size-7xl: 26px;
--font-size-sm: 14px;

/* Colors */
--color-white: #fff;
--whatsapp-white-01: #f6f6f6;
--whatsapp-white-02: #f0f0f0;
--accent-error: #ff0000;
--accent-link: #00a3ff;
--fuschia-100: #ef5da8;
--color-gray-100: #8c8c8c;
--whatsapp-white-11: #2a2a2a;
--primary-grey-wolf-10: #1b1919;
--whatsapp-black-11: #060606;
--stroke-green-deep: #000503;
--color-gray-200: rgba(6, 6, 6, 0.6);
--iris-100: #5d5fef;
--primary-arctic-white-03: #f3eee7;
--cyber-punk-gradient: #ff00c7;
--electric-lime: #ccff00;
--whatsapp-white-04: #e1e1e1;

/* Gaps */
--gap-xl: 20px;
--gap-5xs: 8px;
--gap-base: 16px;
--gap-45xl: 64px;
--gap-13xl: 32px;
--gap-9xs: 4px;
--gap-21xl-3: 40.3px;
--gap-5xl: 24px;
--gap-25xl: 44px;
--gap-69xl: 88px;
--gap-157xl: 176px;
--gap-2xl: 21px;
--gap-11xs: 2px;
--gap-0: 0px;

/* Paddings */
--padding-13xl: 32px;
--padding-7xs: 6px;
--padding-10xs-5: 2.5px;
--padding-9xs: 4px;
--padding-8xs: 5px;
--padding-6xs: 7px;
--padding-28xl: 47px;
--padding-12xs: 1px;
--padding-30xl: 49px;
--padding-45xl: 64px;
--padding-3xl: 22px;
--padding-mini: 15px;
--padding-5xs: 8px;
--padding-11xs: 2px;
--padding-lg: 18px;
--padding-sm: 14px;
--padding-base: 16px;
--padding-xl: 20px;

/* Border radiuses */
--br-45xl: 64px;
--br-9xs: 4px;
--br-base: 16px;

}
`;
}
