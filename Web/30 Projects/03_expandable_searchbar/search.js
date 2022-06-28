const searchBtn = document.getElementById("Seacrh-btn");
const searchInput = document.querySelector(".search-input");

console.log(searchBtn, searchInput);

searchBtn.addEventListener("click", function () {
  searchInput.classList.toggle("active-search");
});

document.querySelector("main").addEventListener("click", () => {
  searchInput.classList.remove("active-search");
});
