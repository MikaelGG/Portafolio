window.onscroll = function () {
  if (document.documentElement.scrollTop > 510) {
    document.querySelector(".go-top-container").classList.add("show");
  } else {
    document.querySelector(".go-top-container").classList.remove("show");
  }
};

document.querySelector(".go-top-container").addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const urlInput = document.getElementById("urlInput");
const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

function mostrarModal(img) {
  const imgUrl = img.dataset.url;
  const imgSrc = img.src;
  // const botonDesplazamiento = document.getElementById('botonDesplazamiento');

  modalContent.src = imgSrc;
  urlInput.value = imgUrl;
  modal.style.display = "block";
  // botonDesplazamiento.style.display = 'none';
}

function copyToClipboard() {
  const input = document.querySelector(".input-box");
  input.select();
  document.execCommand("copy");
  swal({
    title: "¡Copiado!",
    position: "center",
    showConfirmButton: false,
    icon: "success",
    timer: 1500,
  });
}
