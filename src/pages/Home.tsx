import Header from "../components/Header";
import SideBar from "../components/SideBar";
import { Outlet } from "react-router-dom";
import { useTheme } from "../utils/theme";
type Props = {};

const Home = (props: Props) => {
  const { theme } = useTheme();
  return (
    <div
      className={`flex h-screen overflow-scroll  no-scrollbar ${
        theme === "dark" ? "bg-light-400" : "bg-primary-700"
      }`}
    >
      <SideBar />
      <main className="w-full md:w-[80%] md:ml-[20%] p-2   ">
        <Header />
        <Outlet />
      </main>
    </div>
  );
};

export default Home;
