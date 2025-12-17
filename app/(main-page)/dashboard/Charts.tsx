"use client";
import { useRouter } from "next/navigation";
import { ChartsSeriesType } from "@/components/component.type";
import { ECElementEvent, EChartsOption } from "echarts";
import EChartsReact from "echarts-for-react";

const Charts = () => {
  const router = useRouter();
  const option: EChartsOption = {
    title: {
      text: "Total Employee",
      left: "center",
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
      left: 0,
    },
    series: [
      {
        name: "Access From",
        type: "pie",
        top: 0,
        radius: ["50%", "75%"],
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
        data: [
          { value: 1048, name: "Search Engine" },
          { value: 735, name: "Direct" },
          { value: 580, name: "Email" },
          { value: 484, name: "Union Ads" },
          { value: 300, name: "Video Ads" },
        ],
      },
    ],
  };
  const onChartClick = (params: ECElementEvent): void => {
    const name = params.name as ChartsSeriesType;
    if (params.componentType === "series" || params.componentType) {
      switch (name) {
        case "Direct":
          router.push("/employee");
          break;

        case "Email":
          router.push("/employee");
          break;

        case "Search Engine":
          router.push("/employee");
          break;

        case "Union Ads":
          router.push("/employee");
          break;

        case "Video Ads":
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
