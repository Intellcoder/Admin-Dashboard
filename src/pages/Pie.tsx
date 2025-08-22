import React from "react";
import LinkDisplay from "../components/LinkDisplay";
import PieChart from "../components/PieChart";

type Props = {};

const Pie = (props: Props) => {
  return (
    <div className="h-full">
      <LinkDisplay title="Pie Chart" text="Simple Pie Chart" />
      <div className="h-[80%]">
        <PieChart />
      </div>
    </div>
  );
};

export default Pie;
