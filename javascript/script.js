const span_date = document.querySelector("#date");

setInterval(() => {
  span_date.textContent = moment().format("MMMM Do YYYY, h:mm:ss a");
}, 1000);

const userContainer = document.querySelector(".user-container");

userContainer.addEventListener("click", function () {
  this.classList.toggle("active");

  if (this.classList.contains("active")) {
    return;
  } else {
    document.location.href = "portfolio.html";
  }
});
