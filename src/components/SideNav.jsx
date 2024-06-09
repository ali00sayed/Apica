import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import ArrowIcon from "../../src/assets/icons/ArrowIcon";
import ApicaIcon from "../assets/icons/ApicaIcon";
import ApicaLogo from "../assets/image/apica-logo-white-2022.png";
import { NavItem } from "../constants/global.constant";
import { cn } from "../utils/twMerge";

function Sidebar() {
  const location = useLocation();

  const [isNavOpen, setIsNavOpen] = useState(false);

  const toggleNavigation = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <div
      className={cn(
        "transition-width ease-linear h-screen overflow-auto border-r border-default-400",
        {
          "w-[200px]": isNavOpen,
          "w-[72px]": !isNavOpen,
        }
      )}
    >
      <div className="w-full pl-2 my-6 h-10 mx-2">
        {isNavOpen ? (
          <img src={ApicaLogo} className="w-24" alt="Apica Image" />
        ) : (
          <ApicaIcon className="w-full" />
        )}
      </div>

      <div className="space-y-4">
        {NavItem.map((list) => (
          <Link
            key={list.name}
            to={list.link}
            className={cn(
              "flex items-center space-x-2 m-2 p-2 rounded text-sm font-medium",
              {
                "bg-default-200 text-primary": location.pathname === list.link,
              }
            )}
          >
            <div
              className={cn({
                "w-full flex items-center justify-center": !isNavOpen,
              })}
            >
              <list.icon style={{ width: "18px" }} />
            </div>
            {isNavOpen && <p className="whitespace-nowrap">{list.name}</p>}
          </Link>
        ))}
      </div>

      {/* Arrow toggle btn */}

      <div className="fixed left-0 bottom-0 h-14 pt-3 pl-6 sm:hidden">
        <div className="rotate-180">
          <button
            className={cn(
              "w-7 h-7 flex items-center ease-smooth duration-300 transition-transform transform justify-center rounded-full border-2 text-default-500 border-default-200",
              {
                "rotate-180": isNavOpen,
              }
            )}
            onClick={toggleNavigation}
          >
            <ArrowIcon className="w-7" />
          </button>
        </div>
      </div>
    </div>
  );
}

export default Sidebar;
