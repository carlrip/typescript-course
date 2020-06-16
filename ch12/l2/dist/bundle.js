"use strict";
function init() {
    const form = document.querySelector("form");
    form.addEventListener("submit", submitHandler);
}
function submitHandler(e) {
    e.preventDefault();
    const a = document.querySelector("input[name='a']");
    const b = document.querySelector("input[name='b']");
    const result = add(Number(a.value), Number(b.value));
    const resultElement = document.querySelector("p");
    if (resultElement) {
        resultElement.textContent = result.toString();
    }
}
function add(a, b) {
    return a + b;
}
init();
