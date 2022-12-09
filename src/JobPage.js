import React from "react";
import "./JobPage.css";
import { FaShareAlt, FaRegBookmark, FaChevronLeft } from "react-icons/fa";
import { Link } from "react-router-dom";
import MapInfo from "./MapInfo";
import PostDate from "./PostDate";

export default function JobPage(props) {
  console.log(props.listForPage.location);

  return (
    <div className="JobPage">
      <div className="page_container">
        <div className="main_page_container">
          <div className="header">
            <div className="page_name">Job Details</div>
            <div className="action_links">
              <a href="/">
                <FaRegBookmark size={16} /> Save to my list
              </a>
              <a href="/">
                <FaShareAlt size={16} /> Share
              </a>
            </div>
          </div>
          <a href="/" className="apply_link">
            Apply now
          </a>
          <div className="content_title">
            <div className="title">
              {props.listForPage.title}
              <PostDate updatedAt={props.listForPage.updatedAt} />
            </div>

            <div className="salary">
              <div className="salary_number">{props.listForPage.salary}</div>
              <div className="info_term">Brutto, per year</div>
            </div>
          </div>
          <div className="content">{props.listForPage.description}</div>
          <a href="/" className="apply_link">
            Apply now
          </a>

          <div className="info_block">
            <div className="title_block">Additional info</div>
            <div className="info_term">Employment type</div>
            <div className="choose_option_type">
              {props.listForPage.employment_type.map((item_type, index) => (
                <button key={index}>{item_type}</button>
              ))}
            </div>

            <div className="info_term">Benefits</div>
            <div className="benefits">
              {props.listForPage.benefits.map((item_benef, index) => (
                <button key={index}>{item_benef}</button>
              ))}
            </div>
          </div>

          <div className="pictures_block">
            <div className="title_block">Attached images</div>
            <div className="galery">
              {props.listForPage.pictures.map((item_img, index) => (
                <img key={index} src={item_img} alt={index} />
              ))}
            </div>
          </div>

          <Link to="/" className="back_link">
            <FaChevronLeft size={25} />
            RETURN TO JOB BOARD
          </Link>
        </div>
        <div className="contacts">
          <MapInfo map_data={props.listForPage} />
        </div>
      </div>
    </div>
  );
}
