import React from 'react';

const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  const pageNumbers = [];

  for (let i = 1; i <= totalPages; i++) {
    pageNumbers.push(i);
  }

  return (
    <ul className="pagination">
      {pageNumbers.map((number) => (
        <li key={number} className={currentPage === number ? 'active' : ''}>
          <button onClick={() => onPageChange(number)}>{number}</button>
        </li>
      ))}
    </ul>
  );
};

export default Pagination;
