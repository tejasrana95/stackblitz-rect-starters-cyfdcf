import React, { useState, useEffect } from 'react';
import './shippingAddress.css';

export default function ShippingAddress(props) {
  const {shippingData} = props;
  const [shippingObj, setShippingObj] = useState({});
  const [copiedData, setCopiedData] = useState({});


  function childFunction(t) {
    const tempshippingObj = shippingObj;
    tempshippingObj[t.target.name] = t.target.value;
    setShippingObj(tempshippingObj);
    props?.dataFromChild(shippingObj);
   
  }

  useEffect(() => {
    console.log('props.shippingData', props.shippingData);
    setCopiedData(props.shippingData)
  },[props, props.shippingData])

  
  
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
          name="fullname"
          placeholder="John M. Doe"
          onKeyUp={childFunction}
          className='text abc123 familyName'
          value={copiedData?.fullname}
        />
        <label for="email">
          <i className="fa fa-envelope"></i> Email
        </label>
        <input
          type="text"
          id="email"
          name="email"
          placeholder="john@example.com"
          className='text abc123 familyName'
          onKeyUp={childFunction}
          value={copiedData?.email}
        />
        <label for="adr">
          <i className="fa fa-address-card-o"></i> Address
        </label>
        <input
          type="text"
          id="adr"
          name="address"
          placeholder="542 W. 15th Street"
          onKeyUp={childFunction}
          value={copiedData?.address}
        />
        <label for="city">
          <i className="fa fa-institution"></i> City
        </label>
        <input type="text" id="city" name="city" placeholder="New York" onKeyUp={childFunction}  value={copiedData?.city} />

        <div className="row">
          <div className="col-50">
            <label for="state">State</label>
            <input type="text" id="state" name="state" placeholder="NY" onKeyUp={childFunction} value={copiedData?.state}/>
          </div>
          <div className="col-50">
            <label for="zip">Zip</label>
            <input type="text" id="zip" name="zip" placeholder="10001" onKeyUp={childFunction} value={copiedData?.zip} />
          </div>
        </div>
      </div>
    </div>
  );
}
