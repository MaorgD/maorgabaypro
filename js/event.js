import { createCountry, createCountryByCode, startPreviewCountries, } from "./countryMeneger.js";

export const declareEvents = () => {
    let id_form = document.querySelector("#id_form")
    let id_home = document.querySelector("#id_home")
    let select_box = document.querySelector("#id_select_country")
    let input_search = document.querySelector("#id_input")
    let israel_li = document.querySelector(".id_israel")
    let USA_li = document.querySelector("#id_USA_li")
    let France_li = document.querySelector("#id_France_li")
    let UK_li = document.querySelector("#id_UK_li")
    let thailand_li = document.querySelector("#id_thailand_li")
    let parent = document.querySelector("#id_parent")


    israel_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("isr");
    })
    USA_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("USA");
    })
    France_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("fra");
    })
    UK_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("gbr");
    })
    thailand_li.addEventListener("click", () => {
        parent.innerHTML = "";
        createCountryByCode("tha");
    })

    id_form.addEventListener("submit", e => {
        e.preventDefault()
        // if (input_search.value.length < 2 ){
        //     alert("min 2 chars")
        //     return
        // }
        createCountry(input_search.value);

    })

    id_home.addEventListener("click", () => {
        parent.innerHTML = "";
        startPreviewCountries();
    })
    select_box.addEventListener("change", () => {
        if (select_box.value != "0") {

            parent.innerHTML = "";
            createCountry(select_box.value);
            input_search.value = select_box.value;
        }
    })

}
