import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import OutsideClickHandler from 'react-outside-click-handler';
import Title from "../ui/Title";

function Header() {
  const [isSearch, setIsSearch] = useState(false);

  return (
    <div className="h-[5.5rem] bg-secondary">
      <div className="container mx-auto flex justify-between h-full items-center text-white">
        <div>
          <Logo />
        </div>
        <nav>
          <ul className="flex gap-1 uppercase">
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
          <a href="#">
            <button className="btn-primary">Order Online</button>
          </a>
        </div>
      </div>
      {isSearch && (
        <OutsideClickHandler onOutsideClick={() => setIsSearch(false)}>
          <div>
            <Title addClass='text-9xl'>Search</Title>
          </div>
        </OutsideClickHandler>
      )}
    </div>
  )
}

export default Header;
