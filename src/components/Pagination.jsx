import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from './Icons';

export default function Pagination({
  currentPage,
  setCurrentPage,
  pageSize,
  setPageSize,
  totalItems
}) {
  const totalPages = Math.ceil(totalItems / pageSize) || 1;
  const startItem = totalItems === 0 ? 0 : (currentPage - 1) * pageSize + 1;
  const endItem = Math.min(currentPage * pageSize, totalItems);

  const handlePrev = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  const handleNext = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const pagesArray = Array.from({ length: totalPages }, (_, i) => i + 1);

  return (
    <div className="pagination">
      <div className="pagination-info">
        Showing <strong>{startItem}</strong> to <strong>{endItem}</strong> of <strong>{totalItems}</strong> entries
      </div>

      <div className="pagination-controls">
        <select
          value={pageSize}
          onChange={(e) => {
            setPageSize(Number(e.target.value));
            setCurrentPage(1);
          }}
          style={{
            padding: '6px 12px',
            borderRadius: '999px',
            border: '2px solid var(--border-color)',
            backgroundColor: '#ffffff',
            fontWeight: 700,
            fontSize: '0.8rem',
            marginRight: '8px',
            outline: 'none'
          }}
        >
          <option value={5}>5 per page</option>
          <option value={10}>10 per page</option>
          <option value={20}>20 per page</option>
        </select>

        <button
          className="page-btn"
          onClick={handlePrev}
          disabled={currentPage === 1}
          aria-label="Previous Page"
        >
          <ChevronLeftIcon size={16} />
        </button>

        {pagesArray.map((page) => (
          <button
            key={page}
            className={`page-btn ${page === currentPage ? 'active' : ''}`}
            onClick={() => setCurrentPage(page)}
          >
            {page}
          </button>
        ))}

        <button
          className="page-btn"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          aria-label="Next Page"
        >
          <ChevronRightIcon size={16} />
        </button>
      </div>
    </div>
  );
}
