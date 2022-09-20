const sharingBtns = document.querySelectorAll('.article__share-btn');
const sharingSection = document.querySelector('.article__sharing');

const toggleSharing = () => {
    sharingSection.classList.toggle('active')
}

sharingBtns.forEach(btn => btn.addEventListener('click', toggleSharing));