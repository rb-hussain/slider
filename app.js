let slides = document.querySelector("#slides");
let imgslides = document.querySelectorAll(".slide");
let liItem = document.querySelectorAll(".thumbnail");
let previous = document.querySelector("#previous");
let ul = document.querySelector("ul");
let next = document.querySelector("#next");
let timeout = 4000;
let current = -1;

let slider = setTimeout(fadeNextSlide, timeout);

function fadeNextSlide() {
  for (let i = 0; i < imgslides.length; i++) {
    imgslides[i].style.opacity = 0;
    liItem[i].classList.remove("active");
  }

  if (current !== imgslides.length - 1) {
    current++;
  } else {
    current = 0;
  }
  imgslides[current].style.opacity = 1;
  liItem[current].classList.add("active");
  slider = setTimeout(fadeNextSlide, timeout);
}

next.addEventListener("click", function () {
  clearTimeout(slider);
  fadeNextSlide();
});

function fadePrevSlide() {
  for (let i = 0; i < imgslides.length; i++) {
    imgslides[i].style.opacity = 0;
    liItem[i].classList.remove("active");
  }
  if (current == 0) {
    current = imgslides.length - 1;
  } else {
    current--;
  }
  imgslides[current].style.opacity = 1;
  liItem[current].classList.add("active");
  slider = setTimeout(fadeNextSlide, timeout);
}

previous.addEventListener("click", function () {
  clearTimeout(slider);
  fadePrevSlide();
});

ul.addEventListener("click", function (event) {
  let liIndex = event.target.dataset.numb;
  for (let i = 0; i < imgslides.length; i++) {
    imgslides[i].style.opacity = 0;
    liItem[i].classList.remove("active");
  }
  clearTimeout(slider);
  current = liIndex;
  imgslides[liIndex].style.opacity = 1;
  liItem[liIndex].classList.add("active");
  slider = setTimeout(fadeNextSlide, timeout);
});