function reducePrice(code: string, price: number, age: number) {
  const newPrice = price;
  switch (code) {
    case "FIVE":
      price = price - price * 0.05;
    case "TEN":
      return price - price * 0.1;
  }
}
