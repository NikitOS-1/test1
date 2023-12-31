import "./AllCustomers.scss";
import Table from "../Components/Table/Table";
import searchIcon from "../Assets/search.png";
import { Pagination } from "@mui/material";
import axios from "axios";
import { useEffect, useState } from "react";

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";

const AllCustomers = () => {
  const [todo, setTodo] = useState([]);
  const [page, setPage] = useState(1);
  const [pageQty, setPageQty] = useState(13);
  const [enteredSearch, setEnteredSearch] = useState("");
  const [activeSearch, setActiveSearch] = useState("");

  useEffect(() => {
    let handlers = setTimeout(() => {
      axios.get(BASE_URL + `?_page=${page}&_limit=8`).then((res) => {
        setTodo(res.data);
        let dataFilter = [...todo];
        if (activeSearch) {
          dataFilter = dataFilter.filter((i) => i.id == activeSearch);
          setTodo(dataFilter);
        }
      });
    }, 301);
  }, [page, activeSearch]);

  useEffect(() => {
    let handler = setTimeout(() => {
      setActiveSearch(enteredSearch);
    }, 300);
  }, [enteredSearch]);

  return (
    <div className="allCustomers">
      <div className="customer_wrapper">
        <div className="title">
          <p>All Customers</p>
          <span>Active Members</span>
        </div>
        <div className="search">
          <img src={searchIcon} alt="search" />
          <input
            type="text"
            placeholder="Search"
            onChange={(e) => setEnteredSearch(e.target.value)}
          />
        </div>
      </div>
      <Table todo={todo} search={activeSearch} />
      <div className="wrapper_data_nav">
        <div className="count_data">
          <span>Showing data 1 to 8 of 256K entries</span>
        </div>
        <div className="pagination">
          {/* {!!pageQty && ( */}
          <Pagination
            count={pageQty}
            page={page}
            variant="outlined"
            shape="rounded"
            color="secondary"
            onChange={(_, num) => setPage(num)}
            style={{ width: "max-content" }}
          />
          {/* )} */}
        </div>
      </div>
    </div>
  );
};
export default AllCustomers;
