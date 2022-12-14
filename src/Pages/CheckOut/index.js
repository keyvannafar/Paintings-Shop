

import { useState } from "react";
import "./CheckOut.css"
import ProductCartItem from "./ProductCartItem";
import { useDispatch } from "react-redux";
function CheckOut(){
  
  const [productsCart, setProductsCart]=useState(JSON.parse(localStorage.getItem("cart")))
  
  
  const removeItem = (id) => {
 
    if (localStorage.getItem("cart")) {
      let checkOut = JSON.parse(localStorage.getItem("cart"));
      const newCheckOut= checkOut.filter(item => item.id !== id)
    
      localStorage.setItem("cart", JSON.stringify(newCheckOut));
      setProductsCart(newCheckOut)
    }
  };
  
    return productsCart.length ? (
      <section class="h-100 gradient-custom">
        <div class="container py-5">
          <div class="row d-flex justify-content-center my-4">
            <div class="col-md-8">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Cart - 1 items</h5>
                </div>
                <div>
                  {productsCart.length ? (
                    productsCart.map((item) => (
                      <ProductCartItem
                        removeItem={removeItem}
                        key={item.id}
                        {...item}
                      />
                    ))
                  ) : (
                    <div class="card-body">
                      <div class="row">The shopping cart is empty</div>

                      <hr class="my-4" />
                    </div>
                  )}
                </div>
              </div>
              <div class="card mb-4">
                <div class="card-body">
                  <p>
                    <strong>Expected shipping delivery</strong>
                  </p>
                  <p class="mb-0">12.10.2020 - 14.10.2020</p>
                </div>
              </div>
              <div class="card mb-4 mb-lg-0">
                <div class="card-body">
                  <p>
                    <strong>We accept</strong>
                  </p>
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/visa.svg"
                    alt="Visa"
                  />
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/amex.svg"
                    alt="American Express"
                  />
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce-gateway-stripe/assets/images/mastercard.svg"
                    alt="Mastercard"
                  />
                  <img
                    class="me-2"
                    width="45px"
                    src="https://mdbcdn.b-cdn.net/wp-content/plugins/woocommerce/includes/gateways/paypal/assets/images/paypal.webp"
                    alt="PayPal acceptance mark"
                  />
                </div>
              </div>
            </div>
            <div class="col-md-4">
              <div class="card mb-4">
                <div class="card-header py-3">
                  <h5 class="mb-0">Summary</h5>
                </div>
                <div class="card-body">
                  <ul class="list-group list-group-flush">
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 pb-0">
                      Products
                      <span>$53.98</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center px-0">
                      Shipping
                      <span>Gratis</span>
                    </li>
                    <li class="list-group-item d-flex justify-content-between align-items-center border-0 px-0 mb-3">
                      <div>
                        <strong>Total amount</strong>
                        <strong>
                          <p class="mb-0">(including VAT)</p>
                        </strong>
                      </div>
                      <span>
                        <strong>$53.98</strong>
                      </span>
                    </li>
                  </ul>

                  <button
                    type="button"
                    class="btn btn-primary btn-lg btn-block"
                  >
                    Go to checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    ) : (
      <div class="emptyCard">
        <h2>
          Your shopping cart is empty !!!
        </h2><br />
        <p>You can simply fill it with your choice</p>
      </div>
    );
}

export default CheckOut;