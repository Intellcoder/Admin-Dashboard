import Typography from "@mui/material/Typography";
import { useTheme } from "../utils/theme";
type Props = {
  title: string;
  text: string;
};

const LinkDisplay = ({ title, text }: Props) => {
  const { theme } = useTheme();
  return (
    <div>
      <h1
        className={` ${
          theme === "light" ? "text-grey-100" : "text-black"
        } text-h3 font-bold`}
      >
        {title}
      </h1>
      <Typography className="text-greenAccent-500">{text}</Typography>
    </div>
  );
};

export default LinkDisplay;
