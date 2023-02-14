import { useState } from "react";
import Logo from "../ui/Logo";
import { FaUserAlt, FaShoppingCart, FaSearch } from "react-icons/fa";
import Search from "../ui/Search";
import { GiHamburgerMenu, GiCancel } from "react-icons/gi";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";

function Header() {
  const [isSearch, setIsSearch] = useState(false);
  const [isMenu, setIsMenu] = useState(false);

  const cart = useSelector((state) => state.cart);

  const router = useRouter();

  return (
    <div
      className={`h-[5.5rem] z-50 fixed w-full ${
        router.asPath === "/" ? "bg-transparent" : "bg-secondary"
      }`}
    >
      <div className="container mx-auto flex justify-between h-full items-center text-white">
        <div>
          <Logo />
        </div>
        <nav
          className={`sm:static absolute top-0 left-0 sm:w-auto sm:h-auto w-full h-screen sm:text-white text-black sm:bg-transparent bg-white sm:flex hidden  ${
            isMenu === true && "!grid place-content-center"
          }`}
        >
          <ul className="flex gap-x-2 sm:flex-row flex-col items-center">
            <li
              className={`px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/" && "text-primary"
              }`}
            >
              <Link href="/">Home</Link>
            </li>
            <li
              className={`px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/menu" && "text-primary"
              }`}
            >
              <Link href="/menu">Menu</Link>
            </li>
            <li
              className={`px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/about" && "text-primary"
              }`}
            >
              <Link href="/about">About</Link>
            </li>
            <li
              className={`px-[0.313rem] py-[0.625rem] uppercase hover:text-primary cursor-pointer ${
                router.asPath === "/reservation" && "text-primary"
              }`}
            >
              <Link href="/reservation">Book Table</Link>
            </li>
          </ul>
          {isMenu && (
            <button
              className="absolute  top-4 right-4 z-50"
              onClick={() => setIsMenu(false)}
            >
              <GiCancel
                size={25}
                className=" transition-all hover:text-primary"
              />
            </button>
          )}
        </nav>
        <div className="flex gap-x-4 items-center">
          <Link href="/auth/login">
            <FaUserAlt
              className={`hover:text-primary transition-all cursor-pointer ${
                (router.asPath.includes("profile") ||
                  router.asPath.includes("auth")) &&
                "text-primary"
              }`}
              size={18}
            />
          </Link>
          <Link href="/cart">
            <span className="relative">
              <FaShoppingCart
                className={`hover:text-primary transition-all cursor-pointer ${
                  router.asPath === "/cart" && "text-primary"
                }`}
                size={18}
              />
              <span className="-py-1 px-1 text-xs grid place-content-center rounded-full bg-primary absolute -top-2 -right-3 text-black font-bold">
                {cart.products.length === 0 ? "0" : cart.products.length}
              </span>
            </span>
          </Link>
          <button
            onClick={() => {
              setIsSearch(!isSearch);
            }}
          >
            <FaSearch
              className="hover:text-primary transition-all cursor-pointer"
              size={18}
            />
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
  );
}

export default Header;
