var search = document.querySelector(".search-hotel");
var searchForm = document.querySelector(".search-hotel-form");
var arrival = searchForm.querySelector(".hotel-input-arrival");
var departure = searchForm.querySelector (".hotel-input-departure");
var plus = searchForm.querySelector(".hotel-input-plus");

searchForm.classList.add("hide-form");
arrival.removeAttribute("required");
departure.removeAttribute("required");
plus.removeAttribute("required");

search.addEventListener("click", function (evt) {

    searchForm.classList.toggle("show-form");
})

searchForm.addEventListener("submit", function (evt) {

    if (!arrival.value || !departure.value || !plus.value) {
      evt.preventDefault();
      searchForm.classList.remove("error-form");
      searchForm.offsetWidth = searchForm.offsetWidth;
      searchForm.classList.add("error-form");
    }
})
