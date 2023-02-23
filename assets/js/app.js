// Loadmore
var galeri = document.querySelectorAll(".galeri-card");
var btn = document.querySelector(".btnLoad");
var currentImg = 6;
btn.addEventListener("click", function () {
  for (var i = currentImg; i < currentImg + 6; i++) {
    if (galeri[i]) {
      galeri[i].style.display = "block";
    }
  }
  currentImg += 6;
  if (currentImg >= galeri.length) {
    event.target.style.display = "none";
  }
});

// SCROLL TO TOP
let mybutton = document.getElementById("myBtn");

window.onscroll = function () {
  scrollFunction();
};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
// End of scroll

// Order
var btnOrder = document.querySelectorAll(".btnOrder");
btnOrder.forEach((btn, index) => {
  btn.addEventListener("click", function () {
    window.open("https://www.fiverr.com/share/bqz9R1", "_blank");
  });
});
