"use client";
import { useRouter } from "next/navigation";
import { ChartsSeriesAllEmployeeType } from "@/components/component.type";
import { ECElementEvent, EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";

interface DataEmployee {
  value: number;
  name: ChartsSeriesAllEmployeeType;
}

const Charts = () => {
  const router = useRouter();

  const dataEmployee: DataEmployee[] = [
    { value: 1048, name: "Engineering" },
    { value: 735, name: "Finance" },
    { value: 580, name: "HRD/GA" },
    { value: 484, name: "House Keeping" },
    { value: 300, name: "Marketing" },
  ];
  const option: EChartsOption = {
    title: {
      text: "Total Employee",
      left: 0,
      top: 0,
      textStyle: {
        fontFamily: "Poppins",
        fontWeight: 500,
        color: "#222222",
      },
      show: true,
    },
    tooltip: {
      trigger: "item",
      formatter: "{b}: {c} ({d}%)",
      textStyle: {
        fontSize: 10,
      },
    },
    legend: {
      selectedMode: false,
      orient: "vertical",
      top: "middle",
      right: 0,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        top: 0,
        right: 100,
        radius: ["45%", "70%"],
        center: ["35%", "50%"],
        avoidLabelOverlap: false,
        label: {
          show: false,
          fontSize: 14,
        },
        emphasis: {
          label: {
            show: false,
            fontSize: 40,
            fontWeight: "bold",
          },
        },
        // labelLine: {
        //   show: true,
        // },
        data: dataEmployee,
      },
    ],
  };
  const onChartClick = (params: ECElementEvent): void => {
    const name = params.name as ChartsSeriesAllEmployeeType;
    if (params.componentType === "series" || params.componentType) {
      switch (name) {
        case "Engineering":
          router.push("/employee");
          break;

        case "Finance":
          router.push("/employee");
          break;

        case "HRD/GA":
          router.push("/employee");
          break;

        case "House Keeping":
          router.push("/employee");
          break;

        case "Marketing":
          router.push("/employee");
          break;
        case "RND":
          router.push("/employee");
          break;

        default:
          const _exhausting: never = params.name as never;
          return _exhausting;
      }
    }
  };
  return (
    <div>
      <EChartsReact
        option={option}
        onEvents={{ click: onChartClick }}
        lazyUpdate
      />
    </div>
  );
};

export default Charts;
