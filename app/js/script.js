// Mobile Menu toggle
const btnHamburger = document.querySelector("#btnHamburger");
// const btnHamburgerImg = document.querySelector('#btnHamburgerImg');
const body = document.querySelector("body");
const header = document.querySelector(".header");
const overlay = document.querySelector(".overlay");
const fadeElems = document.querySelectorAll(".has-fade");

btnHamburger.addEventListener("click", function () {
  if (header.classList.contains("open")) {
    // Close Hamburger Menu
    body.classList.remove("noscroll");
    header.classList.remove("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-in");
      element.classList.add("fade-out");
    });
  } else {
    // Open Hamburger Menu
    body.classList.add("noscroll");
    header.classList.add("open");
    fadeElems.forEach(function (element) {
      element.classList.remove("fade-out");
      element.classList.add("fade-in");
    });
  }
});

// Switch Toggle
const $switch = document.querySelector("#switch");
// text opacity-toggle
const opacityToggleItems = document.querySelectorAll(".opacity-toggle");
// Subscription amount and interval text
const subAmountList = document.querySelectorAll(".sub-amount");
const subIntList = document.querySelectorAll(".sub-int");
// regex pattern for isolating numbers in currency value string
const pattern = /[^0-9.-]+/g;

$switch.addEventListener("click", () => {
  if ($switch.classList.contains("active")) {
    $switch.classList.remove("active");
    subIntList.forEach((item) => {
      item.innerHTML = "per month";
    });
    subAmountList.forEach((amount) => {
      let initialAmount = amount.innerHTML;
      let updatedAmount = parseFloat(initialAmount.replace(pattern, "")) / 10;
      let newStr = updatedAmount.toString();
      amount.innerHTML = `$${newStr}.00`;
    });
  } else {
    $switch.classList.add("active");
    subIntList.forEach((item) => {
      item.innerHTML = "per year";
    });
    subAmountList.forEach((amount) => {
      let initialAmount = amount.innerHTML;
      let updatedAmount = parseFloat(initialAmount.replace(pattern, "")) * 10;
      let newStr = updatedAmount.toString();
      amount.innerHTML = `$${newStr}.00`;
    });
  }
  opacityToggleItems.forEach((item) => {
    if (item.classList.contains("active")) {
      item.classList.remove("active");
    } else {
      item.classList.add("active");
    }
  });
});
