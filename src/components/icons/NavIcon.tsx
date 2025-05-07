const NavIcon = ({ isDark = true, size }: { isDark?: boolean; size?: number }) => {
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
      className="lucide lucide-menu-icon lucide-menu"
    >
      <path d="M4 12h16" />
      <path d="M4 18h16" />
      <path d="M4 6h16" />
    </svg>
  );
};

export default NavIcon;
