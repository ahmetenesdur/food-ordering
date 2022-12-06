import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 relative ${router.asPath === "/" ? "bg-transparent" : "bg-secondary"}`}
    >
      <div className="container mx-auto flex justify-between h-full items-center text-white">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
            isMenu === true && "!grid place-content-center"
          }`}>
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/">Home</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/menu">Menu</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/about">About</Link>
            </li>
            <li className="px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer">
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
          {isMenu && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenu(false)}
            >
              <GiCancel size={25} className=" transition-all hover:text-primary" />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt className="hover:text-primary cursor-pointer transition-all" />
          </Link>
          <Link href="#">
            <FaShoppingCart className="hover:text-primary cursor-pointer transition-all" />
          </Link>
          <button
            onClick={
              () => {
                setIsSearch(!isSearch);
              }

            }>
            <FaSearch className="hover:text-primary cursor-pointer transition-all" />
          </button>
          <Link href="#" className="md:inline-block hidden sm">
            <button className="btn-primary">Order Online</button>
          </Link>
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
