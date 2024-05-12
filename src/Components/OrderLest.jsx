import React, { useState } from "react";
import { productList } from "../db/Data";
import { AiOutlineDelete } from "react-icons/ai";

const OrderList = ({ sicil, delivery, heddin }) => {
  const [count, setCount] = useState(0);
  const [deletedItems, setDeletedItems] = useState([]);

  const itemCounts = {};
  let subtotal = 0;
  sicil.forEach((id) => {
    itemCounts[id] = (itemCounts[id] || 0) + 1;
    const item = productList.find((product) => product.id === id);
    subtotal += item.price * itemCounts[id];
  });

  const handleDelete = (id) => {
    setDeletedItems([...deletedItems, id]);
  };
  console.log(deletedItems);

  return (
    <div className="pr-0">
      <div className="w-[518px] p-6 bg-[#1F1D2B] rounded-xl fixed">
        <div>
          <div>
            <h1 className="font-bold text-white text-[20px]">Orders #34562</h1>
          </div>
          <div className="my-6 flex gap-2">
            <button
              className={
                delivery == 1
                  ? "px-3 py-2 border text-white rounded-lg border-[#EA7C69] bg-[#EA7C69]"
                  : "px-3 py-2 border text-[#EA7C69] rounded-lg border-[#393C49]"
              }
            >
              Dine In
            </button>
            <button
              className={
                delivery == 2
                  ? "px-3 py-2 border text-white rounded-lg border-[#EA7C69] bg-[#EA7C69]"
                  : "px-3 py-2 border text-[#EA7C69] rounded-lg border-[#393C49]"
              }
            >
              To Go
            </button>
            <button
              className={
                delivery == 3
                  ? "px-3 py-2 border text-white rounded-lg border-[#EA7C69] bg-[#EA7C69]"
                  : "px-3 py-2 border text-[#EA7C69] rounded-lg border-[#393C49]"
              }
            >
              Delivery
            </button>
          </div>
          <div className="flex justify-between mb-6">
            <p className="font-bold text-white">Item</p>
            <div className="flex gap-10">
              <p className="font-bold text-white">Qty </p>
              <p className="font-bold text-white">Price </p>
            </div>
          </div>
          <hr className="opacity-50" />
        </div>
        <div className="h-[400px] overflow-y-scroll">
          {productList.map((item) => {
            if (sicil.includes(item.id) && !deletedItems.includes(item.id)) {
              return (
                <div key={item.id} className="mt-4">
                  <div className="flex justify-between items-center mb-4">
                    <div className="flex gap-3 items-center">
                      <img
                        src={item.img}
                        alt="img"
                        className="w-10 h-10 rounded-full"
                      />
                      <p className="text-white font-medium">
                        Spicy seasoned sea... <br />{" "}
                        <span className="opacity-60">$ {item.price}</span>
                      </p>
                    </div>
                    <div className="flex gap-5 items-center font-bold text-white">
                      <p className="px-5 py-[14px] bg-[#393C49] rounded-xl">
                        {itemCounts[item.id] || 1}
                      </p>
                      <p> $ {item.price * (itemCounts[item.id] || 1)}</p>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <div className="w-[375px] bg-[#393C49] rounded-md flex items-center justify-center p-4">
                      <input
                        className="w-full bg-[#393C49] outline-none text-white"
                        type="text"
                        placeholder="Please, just a little bit spicy only."
                      />
                    </div>
                    <div
                      className="p-[14px] border border-[#FF7CA3] rounded-xl flex items-center justify-center cursor-pointer"
                      onClick={() => handleDelete(item.id)}
                    >
                      <button>
                        <AiOutlineDelete className="w-5 h-5 text-[#FF7CA3]" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            }
            return null;
          })}
        </div>
        <div className="mt-2">
          <div className="mb-4 flex justify-between">
            <p className="text-[#ABBBC2]">Discount</p>
            <p className="text-white">$0</p>
          </div>
          <div className="mb-4 flex justify-between">
            <p className="text-[#ABBBC2]">Sub total</p>
            <p className="text-white">$ {subtotal.toFixed(2)}</p>
          </div>
          <button
            className="w-full bg-[#EA7C69] text-white py-2 rounded-lg"
            onClick={() => heddin(true)}
          >
            Continue to Payment
          </button>
        </div>
      </div>
    </div>
  );
};

export default OrderList;
