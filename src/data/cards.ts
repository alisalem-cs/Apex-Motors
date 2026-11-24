export function getCardType(cardNumber: string): string {
  if (cardNumber.startsWith("4")) {
    return "Visa";
  }

  if (/^(5[1-5]|2[2-7])/.test(cardNumber)) {
    return "Mastercard";
  }

  if (/^3[47]/.test(cardNumber)) {
    return "American Express";
  }

  if (/^(6011|65)/.test(cardNumber)) {
    return "Discover";
  }

  return "";
}
