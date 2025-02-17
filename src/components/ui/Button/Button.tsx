import React, { FC } from "react";
import { IButtonProps } from "./Button.types";
import clsx from "clsx";

export const Button: FC<IButtonProps> = ({
  children,
  type = "button",
  onClick,
  //   variant,
  className,
}) => {
  return (
    <button
      type={type}
      className={clsx("bg-bgPrimary", className)}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
