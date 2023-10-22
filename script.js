document.querySelector(".yearly").addEventListener("click", function () {
  document.querySelector(".monthly_plan").style.display = "none";
  document.querySelector(".yearly_plan").style.display = "block";
});

document.querySelector(".monthly").addEventListener("click", function () {
  document.querySelector(".yearly_plan").style.display = "none";
  document.querySelector(".monthly_plan").style.display = "block";
});
