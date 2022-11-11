import React from "react";
import Img from "./img/01.png";
import { FaMapMarkerAlt, FaRegBookmark } from "react-icons/fa";

import "./JobList.css";

export default function JobList() {
  return (
    <div className="JobList">
      <img src={Img} alt="" />
      <div className="content">
        <h2>
          Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
          Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
          Fachärztin für Arbeitsmedizin (m/w/d)
        </h2>
        <h3>Department name • Allgemeines Krankenhaus der Stadt Wien - AKH</h3>
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
  );
}
