import React from "react";

interface ErrorMessageProps {
  children: string;
}

const ErrorMessage = ({ children }: ErrorMessageProps) => {
  return <p>{children}</p>;
};

export default ErrorMessage;
