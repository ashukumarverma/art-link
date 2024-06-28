import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between z-50 w-screen gap-5 p-4 shadow-sm dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/img/logo.jpeg" width={40} height={40} alt="ArtLink" />
        <p>
          <span className="font-semibold text-2xl items-center px-2 ">
            ArtLink
          </span>
        </p>
      </Link>
      <ul className="flex gap-5 items-center max-sm:hidden">
        <li>
          <Link href="/gallery">Gallery</Link>
        </li>
        <li>
          <Link href="/wishlist">Wishlist</Link>
        </li>
        <li>
          <Link href="/cart">Cart</Link>
        </li>

        <li>
          <Button>
            <Link href="/auth/login">Login</Link>
          </Button>
        </li>
        <li>
          <Button>
            <Link href="/auth/register">Register</Link>
          </Button>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
