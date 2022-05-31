"use strict";

const input = document.querySelector(".input");
const btn = document.querySelector(".btn");
const info = document.querySelector(".text");
const flag = document.querySelector(".img");
const countryName = document.querySelector(".name");
const capital = document.querySelector(".capital");

btn.addEventListener("click", generateContent);
generateContent();

async function generateContent() {
  let searchResult = input.value;
  const res = await fetch(
    `https://restcountries.com/v3.1/name/${searchResult}?fullText=true`
  );
  const data = await res.json();
  console.log(data);
  flag.innerHTML = `<img src="${data[0].flags.png}">`;
  countryName.innerHTML = data[0].name.official;
  capital.innerHTML = data[0].capital;
  info.classList.remove("hidden");
  info.classList.add("info");
}
