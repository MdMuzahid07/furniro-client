"use client";

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  showNext?: boolean;
  style?: string;
}

const PaginationBar = ({
  currentPage,
  totalPages,
  onPageChange,
  showNext = true,
  style,
}: PaginationProps) => {
  // calculate which page numbers to show
  const getPageNumbers = () => {
    // for simplicity, show up to 3 page numbers
    const pageNumbers = [];

    // always include pages around the current page
    for (let i = Math.max(1, currentPage - 1); i <= Math.min(totalPages, currentPage + 1); i++) {
      pageNumbers.push(i);
    }

    return pageNumbers;
  };

  return (
    <div className={`flex items-center gap-[30px] sm:gap-[38px] ${style}`}>
      {getPageNumbers()?.map((page) => (
        <button
          key={page}
          onClick={() => onPageChange(page)}
          className={`flex h-[40px] w-[40px] items-center justify-center rounded-[10px] text-base text-[20px] transition-colors sm:h-[50px] sm:w-[50px] md:h-[60px] md:w-[60px] ${page === currentPage ? "bg-primary text-background" : "bg-quaternary text-dark hover:bg-primary hover:text-background"} `}
          aria-current={page === currentPage ? "page" : undefined}
        >
          {page}
        </button>
      ))}

      {showNext && currentPage < totalPages && (
        <button
          onClick={() => onPageChange(currentPage + 1)}
          className="flex h-[40px] w-[70px] items-center justify-center rounded-[10px] bg-quaternary text-[20px] font-light text-dark transition-colors hover:bg-quaternary sm:h-[50px] sm:w-[80px] md:h-[60px] md:w-[98px]"
        >
          Next
        </button>
      )}
    </div>
  );
};

export default PaginationBar;
