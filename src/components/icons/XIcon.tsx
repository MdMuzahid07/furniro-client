const XIcon = ({ isDark = true, size }: { isDark?: boolean; size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 28}
      height={size ? size : 28}
      viewBox="0 0 28 28"
      fill={isDark ? "#ffffff" : "#000000"}
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
      className="lucide lucide-x-icon lucide-x"
    >
      <path d="M18 6 6 18" />
      <path d="m6 6 12 12" />
    </svg>
  );
};

export default XIcon;
