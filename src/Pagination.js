import React from "react";
import "./Pagination.css";

export default function Pagination(props) {
  const pageNumbers = [];

  for (let i = 1; i <= Math.ceil(props.totalList / props.listPages); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination">
      <button className="prevBtn" onClick={() => props.prevPage()}>
        {"<"}
      </button>
      <ul>
        {pageNumbers.map((number) => (
          <li key={number}>
            <a href="/" onClick={() => props.paginate(number)}>
              {number}
            </a>
          </li>
        ))}
      </ul>
      <button className="nextBtn" onClick={() => props.nextPage()}>
        {">"}
      </button>
    </div>
  );
}
