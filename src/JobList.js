import React, { useEffect, useState } from "react";
import "./JobList.css";
import axios from "axios";
import ListElement from "./ListElement";
import Pagination from "./Pagination";

export default function JobList(props) {
  const [loaded, setLoaded] = useState(false);
  const [list, setList] = useState([]);
  const [CurrentPage, setCurrentPage] = useState(1);
  const [listPages] = useState(5);

  useEffect(() => {
    const getList = async () => {
      setLoaded(true);
      const response = await axios.get(
        `https://api.json-generator.com/templates/ZM1r0eic3XEy/data?access_token=wm3gg940gy0xek1ld98uaizhz83c6rh2sir9f9fu`
      );
      console.log(response.data);
      setList(response.data);
      setLoaded(false);
    };
    getList();
  }, []);

  const lastPageIndex = CurrentPage * listPages;
  const firstPageIndex = lastPageIndex - listPages;
  const currentPageNumber = list.slice(firstPageIndex, lastPageIndex);

  const paginate = (pageNumbers) => setCurrentPage(pageNumbers);
  const nextPage = () => setCurrentPage((prev) => prev + 1);
  const prevPage = () => setCurrentPage((prev) => prev - 1);

  return (
    <div className="JobList">
      {currentPageNumber.map((list_item, index) => (
        <div
          key={index}
          onMouseMove={() => {
            props.updateData(list_item);
          }}
        >
          <ListElement data={list_item} load={loaded} />
        </div>
      ))}
      <Pagination
        listPages={listPages}
        totalList={list.length}
        paginate={paginate}
        nextPage={nextPage}
        prevPage={prevPage}
        currentPageNumber={currentPageNumber}
      />
    </div>
  );
}
