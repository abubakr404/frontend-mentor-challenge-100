import { useEffect } from "react";
const Pagination = ({
  data,
  setCurrentPage,
  currentPage,
  setCurrentCountries,
  countriesPerPage,
}) => {
  const pageButtonToShow = 3;

  const IndexOfLastCountry = currentPage * countriesPerPage;
  const IndexOfFirstCountry = IndexOfLastCountry - countriesPerPage;

  useEffect(() => {
    const visableCountries = data.slice(
      IndexOfFirstCountry,
      IndexOfLastCountry
    );
    setCurrentCountries(visableCountries);
  }, [IndexOfFirstCountry, IndexOfLastCountry, data, setCurrentCountries]);

  let pages = [];
  for (let i = 1; i <= Math.ceil(data.length / countriesPerPage); i++)
    pages.push(i);

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
            currentPage > firstPage && setCurrentPage((prevPage) => --prevPage)
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
            currentPage < lastPage && setCurrentPage((prevPage) => ++prevPage)
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
