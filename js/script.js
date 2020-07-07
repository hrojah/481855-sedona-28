var search = document.querySelector(".search-hotel");
var searchForm = document.querySelector(".search-hotel-form");
var input = searchForm.querySelector(".hotel-input");

searchForm.classList.add("hide-form");

search.addEventListener("click", function (evt) {

    searchForm.classList.toggle("show-form");
})

searchForm.addEventListener("submit", function (evt) {

    if (!input.value) {
      evt.preventDefault();
      searchForm.classList.add("error-form");
    }
})
