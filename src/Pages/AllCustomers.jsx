import "./AllCustomers.scss";
import Table from "../Components/Table/Table";
import searchIcon from "../Assets/search.png";
import { Pagination } from "@mui/material";

const AllCustomers = () => {
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
      <Table />
      <div className="wrapper_data_nav">
        <div className="count_data">
          <span>Showing data 1 to 8 of 256K entries</span>
        </div>
        <div className="pagination">
          <Pagination
            count={40}
            variant="outlined"
            shape="rounded"
            color="secondary"
            style={{ width: "max-content" }}
          />
        </div>
      </div>
    </div>
  );
};
export default AllCustomers;
