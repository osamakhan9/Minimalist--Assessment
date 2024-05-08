const modal = document.getElementById("myModal");
const openModalButton = document.querySelector("#viewButton");
const openModalButton2 = document.querySelector("#viewButton2");
const openModalButton3 = document.querySelector("#viewButton3");
const closeModalButton = document.getElementById("closeModalButton");
const chooseModalButton = document.getElementById("chooseModalButton");

openModalButton.addEventListener("click", function () {
  modal.style.display = "block";
});
openModalButton2.addEventListener("click", function () {
  modal.style.display = "block";
});

openModalButton3.addEventListener("click", function () {
  modal.style.display = "block";
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

chooseModalButton.addEventListener("click", function () {
  alert("Item selected");
});
