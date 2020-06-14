class Person {
  public name: string;

  public greet(prefix) {
    console.log(`${prefix} ${this.name}`);
  }

  public goodbyeFunction() {
    return function () {
      console.log(`Goodbye ${this.name}`);
    };
  }

  public calculatePrice(discountCode: string, price: number): number {
    if (discountCode === "FREE") {
      return 0;
    }
    return price;
  }
}

type APIRequestInfo = { path: string };
type APIRequestHandler<T> = (info: APIRequestInfo) => Promise<T>;
const getDiscountCode: APIRequestHandler<string> = async (
  info: APIRequestInfo & { token: string }
) => {
  const request = await fetch(info.path, {
    headers: {
      authorization: "bearer " + info.token,
    },
  });
  const body = await request.json();
  return body.discountCode;
};

async function create() {
  let person = new Person();
  const discountRequest = fetch("api/discount");
  const discountedPrice = person.calculatePrice.apply(undefined, ["FREE"]);
  let arguments;
  person = null;
}
