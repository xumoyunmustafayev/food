import { useState } from "react";
import { FaSearch } from "react-icons/fa";

const Navbar = ({ handleChange, selectedTab, setSearchValue }) => {
  const [value, setValue] = useState("");

  const HandleSearch = (e) => {
    setValue(e.target.value);
    setSearchValue(e.target.value);
  };

  return (
    <div>
      <div className="w-[830px] fixed bg-[#393C49] z-20 ">
        <div className="pt-4 flex justify-between items-center mb-7">
          <div>
            <h1 className="text-[30px] text-white font-semibold">
              Jaegar Resto
            </h1>
            <p className="text-white">Tuesday, 2 Feb 2021</p>
          </div>
          <div className="flex items-center bg-[#2D303E] gap-5 py-4 px-10 border rounded-xl border-slate-600 cursor-pointer">
            <FaSearch className="text-white" />
            <input
              onChange={HandleSearch}
              type="search"
              className="border text-white outline-none border-none bg-[#2D303E] w-60 cursor-pointer"
              placeholder="search for food, coffee and etc."
            />
          </div>
        </div>
        <div>
          <ul className="gap-10 flex">
            <li
              className={
                selectedTab === 1
                  ? "text-[#EA7C69] border-[#EA7C69] py-3 cursor-pointer border-b-4"
                  : "text-white py-3 cursor-pointer "
              }
              onClick={() => handleChange(1)}
            >
              Hot Dishes
            </li>
            <li
              className={
                selectedTab === 2
                  ? "text-[#EA7C69] border-[#EA7C69] py-3 cursor-pointer border-b-4"
                  : "text-white py-3 cursor-pointer "
              }
              onClick={() => handleChange(2)}
            >
              Cold Dishes
            </li>
            <li
              className={
                selectedTab === 3
                  ? "text-[#EA7C69] border-[#EA7C69] py-3 cursor-pointer border-b-4"
                  : "text-white py-3 cursor-pointer "
              }
              onClick={() => handleChange(3)}
            >
              Soup
            </li>
            <li
              className={
                selectedTab === 4
                  ? "text-[#EA7C69] border-[#EA7C69] py-3 cursor-pointer border-b-4"
                  : "text-white py-3 cursor-pointer "
              }
              onClick={() => handleChange(4)}
            >
              Grill
            </li>
            <li
              className={
                selectedTab === 5
                  ? "text-[#EA7C69] border-[#EA7C69] py-3 cursor-pointer border-b-4"
                  : "text-white py-3 cursor-pointer "
              }
              onClick={() => handleChange(5)}
            >
              Appetizer
            </li>
            <li
              className={
                selectedTab === 6
                  ? "text-[#EA7C69] border-[#EA7C69] py-3 cursor-pointer border-b-4"
                  : "text-white py-3 cursor-pointer "
              }
              onClick={() => handleChange(6)}
            >
              Dessert
            </li>
          </ul>
          <hr className="text opacity-45" />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
