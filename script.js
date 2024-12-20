let data = fetch("https://dummyjson.com/products")
// console.log(data)
.then(response => response.json())
.then(data => {
    // console.log(data)
      const products = data.products;
    //   console.log(products)
    const cardList = document.getElementById("card-list")
    products.forEach(product => {
        const productElement = document.createElement("div")
        productElement.classList.add("product");
        productElement.innerHTML=`
        <img src="${product.images[0]}">
        <h3>${product.title}</h3>
        <p>${product.price}</p>
        <p>${product.description}</p>
        `;
        cardList.appendChild(productElement);

    });
})
.catch(error =>{
    console.log("error throughdata", error)
});