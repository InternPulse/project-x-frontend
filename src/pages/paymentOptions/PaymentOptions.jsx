// import React from "react";
import { useNavigate } from "react-router-dom";

const PaymentOptions = () => {
  const navigate = useNavigate();
  const handleClose = () => {
    navigate("/");
  };

  return (
    <div className="bg-gray-200 min-h-screen flex justify-center items-center">
      <div className="bg-white rounded-lg shadow-lg p-6 w-full md:w-[700px] h-screen md:h-auto relative">
        <button
          className="absolute top-0 right-0 m-6 px-3 py-1 text-neutral-500 rounded-full hover:bg-neutral-50 focus:outline-none"
          onClick={handleClose}
        >
          X
        </button>
        <h2 className="text-2xl font-bold">Payment options</h2>
        <p className="mb-8">Select your preferred payment option</p>
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-3">
            <input
              type="radio"
              id="payment_option1"
              name="payment_option"
              className="mr-2"
            />
            <label htmlFor="payment_option1" className="text-xl font-bold">
              Pay with paystack
            </label>
          </div>
          <p className="ml-8">
            Make your payment through paystack. Please use your Order ID as the
            payment reference. Your order will not be completed until the funds
            have cleared in our account.
          </p>
        </div>
        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-3">
            <input
              type="radio"
              id="payment_option2"
              name="payment_option"
              className="mr-2"
            />
            <label htmlFor="payment_option2" className="text-xl font-bold">
              Pay with flutterwave
            </label>
          </div>
          <p className="ml-8">
            Make your payment through flutterwave. Please use your Order ID as
            the payment reference. Your order will not be completed until the
            funds have cleared in our account.
          </p>
        </div>

        <div className="flex flex-col mb-4">
          <div className="flex items-center mb-3">
            <input
              type="radio"
              id="payment_option3"
              name="payment_option"
              className="mr-2"
            />
            <label htmlFor="payment_option3" className="text-xl font-bold">
              Direct bank transfer
            </label>
          </div>
          <p className="ml-8">
            Make your payment directly into our bank account. Please use your
            Order ID as the payment reference. Your order will not be completed
            until the funds have cleared in our account.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PaymentOptions;
