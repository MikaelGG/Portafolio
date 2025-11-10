// Removed scroll-to-top widget per design request.
// Add social toggle for the compact social menu on the left.
const socialToggle = document.getElementById('social-toggle');
const socialMenu = document.getElementById('social-menu');
if (socialToggle && socialMenu) {
  socialToggle.addEventListener('click', () => {
    socialMenu.classList.toggle('open');
    const expanded = socialMenu.classList.contains('open');
    socialMenu.setAttribute('aria-hidden', (!expanded).toString());
  });
}

const modal = document.getElementById("modal");
const modalContent = document.getElementById("modal-content");
const urlInput = document.getElementById("urlInput");
const modalClose = document.getElementById("modal-close");
modalClose.addEventListener("click", function () {
  modal.style.display = "none";
});

// Close modal when clicking outside the content
modal.addEventListener('click', function (e) {
  if (e.target === modal) {
    modal.style.display = 'none';
  }
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
