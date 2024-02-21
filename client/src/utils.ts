export const formatToCurrency = (code: string, amount: number) => {
  return new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: code,
    maximumFractionDigits: 2,
  }).format(amount);
};
