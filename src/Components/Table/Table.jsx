import React, { useEffect, useState } from "react";
import "./Table.scss";
import Status from "./Status/Status";
import axios from "axios";

const BASE_URL = "http://hn.algolia.com/api/v1/search?";

const Table = () => {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);
  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then((data) => {
      setPost(data.data.hits);
      setPageQty(data.data.nbPages);
    });
  }, []);
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
      {/* {data.map((item) => (
        <React.Fragment key={item.CustomerName}>
          <div className="wrap-grid-cell">
            <div className="grid-cell">{item.CustomerName}</div>
            <div className="grid-cell">{item.Company}</div>
            <div className="grid-cell">{item.PhoneNumber}</div>
            <div className="grid-cell">{item.Email}</div>
            <div className="grid-cell">{item.Country}</div>
            <Status status={item.Status} />
          </div>
        </React.Fragment>
      ))} */}
    </div>
  );
};

export default Table;
