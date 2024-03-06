import { useState } from "react";
import paystack from "../../assets/paystack_symbol.svg.svg";
import closehandle from "../../assets/close-handle.svg";
import cardicon from "../../assets/cardicon.svg";
import bankicon from "../../assets/bankicon.svg";
import transfericon from "../../assets/transfericon.svg";
import ussdicon from "../../assets/ussdicon.svg";

export default function PaymentGateway() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);

  const minSwipeDistance = 50;

  const onTouchStart = (e) => {
    setTouchEnd(null); 
    setTouchStart(e.targetTouches[0].clientX);
  };

  const onTouchMove = (e) => setTouchEnd(e.targetTouches[0].clientX);

  const onTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > minSwipeDistance;
    const isRightSwipe = distance < -minSwipeDistance;

    if (isLeftSwipe) setActiveIndex((prev) => {
      const newIndex = prev === 3 ? 0 : prev + 1;
      console.log('New index after left swipe:', newIndex);
      return newIndex;
    });
    if (isRightSwipe) setActiveIndex((prev) => {
      const newIndex = prev === 0 ? 3 : prev - 1;
      console.log('New index after right swipe:', newIndex);
      return newIndex;
    });
  };

  const renderPaymentContent = () => {
    console.log('Rendering content for index:', activeIndex);
    switch (activeIndex) {
      case 0:
        return (
          <div className="p-4">
            <h3>Enter your Card details</h3>
            <div className="pt-8">
              <form action="">
                <div className="relative border rounded-md px-3 py-3 shadow-sm">
                  <label
                    htmlFor="cardNumber"
                    className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700"
                  >
                    Card Number
                  </label>
                  <input
                    id="cardNumber"
                    name="cardNumber"
                    type="text"
                    className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                    placeholder="0000 0000 0000 0000"
                  />
                </div>
                <div className="flex gap-7 pt-7">
                  <div>
                    <div className="relative border rounded-md px-3 py-3 shadow-sm">
                      <label
                        htmlFor="cardExpiry"
                        className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700"
                      >
                        Card Expiry
                      </label>
                      <input
                        id="cardExpiry"
                        name="cardExpiry"
                        type="text"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="MM/YY"
                      />
                    </div>
                  </div>
                  <div>
                    <div className="relative border rounded-md px-3 py-3 shadow-sm">
                      <label
                        htmlFor="cardCVV"
                        className="absolute -top-3 left-2 -mt-px inline-block px-1 bg-white text-sm font-medium text-gray-700"
                      >
                        CVV
                      </label>
                      <input
                        id="cardCVV"
                        name="cardCVV"
                        type="text"
                        className="block w-full border-0 p-0 text-gray-900 placeholder-gray-500 focus:ring-0 sm:text-sm"
                        placeholder="123"
                      />
                    </div>
                  </div>
                </div>
                <div className="pt-4 flex gap-2">
                  <input
                    type="checkbox"
                    name=""
                    id=""
                    className="rounded-md mt-1 h-5 w-5"
                  />
                  <p className="mt-0.5">Save Card</p>
                </div>
                <div className="p-4">
                  <button className="w-full bg-blue-500 text-white p-2 rounded-lg">
                    Pay NGN 5,000.00
                  </button>
                  <button className="w-full text-blue-500 p-2 rounded-lg mt-2">
                    Use a saved Card
                  </button>
                </div>
              </form>
            </div>
          </div>
        );
      case 1:
        return (
          <div className="p-4">
            <p>Bank Payment Form</p>
          </div>
        );
      case 2:
        return (
          <div className="p-4">
            <div className="bg-white p-6 rounded-lg shadow-md max-w-md mx-auto">
              <h2 className="text-lg font-semibold mb-4">
                Transfer NGN 5,000 to Paystack Checkout
              </h2>
              <div className="mb-4">
                <label
                  htmlFor="bankName"
                  className="block text-sm font-medium text-gray-700"
                >
                  Bank Name
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="bankName"
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="Guarantee Trust Bank"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="accountNumber"
                  className="block text-sm font-medium text-gray-700"
                >
                  Account Number
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="accountNumber"
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="2222222222"
                  />
                </div>
              </div>
              <div className="mb-4">
                <label
                  htmlFor="amount"
                  className="block text-sm font-medium text-gray-700"
                >
                  Amount
                </label>
                <div className="mt-1 relative rounded-md shadow-sm">
                  <input
                    type="text"
                    id="amount"
                    className="block w-full pl-3 pr-10 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"
                    placeholder="NGN 5,000"
                  />
                </div>
              </div>
            </div>
          </div>
        );
      case 3:
        return (
          <div className="p-4">
            <p>USSD Payment Form</p>
          </div>
        );
      default:
        return null;
    }
  };

  return (
    <div className="fixed inset-0 bg-gray-500 bg-opacity-75 flex justify-center items-center">
      <div className="bg-white rounded-lg overflow-hidden">
        <div className="flex justify-between  p-4 border-b">
          <div>
            <div className="flex gap-2">
              <img src={paystack} alt="Paystack" className="h-6" />
              <h1>Paystack</h1>
            </div>
            <div className="pt-2">
              <p className="">
                <span className="text-gray-500">One month Payment - </span>
                <span className="font-bold">
                  NGN
                  {/* {amount}.00 */}
                </span>
              </p>
            </div>
          </div>
          <div>
            <button
              onClick={() => {
                /* Close modal logic */
              }}
            >
              <img src={closehandle} alt="Close" className="h-6" />
            </button>
          </div>
        </div>
        <div>
          <h2 className="font-bold p-4">Pay with:</h2>
          <div className="flex justify-around items-center  border-b w-full">
            <div
              className={`h-10 w-1/6 ${
                activeIndex === 0 ? "bg-blue-600" : "text-gray-400"
              } flex gap-2 items-center`}
            >
              <img src={cardicon} alt="Card" className="h-6" />
              <p className={activeIndex === 0 ? "text-white" : "text-gray-400"}>
                Card
              </p>
            </div>
            <div
              className={`h-10 w-1/6 ${
                activeIndex === 1 ? "bg-blue-600" : "text-gray-400"
              } flex gap-2 items-center`}
            >
              <img src={bankicon} alt="Bank" className="h-6" />
              <p className={activeIndex === 1 ? "text-white" : "text-gray-400"}>
                Bank
              </p>
            </div>
            <div
              className={`h-10 ${
                activeIndex === 2 ? "bg-blue-600" : "text-gray-400"
              } flex gap-2 items-center`}
            >
              <img src={transfericon} alt="Transfer" className="h-6" />
              <p className={activeIndex === 2 ? "text-white" : "text-gray-400"}>
                Transfer
              </p>
            </div>
            <div
              className={`h-10 w-1/6 ${
                activeIndex === 3 ? "bg-blue-600" : "text-gray-400"
              } flex gap-2 items-center`}
            >
              <img src={ussdicon} alt="USSD" className="h-6" />
              <p className={activeIndex === 3 ? "text-white" : "text-gray-400"}>
                USSD
              </p>
            </div>
          </div>
        </div>
        <div
          className="flex overflow-hidden"
          onTouchStart={onTouchStart}
          onTouchMove={onTouchMove}
          onTouchEnd={onTouchEnd}
        >
          <div
            className="flex-shrink-0 w-full transition-transform duration-300"
            style={{ transform: `translateX(-${activeIndex * 100}%)` }}
          >
            {renderPaymentContent()}
          </div>
        </div>
      </div>
    </div>
  );
}
