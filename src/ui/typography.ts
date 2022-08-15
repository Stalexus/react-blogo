import { css } from "styled-components";
import { Media } from "./media";

const h1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  ${Media.SM} {
    font-size: 32px;
    line-height: 48px;
  }
  ${Media.LG} {
    font-size: 56px;
    line-height: 80px;
  }
`;

const h2 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  ${Media.SM} {
    font-size: 24px;
    line-height: 36px;
  }
  ${Media.LG} {
    font-size: 32px;
    line-height: 44px;
  }
`;

const h3 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

const s1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
`;

const b1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 20px;
`;

export const typography = { h1, h2, h3, s1, b1 };