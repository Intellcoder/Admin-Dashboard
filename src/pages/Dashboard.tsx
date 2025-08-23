import Typography from "@mui/material/Typography";
import LinkDisplay from "../components/LinkDisplay";
import DownloadIcon from "@mui/icons-material/Download";
import ItemBox from "../components/ItemBox";
import MailIcon from "@mui/icons-material/Mail";
import PointOfSaleIcon from "@mui/icons-material/PointOfSaleOutlined";
import PersonAddIcon from "@mui/icons-material/PersonAdd";
import TrafficIcon from "@mui/icons-material/Traffic";
import Line from "../components/LineChart";
import TransactionBox from "../components/TransactionBox";
import Box from "@mui/material/Box";
import { mockTransactions } from "../data/data";
import BarChart from "../components/BarChart";
import GeoChart from "../components/GeoChart";
import ProgressCircle from "../components/ProgressCircle";

const Dashboard = () => {
  return (
    <div className="p-1 pb-5">
      <div className="flex justify-between">
        <LinkDisplay title="DASHBOARD" text="Welcome to your dashboard" />
        <div className="flex items-center">
          <button className="text-light-400 bg-blueAccent-700 p-1 rounded-[2px]">
            <DownloadIcon />
            DOWNLOAD REPORTS
          </button>
        </div>
      </div>
      <div className="md:grid grid-cols-4 justify-between gap-3 mt-5">
        <ItemBox
          title="Emails Sent"
          icon={<MailIcon />}
          increase="14"
          total="12,361"
          progress={0.75}
        />
        <ItemBox
          title="Sales Obtained"
          icon={<PointOfSaleIcon />}
          increase="22"
          total="431,225"
          progress={0.5}
        />
        <ItemBox
          title="New Clients"
          icon={<PersonAddIcon />}
          increase="5"
          total="34,441"
          progress={0.25}
        />
        <ItemBox
          title="Traffic Recived"
          icon={<TrafficIcon />}
          increase="43"
          total="1,325,134"
          progress={0.75}
        />
      </div>
      <div className="lg:grid grid-cols-[70%_30%] gap-2 ">
        <div className="h-[250px] min-w-full bg-primary-400">
          <Line isDashBoard={true} />
        </div>
        <div className="h-[250px] overflow-auto  ">
          <Box className="bg-primary-400 w-full p-2 mt-1">
            <Typography className="text-gray-100 text-h5 text-center">
              Recent Transaction
            </Typography>
          </Box>
          <div className="grid grid-rows-3 overflow-x-auto no-scrollbar">
            {mockTransactions.map((transaction) => (
              <TransactionBox
                key={Math.random()}
                txId={transaction.txId}
                date={transaction.date}
                user={transaction.user}
                cost={transaction.cost}
              />
            ))}
          </div>
        </div>
      </div>
      <div className="lg:grid grid-cols-3  mt-3 gap-2">
        <div className="h-[250px]  bg-primary-400 mt-2 p-2">
          <Typography className="text-grey-200 font-source">
            Campaign
          </Typography>

          <span className="flex flex-col items-center ">
            <ProgressCircle size="125" />
            <Typography className="text-greenAccent-400">
              $48,352 revenue generated
            </Typography>
            <Typography className="text-grey-200 text-center font-source">
              Includes extra misc expenditures and cost
            </Typography>
          </span>
        </div>
        <div className="h-[250px] bg-primary-400 p-2 mt-2 ">
          <Typography className="text-grey-200 text-h2">
            Sales Quantity
          </Typography>
          <BarChart isDashboard={true} />
        </div>
        <div className="h-[250px] overflow-auto bg-primary-400 p-2 no-scrollbar mt-2">
          <Typography className="text-grey-200 p-2">
            Geography Based Traffic
          </Typography>
          <GeoChart isDashboard={true} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
