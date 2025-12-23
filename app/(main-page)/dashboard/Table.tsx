/* eslint-disable react-hooks/incompatible-library */
"use client";

import { camelCaseToTitle } from "@/utils/utils";
import {
  createColumnHelper,
  flexRender,
  getCoreRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { useMemo } from "react";

interface TableProps<T extends Record<string, unknown>> {
  data: T[];
}

const Table = <T extends Record<string, unknown>>({ data }: TableProps<T>) => {
  const columnHelper = createColumnHelper<T>();

  const columns = useMemo(() => {
    if (!data.length) return [];

    return (Object.keys(data[0]) as (keyof T)[]).map((key) =>
      columnHelper.accessor((row) => row[key], {
        id: String(key),
        header: camelCaseToTitle(String(key)),
        cell: (info) => String(info.getValue() ?? ""),
      })
    );
  }, [data, columnHelper]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  return (
    <div>
      <table className="min-w-full border border-gray-200 text-xs text-slate-900">
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
