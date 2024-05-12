import Logoo from "../../public/Logoo.svg";
import { GoHome } from "react-icons/go";
import { RiDiscountPercentFill } from "react-icons/ri";
import { AiFillPieChart } from "react-icons/ai";
import { BiMessageAltCheck } from "react-icons/bi";
import { IoNotificationsOutline } from "react-icons/io5";
import { IoSettingsOutline } from "react-icons/io5";
import { IoMdExit } from "react-icons/io";
import { useState } from "react";

const Sitebar = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="rounded-xl bg-[#1F1D2B] py-3 pl-3 fixed w-[110px]">
      <div className="py-3 pl-3 pr-6 mb-3 ">
        <img src={Logoo} alt="img" />
      </div>
      {count == 1 ? (
        <div className="bg-[#393C49] p-3 rounded-l-lg transition ease-in-out ">
          <div className="p-5 bg-[#EA7C69] rounded-xl">
            <GoHome className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div
          className=" p-3 rounded-l-lg transition ease-in-out"
          onClick={() => setCount(1)}
        >
          <div className="p-5  rounded-xl">
            <GoHome className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
      {count == 2 ? (
        <div className=" p-3 rounded-l-lg bg-[#393C49] transition ease-in-out">
          <div className="p-5  rounded-xl bg-[#EA7C69]">
            <RiDiscountPercentFill className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div className=" p-3 rounded-l-lg " onClick={() => setCount(2)}>
          <div className="p-5  rounded-xl">
            <RiDiscountPercentFill className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
      {count == 3 ? (
        <div className=" p-3 rounded-l-lg bg-[#393C49] transition ease-in-out">
          <div className="p-5  rounded-xl bg-[#EA7C69]">
            <AiFillPieChart className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div
          className=" p-3 rounded-l-lg transition ease-in-out"
          onClick={() => setCount(3)}
        >
          <div className="p-5  rounded-xl">
            <AiFillPieChart className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
      {count == 4 ? (
        <div className=" p-3 rounded-l-lg bg-[#393C49] transition ease-in-out">
          <div className="p-5  rounded-xl bg-[#EA7C69]">
            <BiMessageAltCheck className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div
          className=" p-3 rounded-l-lg transition ease-in-out"
          onClick={() => setCount(4)}
        >
          <div className="p-5  rounded-xl">
            <BiMessageAltCheck className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
      {count == 5 ? (
        <div className=" p-3 rounded-l-lg bg-[#393C49] transition ease-in-out">
          <div className="p-5  rounded-xl bg-[#EA7C69]">
            <IoNotificationsOutline className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div
          className=" p-3 rounded-l-lg transition ease-in-out"
          onClick={() => setCount(5)}
        >
          <div className="p-5  rounded-xl">
            <IoNotificationsOutline className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
      {count == 6 ? (
        <div className=" p-3 rounded-l-lg bg-[#393C49] transition ease-in-out">
          <div className="p-5  rounded-xl bg-[#EA7C69]">
            <IoSettingsOutline className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div
          className=" p-3 rounded-l-lg transition ease-in-out"
          onClick={() => setCount(6)}
        >
          <div className="p-5  rounded-xl">
            <IoSettingsOutline className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
      {count == 7 ? (
        <div className=" p-3 rounded-l-lg mt-3 bg-[#393C49] transition ease-in-out">
          <div className="p-5  rounded-xl bg-[#EA7C69]">
            <IoMdExit className="w-6 h-6 text-white" />
          </div>
        </div>
      ) : (
        <div
          className=" p-3 rounded-l-lg mt-3 transition ease-in-out"
          onClick={() => setCount(7)}
        >
          <div className="p-5  rounded-xl ">
            <IoMdExit className="w-6 h-6 text-red-600" />
          </div>
        </div>
      )}
    </div>
  );
};

export default Sitebar;
