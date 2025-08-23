import SearchIcon from "@mui/icons-material/Search";
import NightlightIcon from "@mui/icons-material/Nightlight";
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import NotificationsIcon from "@mui/icons-material/Notifications";
import SettingsIcon from "@mui/icons-material/Settings";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import { useSidebar } from "../context/SideBarContext";
import { useTheme } from "../utils/theme";
import Brightness4Icon from "@mui/icons-material/Brightness4";

const Header = () => {
  const { toggle } = useSidebar();
  const { theme, toggleTheme } = useTheme();
  return (
    <nav className=" pb-6 flex justify-between mt-3 p-2">
      {/*searchbar*/}
      <button onClick={toggle} className="">
        <MenuOutlinedIcon
          className={` md:hidden ${
            theme === "dark" ? "text-black" : "text-light-400"
          }`}
        />
      </button>
      <div className="dark:bg-primary-400 pl-1 pr-1 md:w-[20%] flex overflow-hidden">
        <input
          type="text"
          placeholder="Search"
          className=" outline-none w-[90%] rounded-xl text-light-400 pl-2 pr-2"
        />
        <SearchIcon sx={{ color: "white" }} />
      </div>
      {/*icons*/}
      <div
        className={` md:flex dark:text-light-400 pl-2 pr-2 md:w-[18%]   ${
          theme === "dark" ? "bg-primary-500" : "bg-inherit"
        }`}
      >
        <button className="mr-4" onClick={toggleTheme}>
          {theme === "dark" ? <NightlightIcon /> : <Brightness4Icon />}
        </button>
        <div className="hidden md:flex justify-between w-[70%] ">
          <NotificationsIcon />
          <SettingsIcon />
          <PersonOutlineIcon />
        </div>
      </div>
    </nav>
  );
};

export default Header;
