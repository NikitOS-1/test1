import React, { useEffect, useState } from "react";
import "./Table.scss";
import Status from "./Status/Status";

const Table = ({ post }) => {
  const [data, setData] = useState([]);
  useEffect(() => {
    setData(post);
  }, []);
  console.log(data);
  return (
    <div className="grid-table">
      <div className="wrap-grid-header">
        <div className="grid-header">Customer Name</div>
        <div className="grid-header">Company</div>
        <div className="grid-header">Phone Number</div>
        <div className="grid-header">Email</div>
        <div className="grid-header">Country</div>
        <div className="grid-header">Status</div>
      </div>
      {data.map((item) => (
        <React.Fragment>
          <div className="wrap-grid-cell">
            <div className="grid-cell">{}</div>
            <div className="grid-cell">{}</div>
            <div className="grid-cell">{}</div>
            <div className="grid-cell">{}</div>
            <div className="grid-cell">{}</div>
            <Status />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Table;
