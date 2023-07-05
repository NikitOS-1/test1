import "./AllCustomers.scss";
import Table from "../Components/Table/Table";
import searchIcon from "../Assets/search.png";
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
    </div>
  );
};
export default AllCustomers;
