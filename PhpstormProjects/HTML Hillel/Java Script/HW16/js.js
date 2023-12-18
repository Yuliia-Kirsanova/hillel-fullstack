const config = {
    giphy: {
        api_key: 'Fop2FeIroGww7Y9dlKSs7m4yRZwt1aNn',
        url: 'https://api.giphy.com/v1/gifs'
    }
}

function fetchTrending() {
    document.getElementById('box-gallery').innerHTML = '';
    fetch(`${config.giphy.url}/trending?api_key=${config.giphy.api_key}`)
        .then((response) => response.json())
        .then((list) => {
            list.data.forEach((item) => {
                createHtmlGalleryItem(item);
            })
        })
}

function createHtmlGalleryItem(item) {
    let div = document.createElement('div');
    div.id = `gallery-item-${item.id}`;
    div.classList.add('col-auto', 'my-2', 'img-thumbnail');
    div.innerHTML = `<img src="${item.images.fixed_height.url}" alt="${item.title}">`;
    document.getElementById('box-gallery').append(div);
}

fetchTrending()

function itemRedirect(){
    fetch(`${config.giphy.url}/trending?api_key=${config.giphy.api_key}`)
        .then((response) => response.json())
        .then((list) => {
            list.data.forEach((itemClick) => {
                document.getElementById('box-gallery').addEventListener('click', function () {
                    const imageUrls = itemClick.url;
                    window.open(imageUrls, '_blank');
                });
            })
        })
}

itemRedirect()

function fetchSearch(query) {
    document.getElementById('box-gallery').innerHTML = '';
    fetch(`${config.giphy.url}/search?q=query=${encodeURIComponent(query)}&api_key=${config.giphy.api_key}`)
        .then((response) => response.json())
        .then((list) => {
            list.data.forEach((item) => {
                createHtmlGalleryItem(item);
            })
        })
}

document.getElementById('search').addEventListener('blur', function (event) {
    const query = event.target.value;
    fetchSearch(query);
})
document.getElementById('search').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        const query = event.target.value;
        fetchSearch(query);
    }
})
