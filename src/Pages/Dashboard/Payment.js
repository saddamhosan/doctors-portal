import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import React from 'react';
import { useQuery } from 'react-query';
import { useParams } from 'react-router-dom';
import Loading from '../Shared/Loading';
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  "pk_test_51L1ZiVFCX1LCBdfon87BleiZiBVWvz9mAoD9UM3gvs0cGNPgxJVjvtI9fWuFI2LKsHkMqh8dm5l9YOYJWktOjH7t00LfpzT6U6"
);

const Payment = () => {
    const {id}=useParams()
    const { data, isLoading } = useQuery(["payment",id], () =>
      fetch(`https://infinite-oasis-14663.herokuapp.com/user/${id}`).then((res) => res.json())
    );
    if(isLoading){
        return <Loading/>
    }
    const { date, patentName, treatment,price,slot } = data;
    return (
      <div className=" w-3/5 mx-auto">
        <div class="card bg-base-100 shadow-xl">
          <div class="card-body">
            <p className="font-bold text-secondary">Hello,{patentName}</p>
            <h2 class="card-title">Please pay for {treatment}</h2>
            <p>
              Your Appointment <span className="text-red-800">{date}</span> at{" "}
              {slot}
            </p>
            <p>Please Pay : ${price}</p>
          </div>
        </div>
        <div class="card bg-base-100 shadow-xl my-12">
          <div class="card-body">
            <Elements stripe={stripePromise}>
              <CheckoutForm data={data} />
            </Elements>
          </div>
        </div>
      </div>
    );
};

export default Payment;