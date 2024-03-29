import { useEffect, useState } from "react";
import OutsideClickHandler from "react-outside-click-handler";
import Title from "../ui/Title";
import Image from "next/image";
import { GiCancel } from "react-icons/gi";
import axios from "axios";
import Input from "../form/Input";
import { useRouter } from "next/router";
import PacmanLoader from "react-spinners/PacmanLoader";

function Search({ setIsSearch }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const getProducts = async () => {
      try {
        const res = await axios.get(
          `${process.env.NEXT_PUBLIC_API_URL}/products`
        );
        setProducts(res.data);
        setFiltered(res.data.slice(0, 4));
      } catch (err) {
        console.log(err);
      }
    };
    setTimeout(() => {
      getProducts();
    }, 1000);
  }, []);

  const handleSearch = (e) => {
    const searchFilter = products
      .filter((product) =>
        product.title.toLowerCase().includes(e.target.value.toLowerCase())
      )
      .slice(0, 4);
    setFiltered(searchFilter);
  };

  return (
    <div className="fixed top-0 left-0 w-screen h-screen z-50 after:content-[''] after:absolute after:top-0 after:left-0 after:w-screen after:h-screen after:bg-white grid after:opacity-30">
      <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
        <div className="w-full h-full flex justify-center items-center">
          <div className="relative z-50 md:w-[600px] w-[370px] bg-white border-2 rounded-3xl p-10">
            <Title addClass="text-[40px] text-center">Search</Title>
            <Input placeholder="Search..." onChange={handleSearch} />
            {products.length > 0 ? (
              <ul className="mt-4">
                {filtered.length > 0 ? (
                  filtered.map((product) => (
                    <li
                      className="flex items-center justify-between p-1 hover:bg-primary transition-all px-2 cursor-pointer"
                      key={product._id}
                      onClick={() => {
                        router.push(`/product/${product?._id}`);
                        setIsSearch(false);
                      }}
                    >
                      <div className="relative flex">
                        <Image
                          src={product?.img}
                          alt={product?.title}
                          width={48}
                          height={48}
                        />
                      </div>
                      <span className="font-bold">{product?.title}</span>
                      <span className="font-bold">${product.prices[0]}</span>
                    </li>
                  ))
                ) : (
                  <p className="text-center font-semibold">No results found!</p>
                )}
              </ul>
            ) : (
              <div className="flex justify-center items-center mt-3">
                <PacmanLoader color="#fca311" />
              </div>
            )}
            <button>
              <GiCancel
                className="text-2xl absolute top-5 right-5 cursor-pointer hover:text-primary"
                onClick={() => setIsSearch(false)}
              />
            </button>
          </div>
        </div>
      </OutsideClickHandler>
    </div>
  );
}

export default Search;
