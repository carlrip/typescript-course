function init() {
  const button = document.querySelector("button")!;
  button.addEventListener("click", addButtonHandler);
}

function addButtonHandler(e: MouseEvent) {
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
