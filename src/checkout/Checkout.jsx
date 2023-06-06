import React from 'react';
import './checkout.css';
import Payment from './payment/Payment';
export default function Checkout() {
  return (
    <div className="row">
      <div className="col-75">
        <div className="container">
          <form action="/action_page.php">
            <Payment />
          </form>
        </div>
      </div>
      <div className="col-25">
        <div className="container">
          <h4>
            Cart{' '}
            <span className="price">
              <i className="fa fa-shopping-cart"></i> <b>4</b>
            </span>
          </h4>
          <p>
            <a href="#">Product 1</a> <span className="price">$15</span>
          </p>
          <p>
            <a href="#">Product 2</a> <span className="price">$5</span>
          </p>
          <p>
            <a href="#">Product 3</a> <span className="price">$8</span>
          </p>
          <p>
            <a href="#">Product 4</a> <span className="price">$2</span>
          </p>
          <hr />
          <p>
            Total{' '}
            <span className="price">
              <b>$30</b>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
