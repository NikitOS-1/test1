import "./AllCustomers.scss";
import Table from "../Components/Table/Table";
import searchIcon from "../Assets/search.png";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "http://hn.algolia.com/api/v1/search?";

const AllCustomers = () => {
  const [post, setPost] = useState([]);
  const [query, setQuery] = useState("react");
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(0);

  useEffect(() => {
    axios.get(BASE_URL + `query=${query}&page=${page - 1}`).then((data) => {
      setPost(data.data.hits);
      setPageQty(data.data.nbPages);
    });
  }, [query, page]);

  return (
    <div className="allCustomers">
      <div className="customer_wrapper">
        <div className="title">
          <p>All Customers</p>
          <span>Active Members</span>
        </div>
        <div className="search">
          <img src={searchIcon} alt="search" />
          <input type="text" placeholder="Search" />
        </div>
      </div>
      <Table post={post} />
      <div className="wrapper_data_nav">
        <div className="count_data">
          <span>Showing data 1 to 8 of 256K entries</span>
        </div>
        <div className="pagination">
          <Pagination
            count={pageQty}
            page={page}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={(_, num) => setPage(num)}
            style={{ width: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
};
export default AllCustomers;
