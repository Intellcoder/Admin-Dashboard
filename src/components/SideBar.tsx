import { useState } from "react";
import Avatar from "@mui/material/Avatar";
import Typography from "@mui/material/Typography";
import type { sideBarItemProps } from "../types";
import { Link, useLocation } from "react-router-dom";
import HomeOutlinedIcon from "@mui/icons-material/HomeOutlined";
import PeopleOutlinedIcon from "@mui/icons-material/PeopleOutlined";
import ContactsOutlinedIcon from "@mui/icons-material/ContactsOutlined";
import ReceiptOutlinedIcon from "@mui/icons-material/ReceiptOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined";
import HelpOutlineOutlinedIcon from "@mui/icons-material/HelpOutlineOutlined";
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined";
import PieChartOutlineOutlinedIcon from "@mui/icons-material/PieChartOutlineOutlined";
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined";
import FirstPageIcon from "@mui/icons-material/FirstPage";
import MapOutlinedIcon from "@mui/icons-material/MapOutlined";
import { useSidebar } from "../context/SideBarContext";

export const SideBarItem = ({ title, to, icon }: sideBarItemProps) => {
  const location = useLocation();
  const isActive = location.pathname === to;
  const { closeSidebar } = useSidebar();
  return (
    <Link to={to} onClick={closeSidebar}>
      <div
        className={`flex items-center gap-3 px-4 py-2 mt-2 mb-2  rounded-lg transition-colors duration-200 hover:bg-primary-500 hover:text-blueAccent-700 ${
          isActive
            ? "bg-primary-500 text-blueAccent-700"
            : "text-gray-300 hover:"
        }`}
      >
        <span className={`text-lg ${isActive ? "bg-blue" : "text-gray-600"}`}>
          {icon}
        </span>
        <Typography>{title}</Typography>
      </div>
    </Link>
  );
};

const SideBar = () => {
  const { isOpen, toggle } = useSidebar();
  const [user] = useState({
    profile:
      "data:image/jpeg;base64,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",
  });

  return (
    <aside
      className={`w-[50%] z-50 overflow-y-scroll fixed h-screen  md:flex  bg-primary-400  p-2 md:w-[20%] no-scrollbar pr-4 ${
        isOpen ? "flex" : "hidden"
      }`}
    >
      <div className="p-2 w-full">
        <div className="flex justify-end md:hidden">
          <button onClick={toggle} className="">
            <FirstPageIcon className="text-grey-100 self-end" />
          </button>
        </div>
        <div className="m-2">
          <h1 className="text-gray-100 text-center text-2xl font-source">
            Admin
          </h1>
        </div>
        <div className="pt-1 pb-3 flex flex-col justify-center items-center font-bold font-source">
          <Avatar src={user.profile} sx={{ width: 70, height: 70 }} />
          <Typography className="text-grey-100 font-bold text-[10px]">
            Ed Rohn
          </Typography>
          <Typography className="text-greenAccent-500">
            VP Fancy Admin
          </Typography>
        </div>
        <div className="">
          <div className="flex flex-col justify-start">
            <span>
              <SideBarItem
                title="Dashboard"
                to="/"
                icon={<HomeOutlinedIcon />}
              />
            </span>
            <span>
              <Typography className=" py-2 text-grey-300">Data</Typography>
              <SideBarItem
                title="Manage Team"
                to="/team"
                icon={<PeopleOutlinedIcon />}
              />
              <SideBarItem
                title="Contact Information"
                to="/contact"
                icon={<ContactsOutlinedIcon />}
              />
              <SideBarItem
                title="Invoices Balances"
                to="/invoices"
                icon={<ReceiptOutlinedIcon />}
              />
            </span>
            <span>
              <Typography className=" px-5 py-2 text-grey-300">
                Pages
              </Typography>
              <SideBarItem
                title="Profile Form"
                to="/profile"
                icon={<PersonOutlinedIcon />}
              />
              <SideBarItem
                title="Calendar"
                to="/calendar"
                icon={<CalendarTodayOutlinedIcon />}
              />
              <SideBarItem
                title="FAQ Page"
                to="/faq"
                icon={<HelpOutlineOutlinedIcon />}
              />
            </span>
            <span>
              <Typography className=" px-5 py-2 text-grey-300">
                Charts
              </Typography>
              <SideBarItem
                title="Bar Chart"
                to="/barchart"
                icon={<BarChartOutlinedIcon />}
              />
              <SideBarItem
                title="Pie Chart"
                to="/piechart"
                icon={<PieChartOutlineOutlinedIcon />}
              />
              <SideBarItem
                title="Line Chart"
                to="/linechart"
                icon={<TimelineOutlinedIcon />}
              />
              <SideBarItem
                title="Geography Chart"
                to="/geochart"
                icon={<MapOutlinedIcon />}
              />
            </span>
          </div>
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
