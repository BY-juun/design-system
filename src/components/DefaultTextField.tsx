import React, { useState } from "react";
import IconButton from "./IconButton";
import ErrorMessage from "./ErrorMessage";

interface DefaultTextFieldProps {
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
  onChange,
  onIconClick,
  placeholder,
  iconAlt,
  value,
  isError,
}: DefaultTextFieldProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const borderColor = isFocused
    ? "border-secondary"
    : !value
      ? "border-mono300"
      : "border-primary";

  return (
    <div>
      <div
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        className={`text-primary border-b ${borderColor}`}
      >
        <input
          className="outline-none"
          type="text"
          value={value}
          onChange={onChange}
          placeholder={placeholder}
        />
        {!!value && (
          <IconButton onClick={onIconClick} alt={iconAlt} iconPath={iconPath} />
        )}
      </div>
      {isError && <ErrorMessage>{errorMessage}</ErrorMessage>}
    </div>
  );
};

export default DefaultTextField;
