let carts = document.querySelectorAll(".add-cart");
let products = [
  {
    name: "venmo",
    tag: "venmo",
    price: 1000,
    incart: 0,
  },
  {
    name: "DumpCardAustralia",
    tag: "carded",
    price: 80,
    incart: 0,
  },
  {
    name: "Dump Card- United States",
    tag: "carded",
    price: 80,
    incart: 0,
  },
  {
    name: "Depost Checks - USA",
    tag: "deposit checks",
    price: 80,
    incart: 0,
  },
  {
    name: "Groupon",
    tag: "groupon",
    price: 80,
    incart: 0,
  },
  {
    name: "PayPal",
    tag: "paypal",
    price: 80,
    incart: 0,
  },
  {
    name: "PayPal",
    tag: "paypal",
    price: 80,
    incart: 0,
  },
  {
    name: "Fake ID",
    tag: "fakeid",
    price: 80,
    incart: 0,
  },
  {
    name: "Cash App",
    tag: "cashapp",
    price: 80,
    incart: 0,
  },
  {
    name: "Venmo - UK",
    tag: "venmo",
    price: 80,
    incart: 0,
  },
  {
    name: "Burners",
    tag: "Cell Phones",
    price: 80,
    incart: 0,
  },
  {
    name: "Burners",
    tag: "Sim Cards",
    price: 80,
    incart: 0,
  },
  {
    name: "Carded E-Gift Card",
    tag: "Australia ",
    price: 80,
    incart: 0,
  },
  {
    name: "Cardd E-Gift Card",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Carded Products",
    tag: "Worldwide",
    price: 80,
    incart: 0,
  },
  {
    name: "Cash App",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Cash App",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Counterfeit Items",
    tag: "EU - Euro",
    price: 80,
    incart: 0,
  },
  {
    name: "Counterfeit Items",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Counterfeit Items",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Credit/Debit Cards",
    tag: "Australia",
    price: 80,
    incart: 0,
  },
  {
    name: "Credit/Debit Cards",
    tag: "Canada",
    price: 80,
    incart: 0,
  },
  {
    name: "Credit/Debit Cards",
    tag: "Dubai",
    price: 80,
    incart: 0,
  },
  {
    name: "Credit/Debit Cards",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Credit/Debit Cards",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Databases",
    tag: "null",
    price: 80,
    incart: 0,
  },
  {
    name: "Deposit Checks",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Dumps",
    tag: "Australia",
    price: 80,
    incart: 0,
  },
  {
    name: "Dumps",
    tag: "Canada",
    price: 80,
    incart: 0,
  },
  {
    name: "Dumps",
    tag: "France",
    price: 80,
    incart: 0,
  },
  {
    name: "Dumps",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Dumps",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Fake ID",
    tag: "Null",
    price: 80,
    incart: 0,
  },
  {
    name: "Genesis Market",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Genesis Market",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Groupon ",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Paypal",
    tag: "Null",
    price: 80,
    incart: 0,
  },
  {
    name: "Venmo",
    tag: "United Kingdom",
    price: 80,
    incart: 0,
  },
  {
    name: "Venmo ",
    tag: "United States",
    price: 80,
    incart: 0,
  },
  {
    name: "Western Union",
    tag: "United States",
    price: 80,
    incart: 0,
  },
];
for (let i = 0; i < carts.length; i++) {
  carts[i].addEventListener("click", () => {
    cartNumbers(products[i]);
    totalCost(products[i]);
  });
}

function onLoadCartNumberst() {
  let prodctNumberst = localStorage.getItem("cartNumbers");

  if (prodctNumberst) {
    document.querySelector(".mobile-cart span").textContent = prodctNumberst;
  }
}

function cartNumberst(product) {
  let productNumberst = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumberst);

  if (productNumberst) {
    localStorage.setItem("cartNumbers", productNumberst + 1);
    document.querySelector(".mobile-cart span").textContent =
      productNumberst + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".mobile-cart span").textContent = 1;
  }

  setItems(product);
}

//

//
//
//
//

function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem("cartNumbers");

  if (productNumbers) {
    document.querySelector(".cart span").textContent = productNumbers;
  }
}

