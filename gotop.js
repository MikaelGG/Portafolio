window.onscroll = function(){
    if(document.documentElement.scrollTop > 510){
        document.querySelector('.go-top-container').classList.add('show');
    }else{
        document.querySelector('.go-top-container').classList.remove('show');
    }
}

document.querySelector('.go-top-container').addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
})

const modal = document.getElementById('modal');
const modalContent = document.getElementById('modal-content');
const urlInput = document.getElementById('urlInput');
const modalClose = document.getElementById('modal-close');
modalClose.addEventListener('click', function() { 
  modal.style.display = "none";
});

function mostrarModal(img) {
    const imgUrl = img.dataset.url;
    const imgSrc = img.src;
  
    modalContent.src = imgSrc;
    urlInput.value = imgUrl;
    modal.style.display = "block";
}

function copyToClipboard() {
    const input = document.querySelector('.input-box');
    input.select();
    document.execCommand('copy');
    alert('Texto copiado al portapapeles');
}

