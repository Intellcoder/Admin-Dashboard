import BarChart from "../components/BarChart";
import LinkDisplay from "../components/LinkDisplay";

const Bar = () => {
  return (
    <div className="h-full p-2">
      <LinkDisplay title="Bar Chart" text="Simple Bar chart" />
      <div className="h-[70%]">
        <BarChart isDashboard={false} />
      </div>
    </div>
  );
};

export default Bar;
