var search = document.querySelector(".search-hotel");
var searchForm = document.querySelector(".search-hotel-form");

searchForm.classList.add("hide-form");

search.addEventListener("click", function (evt) {

    searchForm.classList.toggle("show-form");
})
