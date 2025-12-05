import { Users } from "lucide-react";

const Dashboard = () => {
  return (
    <div className="pt-6 max-[1537px]:px-12">
      {/* TODO: "I will replace it soon with a maximum of 1537, but I need to rethink the logic." */}
      <h1 className="2xl:text-2xl text-dark font-medium mb-6 ">
        Dashboard Overview
      </h1>
      <div className="grid grid-cols-4 gap-16">
        <div className="card px-4 py-2 w-80 bg-blue-100 shadow-sm rounded-lg">
          <div className="flex flex-col gap-3">
            <div className="flex justify-between items-center">
              <span className="text-xl ">350</span>{" "}
              <div className="rounded-full ">
                <Users
                  strokeWidth={1}
                  // size={20}
                  className="  size-5"
                />
              </div>
            </div>
            <p className="text-sm">Total Employees</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
