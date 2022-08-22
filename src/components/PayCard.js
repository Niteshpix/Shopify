import React from "react";

function PayCard() {
  return (
    <div class="card-container">
    <div class="card-title">
      <h2>Please enter your card details</h2>
    </div>
    <form class="card-form">
      <label for="card-number">Card Number</label>
      <input type="number" id="card-number" name="card-number" placeholder="1234 5678 9101 1112"/>
      <i class="fab fa-cc-visa"></i>
      <i class="fab fa-cc-mastercard"></i>
      <div id="exp-date">
        <label for="exp-date">Expiry Date</label>
        <input type="text" id="exp-month" name="exp-month" placeholder="MM"/>
        <input type="text" id="exp-year" name="exp-year" placeholder="YY"/>
      </div>
      <div id="card-cvv-con">
        <label for="card-cvv">CVV</label>
        <input type="text" id="card-cvv" name="card-cvv" placeholder="XXX" />
        <i class="fas fa-info-circle"></i>
      </div>
    </form>
    </div>
  );
}

export default PayCard;
