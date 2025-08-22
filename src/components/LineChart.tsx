import { ResponsiveLine } from "@nivo/line";
import { mockLineData as data } from "../data/data";

type Props = {
  isDashBoard: boolean;
};

const LineChart = ({ isDashBoard }: Props) => {
  return (
    <ResponsiveLine /* or Line for fixed dimensions */
      data={data}
      theme={{
        axis: {
          domain: {
            line: {
              stroke: "#e0e0e0",
            },
          },
          legend: {
            text: {
              fill: "#e0e0e0",
            },
          },
          ticks: {
            line: {
              stroke: "#e0e0e0",
              strokeWidth: 1,
            },
            text: {
              fill: "#e0e0e0",
            },
          },
        },
        legends: {
          text: {
            fill: "#e0e0e0",
          },
        },
        tooltip: {
          container: {
            color: "#141b2d",
          },
        },
      }}
      colors={isDashBoard ? { datum: "color" } : { scheme: "nivo" }}
      margin={{ top: 50, right: 110, bottom: 50, left: 60 }}
      xScale={{ type: "point" }}
      yScale={{
        type: "linear",
        min: "auto",
        max: "auto",
        stacked: true,
        reverse: false,
      }}
      yFormat=">-.2f"
      curve="catmullRom"
      axisTop={null}
      axisRight={null}
      axisBottom={{
        tickSize: 0,
        tickRotation: 0,
        tickPadding: 5,
        legend: isDashBoard ? undefined : "transportation",
        legendPosition: "middle",
        legendOffset: 36,
      }}
      axisLeft={{
        tickValues: 5,
        tickSize: 3,
        tickPadding: 5,
        tickRotation: 0,
        legend: isDashBoard ? undefined : "count",
        legendOffset: -40,
        legendPosition: "middle",
      }}
      pointSize={8}
      pointColor={{ theme: "background" }}
      pointBorderWidth={2}
      pointBorderColor={{ from: "seriesColor" }}
      pointLabelYOffset={-12}
      enableTouchCrosshair={true}
      enableGridX={false}
      enableGridY={false}
      useMesh={true}
      legends={[
        {
          anchor: "bottom-right",
          direction: "column",
          justify: false,
          translateY: 0,
          translateX: 100,
          itemWidth: 80,
          itemHeight: 22,
          itemsSpacing: 0,
          itemDirection: "left-to-right",
          itemOpacity: 0.75,
          symbolSize: 12,
          symbolShape: "circle",
          symbolBorderColor: "rgba(0,0,0,.5)",
          effects: [
            {
              on: "hover",
              style: {
                itemBackground: "rgba(0,0,0,.03)",
                itemOpacity: 1,
              },
            },
          ],
        },
      ]}
    />
  );
};

export default LineChart;
