import { css } from "styled-components";
import { Media } from "./media";

const f1 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  @media (${Media.SM}) {
    font-size: 32px;
    line-height: 48px;
  }
  @media (${Media.LG}) {
    font-size: 56px;
    line-height: 80px;
  }
`;

const f2 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 700;
  @media (${Media.SM}) {
    font-size: 24px;
    line-height: 36px;
  }
  @media (${Media.LG}) {
    font-size: 32px;
    line-height: 44px;
  }
`;

const f3 = css`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 18px;
  line-height: 28px;
`;

const f4 = css`
font-family: "Inter";
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 24px;
`;

const f5 = css`
font-family: "Inter";
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 20px;
`;

export const fonts = { f1, f2, f3, f4, f5 };