
const apiKey = "I4Rf3ZW27ACB7DOlwbOWnK3xNBVFRAD60hiVtMSdFEkxp1hCd9yH1tRg";
const apiUrl = "https://api.pexels.com/v1/search?query=mountains";

const loadImages = (query) => {
    fetch(apiUrl + query, {
        headers: { Authorization: apiKey }
    })
        .then((response) => {
            if (response.ok) {
                console.log('OK');
                return response.json();
            } else {
                // 400, 401, 500 etc.
                throw new Error('qualcosa è andato storto');
            }
        })

        .then(data => {
            displayImages(data.photos);
        })
        .catch(error => console.error("Errore nel caricamento delle immagini:", error));
};



const displayImages = (photos) => {
    const container = document.getElementById("image-container");
    container.innerHTML = '';
    photos.forEach(photo => {
        const imgElement = document.createElement('img');
        imgElement.src = photo.src.small;
        imgElement.alt = photo.alt;
        imgElement.classList.add('img-fluid', 'mb-4');
        container.appendChild(imgElement);
    });
};


loadImages("mountains");