import { BellIcon } from "@radix-ui/react-icons";
import SettingIcon from "../assets/icons/SettingIcon";

const Header = () => {
  return (
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-5">
        <h1 className="text-xl">Search Fusion</h1>
      </div>

      <div className="flex space-x-7 cursor-pointer">
        <BellIcon width={22} height={24} />

        <div>
          <SettingIcon width={24} height={24} />
        </div>
      </div>
    </div>
  );
};

export default Header;
