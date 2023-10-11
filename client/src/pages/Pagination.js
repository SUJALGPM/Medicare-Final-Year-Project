import React from "react";

const Pagination = ({ totalPosts, postPage, setCurrentPage }) => {
  let pages = [];
  for (let i = 1; i <= Math.ceil(totalPosts / postPage); i++) {
    pages.push(i);
  }

  return (
    <nav>
      <ul className="pagination">
        {pages.map((number) => (
          <li  key={number} className="page-item">
            <a
              onClick={() => setCurrentPage(number)}
              className="page-link"
              href="#!"
            >
              {number}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Pagination;
