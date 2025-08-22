import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./pages/Dashboard";
import Geography from "./pages/Geography";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Calendar from "./pages/Calendar";
import Faq from "./pages/Faq";
import Invoices from "./pages/Invoices";
import Line from "./pages/Line";
import Pie from "./pages/Pie";
import Bar from "./pages/Bar";
import Profile from "./pages/Profile";
import Home from "./pages/Home";
import { useSidebar } from "./context/SideBarContext";
import { useEffect } from "react";

function App() {
  const { closeSidebar } = useSidebar();

  useEffect(() => {
    closeSidebar();
  }, []);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}>
          <Route index element={<Dashboard />} />
          <Route path="/team" element={<Team />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/invoices" element={<Invoices />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/calendar" element={<Calendar />} />
          <Route path="/faq" element={<Faq />} />
          <Route path="/barchart" element={<Bar />} />
          <Route path="/piechart" element={<Pie />} />
          <Route path="/linechart" element={<Line />} />
          <Route path="/geochart" element={<Geography />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
