import React from "react";

const CopyrightIcon = ({ isDark = true, size }: { isDark?: boolean; size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 28}
      height={size ? size : 28}
      viewBox="0 0 28 28"
      fill={isDark ? "#ffffff" : "#000000"}
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="lucide lucide-copyright-icon lucide-copyright"
    >
      <circle cx="12" cy="12" r="10" />
      <path d="M14.83 14.83a4 4 0 1 1 0-5.66" />
    </svg>
  );
};
export default CopyrightIcon;
