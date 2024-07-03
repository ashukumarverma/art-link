import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";
import { isLoggedIn } from "@/lib/auth";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { FaUserCircle } from "react-icons/fa";
import { LogoutButton } from "../auth/logout-button";
import MobileNav from "./MobileNav";

const Navbar = async () => {
  const isLogged = isLoggedIn();
  return (
    <nav className="flex justify-between z-50 w-screen gap-5 p-4 shadow-sm sm:px-12">
      <Link href="/" className="flex items-center gap-1">
        <Image src="/img/logo.jpeg" width={40} height={40} alt="ArtLink" />
        <p>
          <span className="font-semibold text-2xl items-center px-2 ">
            ArtLink
          </span>
        </p>
      </Link>
      <div className="flex items-center">
        {/* NavBar all device except mobile */}
        <div className="flex gap-3 items-center max-sm:hidden">
          <div>
            <Link href="/gallery">Gallery</Link>
          </div>
          <div>
            <Link href="/wishlist">Wishlist</Link>
          </div>
          <div>
            <Link href="/cart">Cart</Link>
          </div>

          {(await isLogged) ? (
            <div className="">
              <DropdownMenu>
                <DropdownMenuTrigger>
                  <FaUserCircle className="h-8 w-8" />
                </DropdownMenuTrigger>
                <DropdownMenuContent side="left" className="mt-4">
                  {/* <DropdownMenuLabel>
                    <Link href="/profile">Profile</Link>
                  </DropdownMenuLabel> */}
                  {/* <DropdownMenuSeparator /> */}
                  <DropdownMenuItem>
                    <Link href="/profile" className="w-full">
                      Profile
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem>
                    <LogoutButton />
                  </DropdownMenuItem>
                </DropdownMenuContent>
              </DropdownMenu>
            </div>
          ) : (
            <div className="gap-3 flex">
              <Button>
                <Link href="/auth/login">Login</Link>
              </Button>
            </div>
          )}
        </div>
        {/* MobileNav Here */}
        <div className="hidden max-sm:flex mr-3">
          <MobileNav />
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
