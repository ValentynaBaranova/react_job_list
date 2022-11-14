import React from "react";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import "./JobList.css";

import { Link } from "react-router-dom";

export default function ListElement(props) {
  let pictures = props.data.pictures[Math.floor(Math.random() * 2)];

  if (props.load) {
    return "Loading...";
  } else {
    return (
      <div className="page_container_list">
        <div className="left_side">
          <img src={pictures} alt="" />
          <div className="content_list">
            <div>
              <h2>
                <Link to="/job_page">{props.data.title}</Link>
              </h2>
            </div>
            <h3>Department name {props.data.name}</h3>
            <h3>
              <FaMapMarkerAlt /> {props.data.address}
            </h3>
          </div>
        </div>
        <div className="right_side">
          <div className="rating">*******</div>
          <div className="right_block">
            <div className="bookmark">
              <FaRegBookmark />
            </div>
            <h3 className="post_time">posted 2 days ago</h3>
          </div>
        </div>
      </div>
    );
  }
}
