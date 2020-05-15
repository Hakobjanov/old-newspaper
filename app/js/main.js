const container = document.querySelector(".container");
const prevBtn = document.querySelector(".prev-btn");
const nextBtn = document.querySelector(".next-btn");
const closeBtn = document.querySelector(".close-btn");
const illustrations = document.querySelectorAll(".illustration");
const images = [...document.querySelectorAll(".images img")];
const overlay = document.querySelector("#overlay");

prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
closeBtn.addEventListener("click", toggleGallery);
overlay.addEventListener("click", (e) => {
  if (e.target === overlay) {
    toggleGallery();
  }
});

illustrations.forEach((illustration) => {
  illustration.addEventListener("click", () => {
    show(illustration.dataset.index);
    toggleGallery();
  });
});

function showPrev() {
  const currentImageIndex = images.findIndex(
    (img) => !img.classList.contains("hidden")
  );
  const prevImageIndex =
    (currentImageIndex - 1 + images.length) % images.length;

  images[currentImageIndex].classList.add("hidden");
  images[prevImageIndex].classList.remove("hidden");
}

function showNext() {
  const currentImageIndex = images.findIndex(
    (img) => !img.classList.contains("hidden")
  );

  const nextImageIndex = (currentImageIndex + 1) % images.length;

  images[currentImageIndex].classList.add("hidden");
  images[nextImageIndex].classList.remove("hidden");
}

function toggleGallery() {
  overlay.classList.toggle("hidden");
  container.classList.toggle("blur");
}

function show(i) {
  images.forEach((img) => img.classList.add("hidden"));
  images[i].classList.remove("hidden");
}

// function rotate(shift = 1) {
//   const currentImageIndex = images.findIndex(
//     (img) => !img.classList.contains("hidden")
//   );

//   const nextImageIndex =
//     (currentImageIndex + shift + images.length) % images.length;

//   images[currentImageIndex].classList.add("hidden");
//   images[nextImageIndex].classList.remove("hidden");
// }
