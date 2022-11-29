import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto flex justify-between h-full items-center text-white">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-full sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden ${isMenu === true && "!grid place-content-center"
            }`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="#">Home</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="#">Menu</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="#">About</a>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <a href="#">Book Table</a>
            </li>
          </ul>
          {isMenu && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenu(false)}
            >
              <GiCancel size={25} className=" transition-all" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <a href="#">
            <FaUserAlt className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <a href="#">
            <FaShoppingCart className="hover:text-primary cursor-pointer transition-all" />
          </a>
          <button
            onClick={
              () => {
                setIsSearch(!isSearch);
              }

            }>
            <FaSearch className="hover:text-primary cursor-pointer transition-all" />
          </button>
          <a href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </a>
          <button 
          className="sm:hidden inline-block"
          onClick={() => setIsMenu(true)}
          >
            <GiHamburgerMenu className="hover:text-primary cursor-pointer transition-all" />
          </button>
        </div>
      </div>
      {isSearch && <Search setIsSearch={setIsSearch} />}
    </div>
  )
}

export default Header;
