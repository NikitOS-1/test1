import React, { useEffect, useState } from "react";
import "./Table.scss";
import Status from "./Status/Status";

const Table = ({ todo }) => {
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
      {todo.map((item) => (
        <React.Fragment key={item.id}>
          <div className="wrap-grid-cell">
            <div className="grid-cell">{item.userId}</div>
            <div className="grid-cell">{item.title}</div>
            <div className="grid-cell">{item.id}</div>
            <div className="grid-cell">{}</div>
            <div className="grid-cell">{}</div>
            <Status status={item.completed} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Table;
