import React, { useState } from "react";
import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";

interface DefaultTextFieldProps extends React.HTMLAttributes<HTMLInputElement> {
  errorMessage: string;
  iconPath: string;
  onIconClick: React.MouseEventHandler<HTMLButtonElement>;
  placeholder: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
  iconAlt: string;
  value: string;
  isError: boolean;
}

const DefaultTextField = ({
  errorMessage,
  iconPath,
  onIconClick,
  iconAlt,
  isError,
  value,
  ...props
}: DefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div className="relative">
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input className="outline-none" type="text" value={value} {...props} />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && (
        <div className="absolute">
          <ErrorMessage>{errorMessage}</ErrorMessage>
        </div>
      )}
    </div>
  );
};

export default DefaultTextField;
