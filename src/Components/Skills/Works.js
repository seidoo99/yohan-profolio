import React from "react";
import shoppinCart from "../Images/shoppinCart.png";
import tripApp from "../Images/tripapp_1.png";

import "./Works.css";

function Works() {
  return (

<div class="card-group">
  <div class="card">
  <img src={shoppinCart} className="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">Digital ShoppingCart</h5>
      <p class="card-text">  Allows users to view available products so that they have quick
            access to all products and related information about the prduct.
            User can add product to cart, add/ substract quantity, contact the
            company/seller.</p>
            <a href="https://github.com/seidoo99/E-commerce-App" target="_blank">
            Github repo
          </a>
          <br />
          <a href="https://ecommerce-app-rosy.vercel.app/" target="_blank">
            Live Demo
          </a>
    </div>
  </div>
  <div class="card">
  <img src={tripApp} className="card-img-top" alt="..." />    <div class="card-body">
      <h5 class="card-title">Trip App </h5>
      <p class="card-text">App used to manage places a user visits and easily access favorite places and associated weather using google map and weather api.
.</p>
<a href="https://github.com/tandangle/tripApp" target="_blank">
            Github repo
          </a>
          <br />
          <a href="https://tripapp-project.herokuapp.com" target="_blank">
            Live Demo
          </a>
    </div>
</div>
</div>


  );
}

export default Works;

