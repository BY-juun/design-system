import IconButton from "./IconButton";

interface NavigationBarProps {
  onBackButtonClick?: () => void;
  onCancelButtonClick?: () => void;
  title: string;
  color: "primary" | "white";
  showBackButton?: boolean;
  showCancelButton?: boolean;
}

export default function NavigationBar({
  title,
  color,
  showBackButton = false,
  showCancelButton = false,
  onBackButtonClick = () => {},
  onCancelButtonClick = () => {},
}: NavigationBarProps) {
  return (
    <div className={`w-full flex justify-between items-center text-base`}>
      <section className="flex items-center">
        {showBackButton && <IconButton alt="" iconPath="/icons/ic-back-left.svg" onClick={onBackButtonClick} />}
        <h2 className={`text-2xl text-${color} ${showBackButton && "ml-2"}`}>{title}</h2>
      </section>
      {showCancelButton && <IconButton alt="" iconPath="/icons/ic-cancel.svg" onClick={onCancelButtonClick} />}
    </div>
  );
}
