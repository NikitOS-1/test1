import "./SideBar.scss";
import logoIcon from "../../Assets/logo.png";
import SideItem from "./SideItem/SideItem";

const SideBar = () => {
  return (
    <div className="sidebar">
      <header>
        <img src={logoIcon} alt="logo" />
        <h1>
          Dashboard<span>v.01</span>
        </h1>
      </header>
      <SideItem
        icon={logoIcon}
        title="Product"
        item={[
          { name: "Category", link: "#" },
          { name: "Favorite", link: "#" },
          { name: "Sale", link: "#" },
        ]}
      />
    </div>
  );
};
export default SideBar;
