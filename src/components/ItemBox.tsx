import Typography from "@mui/material/Typography";
import ProgressCircle from "./ProgressCircle";
import type { ReactElement } from "react";

type Props = {
  progress: number;
  icon: ReactElement;
  title: string;
  total: string;
  increase: string;
};

const ItemBox = ({ progress, title, total, increase, icon }: Props) => {
  return (
    <div className=" dark:bg-primary-400 p-2 w-full rounded-[2px] mb-2">
      <div className="flex justify-between ">
        <div>
          <span className="text-greenAccent-600 ">{icon}</span>
          <Typography className="text-primary-100">{total}</Typography>
        </div>
        <ProgressCircle progress={progress} />
      </div>
      <div className="flex justify-between mt-1 text-greenAccent-600">
        <Typography>{title}</Typography>
        <Typography>+{increase}%</Typography>
      </div>
    </div>
  );
};

export default ItemBox;
