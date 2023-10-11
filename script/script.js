async function Data(){
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    data.products.map(element => {
        console.log(element);
        let cart = document.getElementById("cart")
        let ele = ` <div class="col-lg-4 pt-5">
        <div class="card" style="width: 18rem;">
            <img src="${element.images[2]}" class="card-img-top" alt="...">
            <div class="card-body">
              <h5 class="card-title">${element.title}</h5>
              <p class="card-text">${element.description}</p>
              <a href="#" class="btn btn-primary">Go somewhere</a>
            </div>
          </div>
    </div>`
      cart.innerHTML += ele
    });
}
Data();
