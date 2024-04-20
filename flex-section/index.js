function updateSize() {
  console.log(window.innerWidth);
}

updateSize();
window.addEventListener("resize", updateSize);
