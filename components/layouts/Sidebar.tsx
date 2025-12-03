import {
  BanknoteIcon,
  CircleQuestionMark,
  LucideCircleQuestionMark,
  LucideLayoutDashboard,
  Network,
  Plane,
  Settings,
  TrendingUp,
  UserCheck,
  Users,
} from "lucide-react";
import React from "react";

const Sidebar = () => {
  return (
    <aside className="bg-white z-10 pl-8 w-fit shadow-[0_4px_8px_-2px_rgba(0,0,0,0.06)]  border-r border-dark/15 h-full fixed">
      <div className="w-32 py-6 text-xs flex flex-col gap-16">
        <div className="flex flex-col gap-2.5">
          <span className="text-gray-400">Main menu</span>
          <ul className="flex flex-col gap-2 text-dark font-normal">
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <LucideLayoutDashboard
                strokeWidth={1}
                className="text-dark size-4"
              />
              <span>Dashboard</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <Users strokeWidth={1} className="text-dark size-4" />
              <span>Employee</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <UserCheck strokeWidth={1} className="text-dark size-4" />
              <span>Attendance</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <Plane strokeWidth={1} className="text-dark size-4" />
              <span>Leave</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <BanknoteIcon strokeWidth={1} className="text-dark size-4" />
              <span>Payroll</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <TrendingUp strokeWidth={1} className="text-dark size-4" />
              <span>Performance</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <Network strokeWidth={1} className="text-dark size-4" />
              <span>Organization</span>
            </li>
          </ul>
        </div>
        <div className="flex flex-col gap-2.5">
          <span className="text-gray-400">Others</span>
          <ul className="flex flex-col gap-2 text-dark font-normal">
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <Settings strokeWidth={1} className="text-dark size-4" />
              <span>Settings</span>
            </li>
            <li className="py-2 flex items-center gap-1 cursor-pointer">
              <LucideCircleQuestionMark
                strokeWidth={1}
                className="text-dark size-4"
              />
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
