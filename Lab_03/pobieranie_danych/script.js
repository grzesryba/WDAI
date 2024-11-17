let products
let filteredProducts = Array(30)

async function getData() {
    const url = "https://dummyjson.com/products"

    let response = await fetch(url)
    if (!response.ok) {
        alert("Brak danych do pobrania przez API")
    }

    const data = await response.json()

    products = data.products.slice(0, 30)

    // for (let i = 0; i < 30; i++) {
    //     filteredProducts[i] = products[i]
    // }

    printData(products);

}

function printData(p) {
    let body = document.querySelector("#table")
    body.innerHTML = ''

    p.forEach(product => {
        let row = document.createElement('div')
        row.className = "row"
        let img_url = product.images[0]
        let img_elem = document.createElement('img')
        img_elem.src = img_url
        let title = document.createElement('h1')
        title.textContent = product.title
        title.className = 'title'
        let description = document.createElement('p')
        description.textContent = product.description
        description.className = 'description'

        row.appendChild(title)
        row.appendChild(description)
        row.appendChild(img_elem)

        body.appendChild(row)
    })
}


function filterProducts(filter_value, sortValue) {

    filteredProducts = products.filter(product =>
        product.title.toLowerCase().includes(filter_value.toLowerCase()) ||
        product.description.toLowerCase().includes(filter_value.toLowerCase())
    );
    if (sortValue === "asc") {
        filteredProducts = filteredProducts.sort((a, b) => a.title.localeCompare(b.title))
    } else if (sortValue === "desc") {
        filteredProducts = filteredProducts.sort((a, b) => b.title.localeCompare(a.title))
    }
    printData(filteredProducts)
}

document.addEventListener('DOMContentLoaded', () => {
    getData()
    let element = document.querySelector("#filter-input");
    element.addEventListener("input", (e) => {
        filterProducts(e.target.value, document.getElementById("sort-select").value);
    });

    let element1 = document.querySelector('#sort-select');
    element1.addEventListener('change', (e) => {
        filterProducts(document.getElementById("filter-input").value, e.target.value);
    });
});


