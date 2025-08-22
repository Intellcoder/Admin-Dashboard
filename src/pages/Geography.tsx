import GeoChart from "../components/GeoChart";
import LinkDisplay from "../components/LinkDisplay";

type Props = {};

const Geography = (props: Props) => {
  return (
    <div className="h-full ">
      <LinkDisplay title="Geography" text="Simple Geography Chart" />
      <div className="m-2 border-2 border-light-400 p-2 h-[80%] w-full ">
        <GeoChart isDashboard={false} />
      </div>
    </div>
  );
};

export default Geography;
