export default function calculatePrices() {
  let prices = [];
  for (let i = 10; i <= 200; i += 10) {
    prices.push(i);
  }
  return prices;
}
