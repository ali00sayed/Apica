import { BrowserRouter, Route, Routes } from "react-router-dom";
import Analytics from "./pages/Analytics";
import Header from "./components/Header";
import SideNav from "./components/SideNav";
import Home from "./pages/Home";
import Nopage from "./pages/Nopage";
import Overview from "./pages/Overview";
import Reports from "./pages/Reports";
// import {Overview, Reports, Analytics, Home, Nopage  } from './pages'

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="flex">
          <SideNav />
          <div className="w-full flex flex-col h-screen">
            <div className="border-b border-default-400 py-3 px-4">
              <Header />
            </div>
            <div className="overflow-auto m-4 sm:mx-0">
              <Routes>
                <Route index element={<Home />} />
                <Route path="/overview" element={<Overview />} />
                <Route path="/report" element={<Reports />} />
                <Route path="/analytics" element={<Analytics />} />
                <Route path="*" element={<Nopage />} />
              </Routes>
            </div>
          </div>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
