"use client";
import { DataEmployee } from "@/components/component.type";
import { EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";
import React from "react";

const KpiEmployee: DataEmployee[] = [
  { name: "Engineering", value: 100 },
  { name: "Finance", value: 90 },
  { name: "Marketing", value: 70 },
  { name: "HRD/GA", value: 50 },
  { name: "House Keeping", value: 30 },
  { name: "RND", value: 20 },
];

const option: EChartsOption = {
  // title: {
  //   show: true,
  //   text: `Key Performance Indicator`,
  // },
  // xAxis: {
  //   type: "category",
  // },
  // yAxis: {},
  // series: [
  //   {
  //     name: "KPI",
  //     type: "bar",
  //   },
  // ],
  title: {
    text: "Key Performance Indicator",
    show: true,
    top: "12px",
  },

  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  grid: {
    left: "0%",
    right: "0%",
    bottom: "0%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "category",
      data: KpiEmployee.map((department) => department.name),
      axisTick: {
        alignWithLabel: true,
      },
      axisLabel: {
        interval: 0,
      },
    },
  ],
  yAxis: [
    {
      type: "value",
      axisLabel: {
        formatter: "{value} %",
      },
    },
  ],
  series: [
    {
      name: "Direct",
      type: "bar",
      // barWidth: "20%",
      data: KpiEmployee.map((department) => department.value),
      itemStyle: {
        // color: (params) => {
        //   const value = params.value as number;

        //   const min = 0;
        //   const max = 100;

        //   // normalisasi 0–1
        //   const t = (value - min) / (max - min);

        //   // batasi supaya tidak lewat 0–1
        //   const clamp = Math.max(0, Math.min(1, t));

        //   // merah → kuning → hijau
        //   const r =
        //     clamp < 0.5 ? 255 : Math.round(255 - (clamp - 0.5) * 2 * 255);

        //   const g = clamp < 0.5 ? Math.round(clamp * 2 * 255) : 255;

        //   const b = 0; // tetap 0 supaya warna hangat–hijau

        //   return `rgb(${r},${g},${b})`;
        // },
        color: "#3b82f6",
        borderRadius: [10, 10, 0, 0],
      },
    },
  ],
};

const KpiDashboardCharts = () => {
  return (
    <div className="h-full">
      <EChartsReact option={option} style={{ height: "100%" }} />
    </div>
  );
};

export default KpiDashboardCharts;
