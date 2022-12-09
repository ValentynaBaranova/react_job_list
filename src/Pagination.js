import React, { useState } from "react";
import "./Pagination.css";
import { Link, useNavigate } from "react-router-dom";

export default function Pagination(props) {
  const pageNumbers = [];
  const [pag_page, setPag_page] = useState(0);
  const navigate = useNavigate();

  for (let i = 1; i <= Math.ceil(props.totalList / props.listPages); i++) {
    pageNumbers.push(i);
  }
  return (
    <div className="Pagination">
      <button className="prevBtn" onClick={() => props.prevPage()}>
        {"<"}
      </button>
      <ul>
        <li>
          <Link to="/" className="prevBtn" onClick={() => props.prevPage()}>
            {"<"}
          </Link>
        </li>

        {pageNumbers.map((number) => (
          <li key={number}>
            <Link
              to={`${number}`}
              onClick={() => {
                props.paginate(number);
                setPag_page(number);
              }}
            >
              {number}
            </Link>
          </li>
        ))}
      </ul>
      <button
        className="nextBtn"
        onClick={() => {
          props.nextPage();
          navigate(+1);
        }}
      >
        {">"}
      </button>
    </div>
  );
}
