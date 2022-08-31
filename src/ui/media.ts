export enum Media {
  SM = "@media (max-width: 420px)",
  MD = "@media (max-width: 768px)",
  LG = "@media (max-width: 900px)",
  XL = "@media (max-width: 1024px)",
  XXL = "@media (max-width: 2048px)",
}

interface IBreakpoints {
  SM: number;
  MD: number;
  LG: number;
  XL: number;
  XXL: number
}

export const Breakpoints: IBreakpoints = {
  SM: 420,
  MD: 768,
  LG: 992,
  XL: 1024,
  XXL: 1280,
}