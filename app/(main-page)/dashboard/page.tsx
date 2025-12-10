import Card from "@/components/common/Card";
import { EqualApproximately, Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="pt-6 2xl:px-12 ">
      {/* TODO: "I will replace it soon with a maximum of 1537, but I need to rethink the logic." */}
      <h1 className="2xl:text-2xl text-dark font-medium mb-6 ">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-4 gap-1 ">
        <Card
          headIcon={Users}
          label="Total Employee"
          mainValue={500}
          statusIcon="Up"
          statusDesc="since last month"
          statusValue={4}
          bgColorClass="bg-blue-50"
        />
        <Card
          headIcon={Users}
          label="Total Intern"
          mainValue={50}
          statusIcon="Down"
          statusDesc="since last month"
          statusValue={-8}
          bgColorClass="bg-indigo-50"
        />
        <Card
          headIcon={Users}
          label="Today Present"
          mainValue={50}
          statusIcon="Down"
          statusDesc="than yesterday"
          statusValue={-5}
          bgColorClass="bg-green-50"
        />
        <Card
          headIcon={Users}
          label="Today Absent"
          mainValue={50}
          statusIcon="Up"
          statusDesc="than yesterday"
          statusValue={5}
          bgColorClass="bg-amber-50"
        />
      </div>
    </div>
  );
};

export default Dashboard;
