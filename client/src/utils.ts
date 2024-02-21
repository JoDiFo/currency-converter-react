import { ICode } from "./Types";

export const formatToCurrency = (code: string, amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(amount);
};

export function getFullTitle(code: string, codes: ICode[]) {
  const found = codes.find((item) => item.includes(code));
  if (found) {
    return found[1];
  } else {
    return "";
  }
}
