import LinkDisplay from "../components/LinkDisplay";
import LineChart from "../components/LineChart";

const Line = () => {
  return (
    <div className="h-full">
      <LinkDisplay title="Line Chart" text="Simple Line Chart" />
      <div className="h-[80%]">
        <LineChart isDashBoard={false} />
      </div>
    </div>
  );
};

export default Line;
