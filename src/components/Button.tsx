import React from "react";

export interface ButtonProps {
  variant: "primary" | "secondary";
  size: "sm" | "md" | "lg";
  text: string;
  startIcon?: React.ReactNode;
  endIcon?: React.ReactNode;
  onClick: () => void;
}

export const Button = ({
  variant,
  size,
  text,
  startIcon,
  endIcon,
  onClick,
}: ButtonProps) => {
  const variantClasses =
    variant === "primary"
      ? "bg-blue-600 hover:bg-blue-700 text-white"
      : "bg-gray-200 hover:bg-gray-300 text-gray-800";

  const sizeClasses =
    size === "sm"
      ? "px-3 py-1 text-sm"
      : size === "md"
      ? "px-4 py-2 text-base"
      : "px-6 py-3 text-lg";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center gap-2 rounded-lg font-medium transition-all duration-200 ${variantClasses} ${sizeClasses}`}
    >
      {startIcon && <span className="flex items-center">{startIcon}</span>}
      <span>{text}</span>
      {endIcon && <span className="flex items-center">{endIcon}</span>}
    </button>
  );
};
