import React from 'react';
export default function PaymentDetail(props) {

  return (
    <>
      <div className="col-50">
        <h3>Payment</h3>
        <label for="fname">Accepted Cards</label>
        <div className="icon-container">
          <i className="fa fa-cc-visa"></i>
          <i className="fa fa-cc-amex"></i>
          <i className="fa fa-cc-mastercard"></i>
          <i className="fa fa-cc-discover"></i>
        </div>
        <label for="cname">Name on Card</label>
        <input
          type="text"
          id="cname"
          name="cardname"
          placeholder="John More Doe"
        />
        <label for="ccnum">Credit card number</label>
        <input
          type="text"
          id="ccnum"
          name="cardnumber"
          placeholder="1111-2222-3333-4444"
        />
        <label for="expmonth">Exp Month</label>
        <input
          type="text"
          id="expmonth"
          name="expmonth"
          placeholder="September"
        />
        <div className="row">
          <div className="col-50">
            <label for="expyear">Exp Year</label>
            <input type="text" id="expyear" name="expyear" placeholder="2018" />
          </div>
          <div className="col-50">
            <label for="cvv">CVV</label>
            <input type="text" id="cvv" name="cvv" placeholder="352" />
          </div>
        </div>
      </div>
    </>
  );
}
