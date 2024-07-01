import React from "react";
import { IoMenu } from "react-icons/io5";
import { FaUserCircle } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { isLoggedIn } from "@/lib/auth";

import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { LogoutButton } from "../auth/logout-button";

const MobileNav = async () => {
  const isLogged = isLoggedIn();
  return (
    <div className="hidden max-sm:flex">
      {/* <Sheet>
        <SheetTrigger>Open</SheetTrigger>
        <SheetContent>
          <SheetHeader>
            <SheetTitle>Are you absolutely sure?</SheetTitle>
            <SheetDescription>
              This action cannot be undone. This will permanently delete your
              account and remove your data from our servers.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet> */}

      <Sheet>
        <SheetTrigger>
          <IoMenu className="h-8 w-8" />
        </SheetTrigger>
        <SheetContent>
          <SheetClose className="w-full">
            {(await isLogged) ? (
              <div className="flex flex-col items-start gap-2 ">
                <div className="flex flex-row items-center gap-2 shadow-md rounded-md w-full p-2 ">
                  <FaUserCircle className="h-8 w-8" />
                  <Link href="/profile"> Profile</Link>
                </div>

                <div className="p-2">
                  <Link href="/gallery">Gallery</Link>
                </div>
                <div className="p-2">
                  <Link href="/wishlist">Wishlist</Link>
                </div>
                <div className="p-2">
                  <Link href="/cart">Cart</Link>
                </div>

                <LogoutButton />
              </div>
            ) : (
              <div className="gap-3 flex flex-col">
                <div className="p-2">
                  <Link href="/gallery">Gallery</Link>
                </div>
                <div className="p-2">
                  <Link href="/wishlist">Wishlist</Link>
                </div>
                <div className="p-2">
                  <Link href="/cart">Cart</Link>
                </div>
                <Button>
                  <Link href="/auth/login">Login</Link>
                </Button>
              </div>
            )}
          </SheetClose>
        </SheetContent>
      </Sheet>
    </div>
  );
};

export default MobileNav;
