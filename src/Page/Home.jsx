import { useState, useEffect } from "react";
import { useTransition, animated } from "react-spring";
import Navbar from "../Components/Navbar";
import { productList } from "../db/Data";

const Home = ({ setSicil, sicil, setDelivery, handleValue }) => {
  const [selectedTab, setSelectedTab] = useState(1);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [searchValue, setSearchValue] = useState("");

  useEffect(() => {
    const filtered = productList.filter((product) =>
      product.title.toLowerCase().includes(searchValue.toLowerCase())
    );
    setFilteredProducts(filtered);
  }, [searchValue]);

  const startIndex = (selectedTab - 1) * 9;
  const displayedProducts = filteredProducts.slice(startIndex, startIndex + 9);

  const transitions = useTransition(displayedProducts, {
    from: { opacity: 0, transform: "translate3d(0,-40px,0)" },
    enter: { opacity: 1, transform: "translate3d(0,0px,0)" },
    leave: { opacity: 0, transform: "translate3d(0,-40px,0)" },
  });

  const handleClick = (id) => {
    setSicil((prevSicil) => {
      if (!prevSicil.includes(id)) {
        return [...prevSicil, id];
      }
      return [...prevSicil, id];
    });
  };

  return (
    <div className="ml-32 pl-1 pr-8 bg-[#393C49] h-[1250px]">
      <Navbar
        handleChange={setSelectedTab}
        selectedTab={selectedTab}
        setSearchValue={setSearchValue}
      />
      <div className="mt-52 text-white w-[830px]">
        <div className="flex justify-between items-center">
          <h1>Choose Dishes</h1>
          <div className="bg-[#11b2d]">
            <div className="flex gap-3 p-4 items-center bg-[#211b2d] rounded-lg">
              <select
                onChange={handleValue}
                className="bg-[#211b2d] outline-none"
              >
                <option
                  value={"dinein"}
                  className="p-3 font-medium cursor-pointer bg-[#1a1a1a] text-white"
                >
                  Dine In
                </option>
                <option
                  value={"togo"}
                  className="p-3 font-medium cursor-pointer bg-[#1a1a1a] text-white"
                >
                  To Go
                </option>
                <option
                  value={"delivery"}
                  className="p-3 font-medium cursor-pointer bg-[#1a1a1a] text-white"
                >
                  Delivery
                </option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-10 mt-20">
        {transitions((props, item) => (
          <animated.div
            style={props}
            key={item.id}
            className="rounded-xl bg-[#1F1D2B] h-[230px] w-56 mb-10 hover:shadow-lg hover:shadow-blue-900 "
            onClick={() => handleClick(item.id)}
          >
            <div className="relative bottom-7 cursor-pointer ">
              <img
                src={item.img}
                alt="img"
                className="w-[132px] h-[132px] rounded-full text-center block mx-auto mb-2 hover:rotate-[360deg] transition-all  ease-in duration-300 hover:scale-125"
              />
              <h1 className="text-center text-white mb-2">{item.title}</h1>
              <p className="text-center text-white opacity-75 mb-2">
                $ {item.price}
              </p>
              <p className="text-center text-[#ABBBC2]">
                {item.qty} Bowls available
              </p>
            </div>
          </animated.div>
        ))}
      </div>
    </div>
  );
};

export default Home;
