import React from 'react';
import './shippingAddress.css';

export default function ShippingAddress(props) {

function childFunction (t){
  props.eventFromChildComponent(t);
}

  return (
    <div className="row">
      <div className="col-50">
        <h3>{props.label}</h3>
        <label for="fname">
          <i className="fa fa-user"></i> Full Name
        </label>
        <input
          type="text"
          id="fname"
          name="firstname"
          placeholder="John M. Doe"
          onKeyUp={childFunction}
        />
        <label for="email">
          <i className="fa fa-envelope"></i> Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="john@example.com"
        />
        <label for="adr">
          <i className="fa fa-address-card-o"></i> Address
        </label>
        <input
          type="text"
          id="adr"
          name="address"
          placeholder="542 W. 15th Street"
        />
        <label for="city">
          <i className="fa fa-institution"></i> City
        </label>
        <input type="text" id="city" name="city" placeholder="New York" />

        <div className="row">
          <div className="col-50">
            <label for="state">State</label>
            <input type="text" id="state" name="state" placeholder="NY" />
          </div>
          <div className="col-50">
            <label for="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder="10001" />
          </div>
        </div>
      </div>
    </div>
  );
}
