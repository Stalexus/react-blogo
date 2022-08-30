export enum Media {
  SM = "@media (max-width: 420px)",
  MD = "@media (max-width: 768px)",
  LG = "@media (max-width: 1024px)",
  XL = "@media (max-width: 1280px)",
}

interface IBreakpoints {
  SM: number;
  MD: number;
  LG: number;
  XL: number;
}

export const Breakpoints: IBreakpoints = {
  SM: 420,
  MD: 768,
  LG: 1024,
  XL: 1280,
}