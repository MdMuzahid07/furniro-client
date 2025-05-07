const LoginIcon = ({ isDark = true, size }: { isDark?: boolean; size?: number }) => {
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
      className="lucide lucide-log-in-icon lucide-log-in"
    >
      <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
      <polyline points="10 17 15 12 10 7" />
      <line x1="15" x2="3" y1="12" y2="12" />
    </svg>
  );
};

export default LoginIcon;
