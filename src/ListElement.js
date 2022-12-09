import React from "react";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import "./JobList.css";
import { Link } from "react-router-dom";
import PostDate from "./PostDate";
import Location from "./Location";
import RatingInfo from "./RatingInfo";

export default function ListElement(props) {
  let pictures =
    props.data.pictures[Math.floor(Math.random() * props.data.pictures.length)];

  if (props.load) {
    return "Loading...";
  } else {
    return (
      <div className="page_container_list">
        <div className="left_side">
          <img src={pictures} alt="photo_job" />
          <div className="content_list">
            <div>
              <h2>
                <Link to="job_page">{props.data.title}</Link>
              </h2>
            </div>
            <h3>Department name {props.data.name}</h3>
            <h3>
              <FaMapMarkerAlt /> <Location location={props.data.location} />
              {", "}
              {props.data.address}
            </h3>
          </div>
        </div>
        <div className="right_side">
          <div className="rating">
            <RatingInfo />
          </div>
          <div className="right_block">
            <div className="bookmark">
              <FaRegBookmark />
            </div>
            <PostDate updatedAt={props.data.updatedAt} />
          </div>
        </div>
      </div>
    );
  }
}
