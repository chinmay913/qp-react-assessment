interface TodoPaginationProps {
  currentPage: number;
  totalPage: number;
  handlePrevPage: () => void;
  handleNextPage: () => void;
}
function TodoPagination({
  currentPage,
  handlePrevPage,
  handleNextPage,
  totalPage,
}: TodoPaginationProps) {
  return (
    <div
      className='pagination'
      role='pagination'
    >
      <p>
        Page: {currentPage + 1} - {totalPage + 1}
      </p>
      <button
        onClick={handlePrevPage}
        role='pagination_prev'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          width={32}
          height={32}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M15.75 19.5L8.25 12l7.5-7.5'
          />
        </svg>
      </button>
      <button
        onClick={handleNextPage}
        role='pagination_next'
      >
        <svg
          xmlns='http://www.w3.org/2000/svg'
          fill='none'
          viewBox='0 0 24 24'
          strokeWidth={1.5}
          stroke='currentColor'
          width={32}
          height={32}
        >
          <path
            strokeLinecap='round'
            strokeLinejoin='round'
            d='M8.25 4.5l7.5 7.5-7.5 7.5'
          />
        </svg>
      </button>
    </div>
  );
}

export default TodoPagination;
