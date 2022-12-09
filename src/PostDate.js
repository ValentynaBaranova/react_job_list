import React from "react";
import "./JobList.css";

export default function PostDate(props) {
  let date = new Date();
  let day = date.getDate();
  let postedDate = new Date(props.updatedAt);
  let postedDay = postedDate.getDate();
  let daysAgo = day - postedDay;

  if (day === postedDay) {
    return <h3 className="post_time">today</h3>;
  } else if (day > postedDay) {
    return <h3 className="post_time">{daysAgo} days ago</h3>;
  } else {
    return <h3 className="post_time">{postedDay} days ago</h3>;
  }
}
