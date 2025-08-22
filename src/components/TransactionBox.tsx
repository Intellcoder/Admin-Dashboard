import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";

type Props = {
  txId: string;
  user: string;
  date: string;
  cost: string;
};

const TransactionBox = ({ txId, user, date, cost }: Props) => {
  return (
    <Box className="bg-primary-400 mt-2 mb-2 flex justify-between items-center p-2 ">
      <Box>
        <Typography className="text-greenAccent-500">{txId}</Typography>
        <Typography className="text-grey-100">{user}</Typography>
      </Box>
      <Box>
        <Typography className="text-grey-100">{date}</Typography>
      </Box>
      <Box>
        <button className="bg-greenAccent-600 p-1 rounded-[3px]">
          <Typography className="text-grey-100">${cost}</Typography>
        </button>
      </Box>
    </Box>
  );
};

export default TransactionBox;
