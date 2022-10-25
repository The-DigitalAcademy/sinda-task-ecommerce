// PRODUCTS VARIABLE
var productsState = [
  {
    id: 1,
    name: 'NIKE CR7',
    price: 1500,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRU7gmCwo0h5F1zFHnfcACd9lwKK1n5rXAdrA&usqp=CAU',
  },
  {
    id: 2,
    name: 'NIKE',
    price: 1000,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcShOlv27_eRU5aJKtKJz4V1gYH9YrSFWj3Xqw&usqp=CAU',
  },
  {
    id: 1,
    name: 'NIKE',
    price: 1200,
    image:
      'https://i.pinimg.com/236x/b1/89/ea/b189ea4734ff58cd0007dea9000b84f3--soccer-cleats-nike.jpg',
  },
  {
    id: 1,
    name: 'NIKE',
    price: 2000,
    image:
      'https://i.pinimg.com/736x/c4/b6/7c/c4b67cf2d52199f15065968c313d0db0--cristiano-ronaldo--mercurial-vapor.jpg',
  },
  {
    id: 1,
    name: 'NIKE',
    price: 1100,
    image:
      'https://ae01.alicdn.com/kf/H437be87e714a467cab5986192c81b70eZ.jpg',
  },
  {
    id: 1,
    name: 'ADIDAS',
    price: 1500,
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSrEZysklEk_wWgt8d3d6dxSeZKQyKVqxiFeAWg3l2RsW6SKZdd_xwOkr63vWhMjcLqRo0&usqp=CAU',
  },
  {
    id: 1,
    name: 'ADIDAS',
    price: 1000,
    image:
      'https://assets.adidas.com/images/w_1880,f_auto,q_auto/14b1b4bd2f494e00a6fdae0400f4482a_9366/GW2368_01_standard.jpg',
  },
  {
    id: 1,
    name: 'ADIDAS',
    price: 1200,
    image:
      'https://res.cloudinary.com/moresport/image/upload/a_0,c_fill,f_auto,q_auto:good,w_690/v1575961299/uploads/assets/1160645-FTWRWHITECOREBLACKSOLARRE-1-wjV.jpg',
  },
] 

var selectedPeople = []

// display//
const products = document.getElementById('products');
const DatadTotal = document.getElementById('DatadTotal');


// DISPLAY PRODUCTS //
function homeDisplayProducts() {
    products.innerHTML = ""

  // productsState and display
  for (let i = 0; i < productsState.length; i++) {
    products.innerHTML += `
    
    <div class="product">
        <div class="product__img">
            <img
              src=${productsState[i].image}
              alt=""
            />
        </div>
            <div class="product__name">${productsState[i].name}</div>
              <div class="product__rate">
                ${'<span>*</span>'.repeat(productsState[i].rates)}
              </div>
              <div class="product__price">R <span>${productsState[i].price}</span></div> 
                <button onclick="showcount(${i})">+ ADD TO CART</button> 
          </div>
    
    `
    
  }
}


function showcount(i) {
    selectedPeople.push(productsState[i])
    document.getElementById('cartNum').innerHTML = selectedPeople.length;

  calculator();
  saveToLocalStorage();
  getLocalStorage();
  homeDisplayProducts();
  picture();
}


function picture() {
  picturetCart.innerHTML = ""

 // productsState and display
 for (let i = 0; i < selectedPeople.length; i++) {
  picturetCart.innerHTML += `
  
  <div class="product">
      <div class="product__img">
          <img
            src=${selectedPeople[i].image}
            alt=""
          />
      </div>
          <div class="product__name">${selectedPeople[i].name}</div>
            <div class="product__rate">
              ${'<span>*</span>'.repeat(selectedPeople[i].rates)}
            </div>
            <div class="product__price">R <span>${selectedPeople[i].price}</span></div> 
              <button onclick="removed(${i})"> remove</button> 
        </div>
  
  `
      
}

}

function removed(i) {
  getLocalStorage()
  selectedPeople.splice(i,1)
  document.getElementById('cartNum').innerHTML = selectedPeople.length;

  calculator();
  saveToLocalStorage();
  getLocalStorage();
  homeDisplayProducts();
  picture();
}


// total calculator
function calculator() {
  let total = 0;

  for (let i = 0; i <selectedPeople.length; i++) {
      total += (selectedPeople)[i].price
    }

    DatadTotal.innerHTML = "R" +total

}

function saveToLocalStorage() {
  let data = JSON.stringify(productsState)
  localStorage.setItem('productsState', data)
}

function getLocalStorage() {
  let data = JSON.parse(localStorage.getItem('productsState'))
  productsState = data
}

homeDisplayProducts();
picture();