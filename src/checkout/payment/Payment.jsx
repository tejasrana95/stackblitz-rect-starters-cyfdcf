import React, { useState } from 'react';
import ShippingAddress from '../../common/shippingAddress/shippingAddress'
import PaymentDetail from '../paymentDetail/PaymentDetail';
export default function Payment() {
  const [shippingData, setShippingData] = useState({});
  const [billingData, setBillingData] = useState({});
  function paymentFunctionEventFromChild(e) {
    setBillingData(e);
  }

function copyDataFromBilling(e){
  if(e.target.checked){
    setShippingData(billingData);
  }
  console.log('billingData',billingData);
}

  function shippingAddress(e) {
    setShippingData(e);
  }
  return (
    <>
     <ShippingAddress label="Billing Address" dataFromChild={paymentFunctionEventFromChild}/>
     <input type='checkbox' name='copyBillingtoShipping' onChange={copyDataFromBilling} /> Copy Data to Shipping
     <ShippingAddress label="Shipping Address" dataFromChild={shippingAddress} shippingData={shippingData}/>
      <PaymentDetail />
    </>
  );
}
