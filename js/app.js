import { getCountries, fillSelectBox ,startPreviewCountries } from "./countryMeneger.js";
import { declareEvents } from "./event.js";

const init = () => {
  doApi();
  declareEvents();
};
const doApi = async () => {
  let url = "https://restcountries.com/v3.1/all";
  let resp = await fetch(url);
  let data = await resp.json();
  data = data.filter(item => item.name.common != "Palestine")
  getCountries(data);
  startPreviewCountries();
  fillSelectBox();
};

init();
