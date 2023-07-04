import "./SideBar.scss";
import SideItem from "./SideItem/SideItem";
import Person from "../Person/Person";

import logoIcon from "../../Assets/logo.svg";
import dashboardIcon from "../../Assets/dashboard.svg";
import productIcon from "../../Assets/product.svg";
import customersIcon from "../../Assets/customers.svg";
import incomeIcon from "../../Assets/income.svg";
import promoteIcon from "../../Assets/promote.svg";
import helpIcon from "../../Assets/help.svg";

const SideBar = () => {
  return (
    <div className="sidebar">
      <div>
        <header>
          <img src={logoIcon} alt="logo" />
          <h1>
            Dashboard<span>v.01</span>
          </h1>
        </header>
        <div className="select-item">
          <img src={dashboardIcon} alt="icon" />
          <span>Dashboard</span>
        </div>
        <SideItem
          icon={productIcon}
          title="Product"
          item={[
            { name: "Category", link: "#" },
            { name: "Favorite", link: "#" },
            { name: "Sale", link: "#" },
          ]}
        />
        <SideItem
          icon={customersIcon}
          title="Customers"
          item={[
            { name: "All Customers", link: "#" },
            { name: "Active Members", link: "#" },
          ]}
        />
        <SideItem
          icon={incomeIcon}
          title="Income"
          item={[
            { name: "First", link: "#" },
            { name: "Second", link: "#" },
          ]}
        />
        <SideItem
          icon={promoteIcon}
          title="Promote"
          item={[
            { name: "First", link: "#" },
            { name: "Second", link: "#" },
          ]}
        />
        <SideItem
          icon={helpIcon}
          title="Help"
          item={[
            { name: "Contact", link: "#" },
            { name: "About", link: "#" },
            { name: "Call Now", link: "#" },
          ]}
        />
      </div>
      <div className="person">
        <Person />
      </div>
    </div>
  );
};
export default SideBar;
