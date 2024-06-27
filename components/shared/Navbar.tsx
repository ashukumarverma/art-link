import Image from "next/image";
import Link from "next/link";
import React from "react";
import img from "@/public/img/logo.jpeg";
import { Button } from "../ui/button";

const Navbar = () => {
  return (
    <nav className="flex justify-between z-50 w-screen gap-5 p-4 shadow-sm dark:shadow-none sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src={img} width={40} height={40} alt="ArtLink" />

        <p className="h2-bold">
          <span className="font-semibold text-2xl items-center px-2 ">ArtLink</span>
        </p>
      </Link>
      <ul className="flex gap-5 items-center">
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
          <Link href="/auth/login">
          <Button>Login/ Register</Button>
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
