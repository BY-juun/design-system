type PrimaryButtonTheme = "dark" | "light" | "social" | "modal";

interface PrimaryButtonProps {
  theme?: PrimaryButtonTheme;
  children: string;
  disabled?: boolean;
  onClick: () => void;
}

const dark = "bg-primary text-white";
const light = "bg-white text-primary";
const social = "bg-social text-white";
const modal = "text-white";
const disabledStyle = "disabled:bg-mono100 disabled:text-mono200";

const color: Record<PrimaryButtonTheme, string> = {
  dark,
  light,
  social,
  modal,
};

export default function PrimaryButton({ onClick, theme = "dark", disabled = false, children }: PrimaryButtonProps) {
  return (
    <button
      className={`
        rounded-default
        text-center
        text-base
        w-full
        h-[59px]
        ${disabledStyle} 
        ${color[theme]}`}
      disabled={disabled}
      type="button"
      onClick={onClick}
    >
      {children}
    </button>
  );
}
