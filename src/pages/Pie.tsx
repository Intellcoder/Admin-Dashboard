import LinkDisplay from "../components/LinkDisplay";
import PieChart from "../components/PieChart";

const Pie = () => {
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
