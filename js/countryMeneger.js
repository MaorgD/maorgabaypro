import Country from "./country.js";
let allCountries_ar = [];
const firstCountries = [
  "israel",
  "united states",
  "france",
  "united kingdom",
  "thailand",
];
export const createCountry = (_input) => {

  document.querySelector("#id_parent").innerHTML = "";

  let arr = allCountries_ar.filter((item) =>
    item.name.common.toLowerCase().includes(_input.toLowerCase())
  );
  if (arr.length > 0) {
    arr.forEach((item) => {
      let country = new Country("#id_parent", item, startPreviewCountries, getNameByCode, createCountryByCode);
      country.previewRender();
    });
  } else {
    document.querySelector(
      "#id_parent"
    ).innerHTML = `<h2>Country ${_input} is  not found </h2>`;
  }
  document.querySelector("#id_load").classList.add("d-none");
  if (arr[0] != null) { return arr[0].name.common }
};
export const createCountryByCode = (_input) => {
  document.querySelector("#id_parent").innerHTML = "";

  let arr = allCountries_ar.filter((item) =>
    item.cca3.toLowerCase().includes(_input.toLowerCase())
  );
  if (_input === "" || _input === " ") {
    alert("empty");
  } else if (arr.length > 0) {
    arr.forEach((item) => {
      let country = new Country("#id_parent", item, startPreviewCountries, getNameByCode, createCountryByCode);
      country.render();
    });
  } else {
    document.querySelector(
      "#id_parent"
    ).innerHTML = `<h2>The Country ${_input} is  not found </h2>`;
  }
  document.querySelector("#id_load").classList.add("d-none");
};
export const getCountries = (_data) => {
  allCountries_ar = _data;
  mySort();
};

// func bring full name
export const getNameByCode = async (code) => {
  let url = `https://restcountries.com/v3.1/alpha/${code}`;
  let resp = await fetch(url);
  let data = await resp.json();
  return data[0].name.common;
}
export const startPreviewCountries = () => {
  document.querySelector("#id_load").classList.add("d-none");
  let tmp = [];
  tmp = allCountries_ar.filter((item) =>
    firstCountries.includes(item.name.common.toLowerCase())
  );
  tmp.forEach((item) => {
    let country = new Country("#id_parent", item, startPreviewCountries, getNameByCode, createCountryByCode);
    country.previewRender();
  });
};

export const fillSelectBox = () => {
  let select = document.querySelector("#id_select_country");
  allCountries_ar.forEach((item) => {
    select.innerHTML += `
    <option value="${item.name.common}">${item.name.common}</option>`;
  });
};

const mySort = () => {
  allCountries_ar.sort(function (a, b) {
    let x = a.name.common.toLowerCase();
    let y = b.name.common.toLowerCase();
    if (x < y) {
      return -1;
    }
    if (x > y) {
      return 1;
    }
    return 0;
  });
};
