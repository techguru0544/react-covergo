export const packageRate = {
  standard: 1,
  safe: 1.5,
  superSafe: 1.75,
};
export const countryRate = {
  HKD: 1,
  USD: 2,
  AUD: 3,
};
export const packageMap = {
  standard: "Standard",
  safe: "Safe",
  superSafe: "Super Safe",
};
export const calculatePremium = (age, country, packageValue) => {
  let premiumValue = 0;
  if (
    age > 0 &&
    ["HKD", "USD", "AUD"].includes(country) &&
    packageValue !== ""
  ) {
    premiumValue = 10 * age;
    switch (packageValue) {
      case "safe":
        premiumValue *= 1.5;
        break;
      case "superSafe":
        premiumValue *= 1.75;
        break;
      default:
        break;
    }
  }
  return premiumValue * (countryRate[country] || 1);
};
