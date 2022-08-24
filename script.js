// PRODUCTS VARIABLE
var productsState = [
    {
      id: 1,
      name: 'Macbook Pro',
      price: 28000,
      rates: 5,
      image:
        'https://www.istore.co.za/media/catalog/product/m/a/macbook_pro_space_grey-1_2.png?format=jpeg',
    },
    {
      id: 2,
      name: 'Iphone 13 Pro',
      price: 23000,
      rates: 3,
      image:
        'https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80',
    },
    {
      id: 1,
      name: 'Iphone 6 C',
      price: 7000,
      rates: 2,
      image:
        'https://images.unsplash.com/photo-1565849904461-04a58ad377e0?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=736&q=80',
    },
    {
      id: 1,
      name: 'HP Laptop',
      price: 8000,
      rates: 1,
      image:
        'https://images.unsplash.com/photo-1589561084283-930aa7b1ce50?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1631&q=80',
    },
    {
      id: 1,
      name: 'Dell Laptop',
      price: 4000,
      rates: 1,
      image:
        'https://images.unsplash.com/photo-1588872657578-7efd1f1555ed?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'Macbook Pro',
      price: 15000,
      rates: 5,
      image:
        'https://images.unsplash.com/photo-1611186871348-b1ce696e52c9?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'Playstation 5',
      price: 20000,
      rates: 4,
      image:
        'https://images.unsplash.com/photo-1606144042614-b2417e99c4e3?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    },
    {
      id: 1,
      name: 'PS 4 Joystick',
      price: 1200,
      rates: 3,
      image:
        'https://images.unsplash.com/photo-1592840496694-26d035b52b48?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=825&q=80',
    },
  ]
  
  
  // LINK JS TO HTML ELEMENT
  const products = document.getElementById('products')
  
  
  // DISPLAY PRODUCTS IN HOME PAGE
  function homeDisplayProducts() {
      products.innerHTML = ""
    // loop into productsState and display
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
                  <button>+ ADD TO CART</button> 
            </div>
      
      `
      
    }
  }
  
  
  // CALL THE DISPLAY FUNCTION
  homeDisplayProducts()
  
  var sneakerProduct = document.getElementById('sneakerProducts');
var displayAmount = document.getElementById('displayAmount');



// VARIABLES
var productsArray = [
  {
    no: 1,
    name: 'New Balance 1500',
    rates: 4,
    money: 1800,
    image: '',

},

{
  no: 2,
  name: 'New Balance 997',
  rates: 3,
  money: 1300,
  image: 'https://i0.wp.com/flawlesscrowns.com/wp-content/uploads/2020/03/New-Balance-997-Multi-Color-Sneaker.jpg',

},

{
  no: 3,
  name: 'New Balance 57',
  rates: 4,
  money: 1500,
  image: 'https://www.freshnessmag.com/.image/t_share/MTM1OTgxMzkzNzc2MzU1OTcx/new-balance-m1400dj-distinct-usa-00.jpg',

},

{
  no: 1,
  name: 'New Balance 15',
  rates: 5,
  money: 2100,
  image: 'https://th.bing.com/th/id/R.7cf17352195a1de863bc7ca364723da0?rik=JoaH8hlwC%2buCrQ&riu=http%3a%2f%2fwww.jumpmankicks.com%2fshoegallery%2fnew_balance%2f572%2f2014%2fm572bg_elite_edition_blue_grey%2fnew_balance_m572bg_elite_edition_blue_grey-1.jpg&ehk=m9GlN28ay09WWrl7K5sj%2bwxsHGYmP2emYDOfvScrcNc%3d&risl=&pid=ImgRaw&r=0',

},

{
  no: 1,
  name: 'New Balance Blue',
  rates: 3,
  money: 2500,
  image: 'https://blog.klekt.com/wp-content/uploads/2020/05/New-Balance-Tokyo-Design-Studio-Blue-Marble-1-min.jpg',

},

{
  no: 1,
  name: 'New Balance Fire',
  rates: 4,
  money: 1100,
  image: 'https://th.bing.com/th/id/OIP.DSuzP9FSUAEKDwt84zECEQHaHa?w=177&h=180&c=7&r=0&o=5&dpr=1.3&pid=1.7',

},

{
  no: 1,
  name: 'New Balance VS',
  rates: 5,
  money: 1000,
  image: 'https://thesource.com/wp-content/uploads/2014/04/1300-11.jpg',

},

{
  no: 1,
  name: 'New Balance 44',
  rates: 4,
  money: 1200,
  image: 'https://www.freshnessmag.com/.image/t_share/MTM2NjMxODc5MTg4MzU4NzUx/new-balance-m990hl-13.jpg',

},

]

var cartCounter = 0;

function allAddcart() {
  
  counter = document.getElementById('counter').innerHTML = ++ cartCounter;
  console.log(cartCounter);
}



//PRODUCTS SHOW 
function productsOnscreen() {

    // display products on Home page
    sneakerProduct.innerHTML = ""

    for (let i = 0; i < productsArray.length; i++) {
        sneakerProduct.innerHTML += 
        
        `<div class="product">
        <div class="product__img">
          <img
            src=${productsArray[i].image}
            alt=""
          />
        </div>
        <div class="product__name">${productsArray[i].name}</div>
        <div class="product__rate">
        ${'<span>*</span>'.repeat(productsArray[i].rates)}
        </div>
        <div class="product__price">R <span>${productsArray[i].money}</span></div>
        <button onclick="allAddcart()">+ ADD TO CART</button>
      </div>`
        
    }

    
    
}
productsOnscreen();