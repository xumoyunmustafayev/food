import { useState } from "react";
import OrderLest from "./Components/OrderLest";
import Sitebar from "./Components/Sitebar";
import Home from "./Page/Home";

import { FaRegCreditCard } from "react-icons/fa6";
import { SlPaypal } from "react-icons/sl";
import { LuWallet } from "react-icons/lu";
import { FaCheckCircle } from "react-icons/fa";

const App = () => {
  const [sicil, setSicil] = useState([]);
  const [delivery, setDelivery] = useState(1);
  const [show, heddin] = useState(false);
  const [active, setActive] = useState(1);

  const handleValue = (event) => {
    const value = event.target.value;

    if (value === "togo") {
      setDelivery(2);
    } else if (value == "dinein") {
      setDelivery(1);
    } else if (value == "delivery") {
      setDelivery(3);
    }
  };

  return (
    <div>
      <div className="flex  bg-[#393C49] gap-6">
        <Sitebar />
        <Home
          setSicil={setSicil}
          sicil={sicil}
          setDelivery={setDelivery}
          handleValue={handleValue}
        />
        <OrderLest sicil={sicil} delivery={delivery} heddin={heddin} />
      </div>
      {show ? (
        <div className="">
          <div className="fixed top-0 left-0 right-0 bottom-0 bg-[rgba(0,_0,_0,_0.70)]  justify-end flex z-40 rounded-2xl">
            <div className="w-[530px] bg-[#1F1D2B] rounded-2xl px-8 pt-3">
              <div className="mb-6">
                <h1 className="text-white text-[35px] font-semibold">
                  Payment
                </h1>
                <p className=" opacity-55 text-white">
                  3 payment method available
                </p>
              </div>
              <div>
                <h1 className="text-white text-[24px] font-semibold">
                  Payment Method
                </h1>
                <div className="flex gap-4 mt-4  mb-4 cursor-pointer">
                  <div
                    className={
                      active == 1
                        ? " px-3 py-4 rounded-lg min-w-28 border-white border-4 "
                        : "border px-3 py-4 rounded-lg min-w-28  "
                    }
                    onClick={() => setActive(1)}
                  >
                    <div className="flex mb-2">
                      <FaRegCreditCard
                        className={
                          active == 1
                            ? "w-6 h-6 text-white block mx-auto"
                            : "w-6 h-6  text-[#ABBBC2] block mx-auto"
                        }
                      />
                      {active == 1 ? (
                        <FaCheckCircle className="text-[#EA7C69]" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <h1
                      className={active == 1 ? "text-white" : "text-[#ABBBC2]"}
                    >
                      Credit Card
                    </h1>
                  </div>
                  <div
                    className={
                      active == 2
                        ? " px-3 py-4 rounded-lg min-w-28 border-white border-4 cursor-pointer "
                        : "border px-3 py-4 rounded-lg min-w-28   cursor-pointer"
                    }
                    onClick={() => setActive(2)}
                  >
                    <div className="flex mb-2">
                      <SlPaypal
                        className={
                          active == 2
                            ? "w-6 h-6 text-white block mx-auto"
                            : "w-6 h-6  text-[#ABBBC2] block mx-auto"
                        }
                      />
                      {active == 2 ? (
                        <FaCheckCircle className="text-[#EA7C69]" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <h1
                      className={active == 2 ? "text-white" : "text-[#ABBBC2]"}
                    >
                      Credit Card
                    </h1>
                  </div>
                  <div
                    className={
                      active == 3
                        ? " px-3 py-4 rounded-lg min-w-28 border-white border-4 cursor-pointer "
                        : "border px-3 py-4 rounded-lg min-w-28   cursor-pointer"
                    }
                    onClick={() => setActive(3)}
                  >
                    <div className="flex mb-2">
                      <LuWallet
                        className={
                          active == 3
                            ? "w-6 h-6 text-white block mx-auto"
                            : "w-6 h-6  text-[#ABBBC2] block mx-auto"
                        }
                      />
                      {active == 3 ? (
                        <FaCheckCircle className="text-[#EA7C69]" />
                      ) : (
                        <></>
                      )}
                    </div>
                    <h1
                      className={active == 3 ? "text-white" : "text-[#ABBBC2]"}
                    >
                      Credit Card
                    </h1>
                  </div>
                </div>
              </div>
              <div>
                <form className=" w-full">
                  <label className="text-white font-medium mt-5">
                    Cardholder Name
                  </label>
                  <div className="w-full mt-2  mb-3">
                    <input
                      type="text "
                      placeholder="Levi Ackerman"
                      className=" w-full py-3 pl-3 bg-[#393C49] rounded-lg text-white"
                    />
                  </div>

                  <label className="text-white font-medium ">Card Number</label>
                  <div>
                    <input
                      className="w-full py-3 pl-3 bg-[#393C49] rounded-lg text-white"
                      type="text "
                      placeholder="2564 1421 0897 1244"
                    />
                  </div>
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">
                        Expiration Date
                      </p>
                      <input
                        type="data"
                        placeholder="02/2022"
                        className="w-[212px] py-3 pl-3 bg-[#393C49] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">CVV</p>
                      <input
                        type="text "
                        placeholder="...."
                        className="w-[212px] py-3 pl-3 bg-[#393C49] rounded-lg mb-3 text-white"
                      />
                    </div>
                  </div>
                  <hr />
                  <div className="flex justify-between">
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">
                        Order Type
                      </p>
                      <input
                        type="text "
                        placeholder="Dine In"
                        className="w-[212px] py-3 pl-3 bg-[#393C49] rounded-lg text-white"
                      />
                    </div>
                    <div>
                      <p className="text-white font-medium mt-5 mb-2">
                        Table no.
                      </p>
                      <input
                        type="text "
                        placeholder="140"
                        className="w-[212px] py-3 pl-3 bg-[#393C49] rounded-lg mb-3 text-white"
                      />
                    </div>
                  </div>
                </form>
                <div className="flex justify-between mt-5">
                  <button
                    className="w-[225px] py-3 border text-[#EA7C69] rounded-lg border-[#EA7C69]"
                    onClick={() => heddin(false)}
                  >
                    Cancel
                  </button>
                  <button className="w-[225px] py-3 border border-[#EA7C69] text-[white] rounded-lg bg-[#EA7C69]">
                    Confirm Payment
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default App;
