"use client";
import { Bell, Search, User } from "lucide-react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import React from "react";

const Navbar = () => {
  const pathName = usePathname();
  const removedRoutes = ["/login", "signup"];
  if (removedRoutes.includes(pathName)) return <></>;
  return (
    <nav className="bg-white w-full h-14 py-2.5 shadow-[0_1px_6px_-2px_rgba(0,0,0,0.06)] border-b border-dark/15 z-100 fixed">
      {/* TODO: "I will replace it soon with a maximum of 1537, but I need to rethink the logic." */}
      <div className="max-2xl:container  mx-auto px-8 h-full flex justify-between">
        {/* shadow-[0_5px_12px_rgba(0,0,0,0.15)] */}
        <div className="flex h-full items-center">
          <Image
            className="w-32 cursor-pointer"
            src="/assets/Logo-humify-new.png"
            width={1920}
            height={1080}
            alt="logo"
          />
        </div>

        <ul className="flex gap-8 text-slate-900 items-center">
          <li>
            <Search strokeWidth={1} className="size-6 cursor-pointer" />
          </li>
          <li>
            <Bell strokeWidth={1} className="size-6 cursor-pointer" />
          </li>
          <li className="flex gap-2 items-center">
            <User
              strokeWidth={1}
              className=" rounded-full size-6 cursor-pointer text-slate-900"
            />

            <div className="flex flex-col  justify-center text-slate-900 text-xs font-medium">
              <span className="text-sm">Dayen Al Fiansyach</span>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
