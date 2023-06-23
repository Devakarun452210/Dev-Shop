let navbar = document.getElementById("navBar");
let menubar = document.getElementById("menuBar");
let closebar = document.getElementById("close");

if (menubar) {
  menubar.addEventListener("click", () => {
    navbar.classList.add("active");
  });
}

if (closebar) {
  closebar.addEventListener("click", (e) => {
    e.preventDefault();
    navbar.classList.remove("active");
  });
}

let mainImg = document.getElementById("mainImage");
let smallImg = document.getElementsByClassName("smallImg");

smallImg[0].onclick = function () {
  mainImg.src = smallImg[0].src;
};
smallImg[1].onclick = function () {
  mainImg.src = smallImg[1].src;
};
smallImg[2].onclick = function () {
  mainImg.src = smallImg[2].src;
};
smallImg[3].onclick = function () {
  mainImg.src = smallImg[3].src;
};

function openPage() {
  window.location.href = "singleProduct.html";
}
