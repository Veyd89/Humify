"use client";
import {
  BanknoteIcon,
  CalendarClockIcon,
  LucideCircleQuestionMark,
  LucideLayoutDashboard,
  Network,
  Plane,
  Settings,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import { usePathname } from "next/navigation";
import React from "react";

const Sidebar = () => {
  const pathName = usePathname();
  const removedRoutes = ["/login", "signup"];
  if (removedRoutes.includes(pathName)) return <></>;
  return (
    <aside className="bg-white z-10 pl-8 pt-14 pr-20 shadow-[0_4px_8px_-2px_rgba(0,0,0,0.06)] border-r border-dark/15 h-full fixed w-56 text-slate-900">
      <div className="w-32 py-6 text-sm flex flex-col gap-16">
        <div className="flex flex-col gap-2.5">
          <span className="text-gray-400 ">Main menu</span>
          <ul className="flex flex-col gap-2  font-normal">
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <LucideLayoutDashboard strokeWidth={1} className=" size-5" />
              <span className="">Dashboard</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <Users strokeWidth={1} className=" size-5" />
              <span>Employee</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <UserCheck strokeWidth={1} className=" size-5" />
              <span>Attendance</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <CalendarClockIcon strokeWidth={1} className=" size-5" />
              <span>Events</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <BanknoteIcon strokeWidth={1} className=" size-5" />
              <span>Payroll</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <TrendingUp strokeWidth={1} className=" size-5" />
              <span>Performance</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <Network strokeWidth={1} className=" size-5" />
              <span>Organization</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-gray-400">Others</span>
          <ul className="flex flex-col gap-2  font-normal">
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <Settings strokeWidth={1} className=" size-5" />
              <span>Settings</span>
            </li>
            <li className="py-2 flex items-center gap-1.5 cursor-pointer">
              <LucideCircleQuestionMark strokeWidth={1} className=" size-5" />
              <span>Help center</span>
            </li>
          </ul>
        </div>
      </div>
    </aside>
    // <></>
  );
};

export default Sidebar;
