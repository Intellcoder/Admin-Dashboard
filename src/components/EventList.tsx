import Typography from "@mui/material/Typography";
import { formatDate } from "@fullcalendar/core/index.js";

type Props = {
  title: string;
  startStr: string;
};

const EventList = ({ title, startStr }: Props) => {
  return (
    <div className="bg-greenAccent-600 p-3 text-white mt-2">
      <Typography>{title}</Typography>
      <Typography>
        {formatDate(startStr, {
          year: "numeric",
          month: "short",
          day: "numeric",
        })}
      </Typography>
    </div>
  );
};

export default EventList;
