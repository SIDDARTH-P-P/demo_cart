let scearch_element = document.getElementById("scearch_element")
function clicked(){
  async function Data(){
    let res = await fetch('https://dummyjson.com/products')
    let data = await res.json()
    console.log(data);
    let d = data.products.find(element => element.title == scearch_element.value)
    if(!d){
      cart.innerHTML="not fount"
    }
    else{
      let cart = document.getElementById("cart")
      let ele = ` <div class="col-lg-4 pt-5">
      <div class="card" style="width: 18rem;">
          <img src="${d.images[0]}" class="card-img-top" alt="...">
          <div class="card-body">
            <h5 class="card-title">${d.title}</h5>
            <p class="card-text">${d.description}</p>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>
        </div>
  </div>`
    cart.innerHTML = ele
    }
  }
Data();
}