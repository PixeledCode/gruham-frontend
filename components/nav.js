import React from "react";
import Link from "next/link";
import { useRouter } from "next/router";

const Nav = () => {
  const router = useRouter();
  console.log(router.pathname)
  return (
    <>
    <nav className="uk-navbar-container">
      <div className="uk-container uk-container-xsmall">
        <Link href="/">
          <img className="logo" src="/logo.png" />
        </Link>
      </div>
      <div className="navLinks uk-container uk-container-xsmall">
        <ul>
          <li className={router.pathname == "/" ? "active" : (router.pathname == "/post/[slug]" ? "active2" : "")}>
            <Link href="/">Projects</Link>
          </li>
          <li className={router.pathname == "/contact" ? "active" : ""}>
            <Link href="/contact">Contact</Link>
          </li>
          <li className={router.pathname == "/about" ? "active" : ""}>
            <Link href="/about">About</Link>
          </li>
          
        </ul>
        
      </div>
    </nav>
  </>
  );
};

export default Nav;