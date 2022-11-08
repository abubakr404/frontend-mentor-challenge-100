const Pagination = ({ pages, setCurrentPage, currentPage }) => {
  const pageButtonToShow = 3;

  const firstPage = pages[0];
  const lastPage = pages[pages.length - 1];
  const spreter = <span className="spreter">...</span>;

  let pagesFiltered = pages.filter(
    (page) =>
      page !== firstPage &&
      page !== lastPage &&
      page < currentPage + pageButtonToShow &&
      page > currentPage - pageButtonToShow
  );

  return (
    pages.length > 0 && (
      <div className="pagination">
        <button
          onClick={() =>
            currentPage > firstPage && setCurrentPage(--currentPage)
          }
          className={currentPage === firstPage ? "disabled" : undefined}
        >
          Prev
        </button>

        <button
          onClick={() => setCurrentPage(firstPage)}
          className={currentPage === firstPage ? "active" : undefined}
        >
          {firstPage}
        </button>

        {currentPage - pageButtonToShow > firstPage && spreter}

        {pagesFiltered.map((page, i) => (
          <button
            key={i}
            onClick={() => setCurrentPage(page)}
            className={currentPage === page ? "active" : undefined}
          >
            {page}
          </button>
        ))}

        {currentPage + pageButtonToShow < lastPage && spreter}

        {lastPage > firstPage && (
          <button
            onClick={() => setCurrentPage(lastPage)}
            className={currentPage === lastPage ? "active" : undefined}
          >
            {lastPage}
          </button>
        )}

        <button
          onClick={() =>
            currentPage < lastPage && setCurrentPage(++currentPage)
          }
          className={currentPage === lastPage ? "disabled" : undefined}
        >
          Next
        </button>
      </div>
    )
  );
};

export default Pagination;
