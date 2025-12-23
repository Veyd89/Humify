import Card from "@/components/common/Card";
import { UserCheck, Users, UserX2 } from "lucide-react";
import Charts from "./Charts";
import Table from "./Table";

interface TableData extends Record<string, unknown> {
  name: string;
  department:
    | "Engineering"
    | "Finance"
    | "Marketing"
    | "HRD/GA"
    | "House Keeping"
    | "RND";
  status: "Leave" | "Sick" | "Unexcused Absence";
}

const DashboardModule = () => {
  const data: TableData[] = [
    { name: "Alice Johnson", department: "Engineering", status: "Leave" },
    { name: "Mark Thompson", department: "Finance", status: "Sick" },
  ];
  return (
    // <div className="pt-6 2xl:px-12 ">
    <div className="pt-6 px-12 ">
      {/* TODO: "I will replace it soon with a maximum of 1537, but I need to rethink the logic." */}
      {/* <h1 className="2xl:text-2xl text-slate-900 font-medium mb-6"> */}
      <h1 className="text-2xl text-slate-900 font-medium mb-6">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-4 gap-x-8 gap-y-6 mb-7">
        <Card
          headIcon={Users}
          label="Total Employee"
          mainValue={500}
          statusIcon="Up"
          statusDesc="since last month"
          statusValue={4}
          bgColorClass="bg-white"
        />
        <Card
          headIcon={Users}
          label="Total Intern"
          mainValue={50}
          statusIcon="Down"
          statusDesc="since last month"
          statusValue={-8}
          bgColorClass="bg-white"
        />
        <Card
          headIcon={UserCheck}
          label="Today Present"
          mainValue={50}
          statusIcon="Down"
          statusDesc="than yesterday"
          statusValue={-5}
          bgColorClass="bg-white"
        />
        <Card
          headIcon={UserX2}
          label="Today Absent"
          mainValue={50}
          statusIcon="Up"
          statusDesc="than yesterday"
          statusValue={5}
          bgColorClass="bg-white"
        />
        {/* <div className="col-span-[1.5] relative bg-white shadow-sm rounded-lg px-4 pt-2">
          <Charts />
        </div>
        <div className="col-span-[2.5] relative bg-white shadow-sm rounded-lg px-4 py-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm">Today Leave</h3>
            <Table />
          </div>
        </div> */}
      </div>
      <div className="flex gap-x-8">
        <div className="flex-1 relative bg-white shadow-sm rounded-lg px-4 pt-2">
          <Charts />
        </div>
        <div className="flex-[2.5] relative bg-white shadow-sm rounded-lg px-4 py-4">
          <div className="flex flex-col gap-2">
            <h3 className="text-sm">Today Leave</h3>
            <Table data={data} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardModule;
