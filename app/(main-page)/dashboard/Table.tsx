/* eslint-disable react-hooks/incompatible-library */
"use client";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";

interface EmployeeLeave {
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

const tableData: EmployeeLeave[] = [
  { name: "Alice Johnson", department: "Engineering", status: "Leave" },
  { name: "Mark Thompson", department: "Finance", status: "Sick" },
  { name: "Sarah Chen", department: "RND", status: "Leave" },
  { name: "David Miller", department: "HRD/GA", status: "Unexcused Absence" },
  { name: "Elena Rodriguez", department: "Marketing", status: "Sick" },
  { name: "James Wilson", department: "House Keeping", status: "Leave" },
];

const columnHelper = createColumnHelper<EmployeeLeave>();

const tblLeaveColumns = [
  columnHelper.accessor((row, index) => index + 1, {
    id: "nomor",
    header: "No",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("name", {
    header: "Name",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("department", {
    header: "Department",
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor("status", {
    header: "Status",
    cell: (info) => info.getValue(),
  }),
];

const Table = () => {
  const table = useReactTable({
    data: tableData,
    columns: tblLeaveColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  // console.log("table-columns", table);
  // console.log(table);
  // TODO: Add position on table, add photo and replace on column number
  return (
    <div>
      <table className="min-w-full border border-gray-200 text-xs text-slate-900">
        {/* ===== HEADER ===== */}
        <thead className="bg-gray-100">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr className="border-b border-gray-200 " key={headerGroup.id}>
              {headerGroup.headers.map((header) => (
                <th key={header.id} className="p-2 text-left font-medium">
                  {header.isPlaceholder
                    ? ""
                    : flexRender(
                        header.column.columnDef.header,
                        header.getContext()
                      )}
                </th>
              ))}
            </tr>
          ))}
        </thead>

        {/* ===== BODY ===== */}
        <tbody>
          {table.getRowModel().rows.map((row) => (
            <tr
              key={row.id}
              className="hover:bg-blue-50 border-b border-gray-200"
            >
              {row.getVisibleCells().map((cell) => (
                <td key={cell.id} className="p-2">
                  {flexRender(cell.column.columnDef.cell, cell.getContext())}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Table;
