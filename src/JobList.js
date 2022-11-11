import React from "react";
import Img from "./img/01.png";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";
import "./JobList.css";
import { Link } from "react-router-dom";

export default function JobList() {
  return (
    <div className="JobList">
      <div className="page_container_list">
        <img src={Img} alt="" />
        <div className="content_list">
          <div>
            <h2>
              <Link to="/job_page">
                Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
                Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
                Fachärztin für Arbeitsmedizin (m/w/d)
              </Link>
            </h2>
          </div>
          <h3>
            Department name • Allgemeines Krankenhaus der Stadt Wien - AKH
          </h3>
          <h3>
            <FaMapMarkerAlt /> Vienna, Austria
          </h3>
        </div>
        <div className="rating">*******</div>
        <div className="right_block">
          <div className="bookmark">
            <FaRegBookmark />
          </div>
          <h3 className="post_time">Posted 2 days ago</h3>
        </div>
      </div>
    </div>
  );
}
