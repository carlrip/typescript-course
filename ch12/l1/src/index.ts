function init() {
  const form = document.querySelector("form")!;
  form.addEventListener("submit", submitHandler);
}

function submitHandler(e: Event) {
  e.preventDefault();
  const a = document.querySelector("input[name='a']") as HTMLInputElement;
  const b = document.querySelector("input[name='b']") as HTMLInputElement;
  const result = add(Number(a.value), Number(b.value));
  const resultElement = document.querySelector("p");
  if (resultElement) {
    resultElement.textContent = result.toString();
  }
}

function add(a: number, b: number) {
  return a + b;
}

init();
