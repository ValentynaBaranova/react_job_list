import React from "react";
import "./JobPage.css";
import { FaShareAlt, FaRegBookmark, FaAngleLeft } from "react-icons/fa";
import { Link } from "react-router-dom";

export default function JobPage() {
  return (
    <div className="JobPage">
      <div className="page_container">
        <div>
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
          <din className="content_title">
            <div className="title">
              Arbeitsmediziner/-in / Betriebsmediziner/-in (m/w/d) oder einen
              Arzt/eine Ärztin (m/w/d) für die Weiterbildung zum Facharzt/ zur
              Fachärztin für Arbeitsmedizin (m/w/d)
            </div>
            <div className="salary">
              <div className="salary_number">€ 54 000—60 000</div>
              <div className="info_term">Brutto, per year</div>
            </div>
          </din>
          <div className="content">
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
            <br />
          </div>
          <a href="/" className="apply_link">
            Apply now
          </a>

          <div className="info_block">
            <div className="title_block">Additional info</div>
            <div className="info_term">Employment type</div>
            <div className="choose_option_type">
              <button>Full time</button>
              <button>Part time</button>
              <button>Temporary</button>
            </div>

            <div className="info_term">Benefits</div>
            <div className="benefits">
              <button>Flexible shedule</button>
              <button>Relocation assistance</button>
            </div>
          </div>

          <div className="pictures_block">
            <div className="title_block">Attached images</div>
            <div className="galery">photo</div>
          </div>

          <Link to="/" className="back_link">
            <FaAngleLeft /> {"  "}RETURN TO JOB BOARD
          </Link>
        </div>
      </div>
    </div>
  );
}
