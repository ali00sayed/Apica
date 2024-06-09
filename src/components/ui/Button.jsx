import { cn } from "../../utils/twMerge";

const Button = ({ children, onClick, type = "button", className }) => {
  return (
    <button type={type} className={cn("btn", className)} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;
