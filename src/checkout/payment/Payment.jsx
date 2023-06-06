import React, { useState } from 'react';
import ShippingAddress from '../../common/shippingAddress/shippingAddress'
import PaymentDetail from '../paymentDetail/PaymentDetail';
export default function Payment() {
  const [shippingEvents, setShippingEvents] = useState();
  function paymentFunctionEventFromChild(e) {
    setShippingEvents(e);
  }
  return (
    <>
     <ShippingAddress label="Billing Address" eventFromChildComponent={paymentFunctionEventFromChild}/>
     {/* <ShippingAddress label="Shipping Address"/> */}
      <PaymentDetail shippingEvents={shippingEvents} />
    </>
  );
}
