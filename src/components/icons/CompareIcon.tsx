const CompareIcon = ({ isDark = true, size }: { isDark?: boolean; size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : 16}
      height={size ? size : 16}
      viewBox="0 0 16 16`"
      fill={isDark ? "#ffffff" : "#000000"}
    >
      <path
        d="M10.08 7L11.08 8L14.52 4.55L11 1L10 2L11.8 3.8H2.00004V5.2H11.82L10.08 7ZM5.86004 9L4.86004 8L1.42004 11.5L4.91004 15L5.91004 14L4.10004 12.2H14V10.8H4.10004L5.86004 9Z"
        fill="white"
      />
    </svg>
  );
};

export default CompareIcon;
