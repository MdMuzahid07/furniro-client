const ArrowRightIcon = ({ size }: { size?: number }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size ? size : "24"}
      height={size ? size : "24"}
      viewBox="0 0 24 24"
      fill="none"
    >
      <path
        d="M9.00006 5L16.0001 12L9.00006 19"
        stroke="#B88E2F"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowRightIcon;