function cartNumbers(product) {
  let productNumbers = localStorage.getItem("cartNumbers");

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem("cartNumbers", productNumbers + 1);
    document.querySelector(".cart span").textContent = productNumbers + 1;
  } else {
    localStorage.setItem("cartNumbers", 1);
    document.querySelector(".cart span").textContent = 1;
  }

  setItems(product);
}
function setItems(product) {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);

  if (cartItems != null) {
    if (cartItems[product.tag] == undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product,
      };
    }
    cartItems[product.tag].incart += 1;
  } else {
    product.incart = 1;
    cartItems = {
      [product.tag]: product,
    };
  }

  localStorage.setItem("productsInCart", JSON.stringify(cartItems));
}
function totalCost(product) {
  // console.log("The product price is ", product.price);

  let cartCost = localStorage.getItem("totalCost");

  console.log("My cart cost is", cartCost);
  console.log(typeof cartCost);

  if (cartCost != null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem("totalCost", cartCost + product.price);
  } else {
    localStorage.setItem("totalCost", product.price);
  }
}

function displayCart() {
  let cartItems = localStorage.getItem("productsInCart");
  cartItems = JSON.parse(cartItems);
  let productContainer = document.querySelector(".products");
  let product_container = document.querySelector(".product__Container");

  let cartCost = localStorage.getItem("totalCost");

  console.log(cartItems);
  if (cartItems && productContainer) {
    productContainer.innerHTML = "";
    Object.values(cartItems).map((item) => {
      productContainer.innerHTML += `
      <section id="carts-containers" class="container my-5">
         <table width="100%">
            <thead>
                <tr>
                    <td>Remove</td>
                    <td>Image</td>
                    <td>Product</td>
                    <td>Price</td>
                    <td>Quantity</td>
                    <td>Total</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td><a href="#"> <i class="fas fa-trash-alt"></i></a></td>
                    <td><img src="./products/${item.tag}.jpeg" alt=""></td>
                    <td>
                        <h5 class="name-tag">${item.name}</h5>
                    </td>
                    <td>
                        <h5>$${item.price},00 </h5>
                    </td>
                    <td><input class="w-25 pl-1" value="${
                      item.incart
                    }" type="number"></td>
                    <td>
                        <h5>$${item.incart * item.price},00</h5>
                    </td>
                </tr>
            </tbody>
        </table> 


      
    </section>
 
      `;
    });

    product_container.innerHTML += `
    
    <div class="row">
   

    <div class="total col-lg-6 col-md-6 col-12">

        <div>
            <h5>CART TOTAL</h5>
            <div class="d-flex justify-content-between">
                <h6>Subtotal</h6>
                <p>$${cartCost}</p>
            </div>
            <div class="d-flex justify-content-between">
                <h6>Shipping</h6>
                <p>$0.00</p>
            </div>
            <hr class="second-hr">


            <div class="d-flex justify-content-between">
                <h6>Total</h6>
                <p>$${cartCost}</p>
            </div>

            <button class="ml-auto"> <a class="ads" href="checkout.html">PROCEED TO CHECKOUT</a> </button>
        </div>
    </div>
</div>
    

   
   
    `;

    //   function removeDiv(btnState) {
    //     var ediv = document.querySelector("product");
    //   }
    // } else {
    //   productContainer.innerHTML += `

    //   `;
    // $(document).ready(function () {
    //   $("body").on("click", ".fa-trash-alt", function () {
    //     $(this).parents("table").remove();
    //     localStorage.clear("cart");
    //   });
    // });
  }
}

onLoadCartNumbers();
displayCart();
onLoadCartNumberst();
// $(document).ready(function () {
//   $("body").on("click", ".fa-trash-alt", function () {
//     // $(this).parents("table").remove();
//     // prodctNumberst = localStorage.clear();
//     let display = displayCart();
//     localStorage.setItem("cartNumbers", productNumbers - 1);
//     document.querySelector(".cart span").textContent = productNumbers + 1;
//   });
// });

// Remove elements on click function jquery

trash = document.querySelector("fa-trash-alt");

trash.addEventListener("click", function () {
  this.parent("table").removeDiv();
});
