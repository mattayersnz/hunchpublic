import React from 'react';
import { Elements } from '@stripe/react-stripe-js';
import { loadStripe } from '@stripe/stripe-js';


const stripePromise = loadStripe('pk_live_em2M5o4u19CPCrKGNcVvSj4S00eKswY8hY');


const Signup = () => {
    return (
      <div>
        <h1>Signup with Stripe</h1>
        <Elements stripe={stripePromise}>
          {/* Your Signup form with Stripe components should go here */}
        </Elements>
      </div>
    );
  };
  
  export default Signup;
  
