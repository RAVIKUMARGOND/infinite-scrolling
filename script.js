const gallery = document.getElementById('gallery');
let page = 1;
const limit = 10;
const apiUrl = 'https://jsonplaceholder.typicode.com/photos';

async function fetchPhotos(page, limit) {
    const response = await fetch(`${apiUrl}?_page=${page}&_limit=${limit}`);
    const photos = await response.json();
    return photos;
}

function createPhotoElement(photo) {
    const photoDiv = document.createElement('div');
    photoDiv.classList.add('photo');
    photoDiv.innerHTML = `
        <img src="${photo.thumbnailUrl}" alt="${photo.title}">
        <p>${photo.title}</p>
    `;
    return photoDiv;
}

async function loadPhotos() {
    const photos = await fetchPhotos(page, limit);
    photos.forEach(photo => {
        const photoElement = createPhotoElement(photo);
        gallery.appendChild(photoElement);
    });
    page++;
}

function handleScroll() {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 5) {
        loadPhotos();
    }
}

window.addEventListener('scroll', handleScroll);

// Initial load
loadPhotos();
