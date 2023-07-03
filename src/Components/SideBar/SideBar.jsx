import "./SideBar.scss";
import logoIcon from "../../Assets/logo.png";
import arrowRight from "../../Assets/arrowRight.png";
import { useState } from "react";

const SideBar = () => {
  const [currentStyleMenuItem, setCurrentStyleMenuItem] = useState(
    "sidebar_hiden close"
  );
  const openMenu = () => {
    setCurrentStyleMenuItem((prev) =>
      prev === "sidebar_hiden open"
        ? "sidebar_hiden close"
        : "sidebar_hiden open"
    );
  };
  return (
    <div className="sidebar">
      <header>
        <img src={logoIcon} alt="logo" />
        <h1>
          Dashboard<span>v.01</span>
        </h1>
      </header>
      <div className="sidebar_label" onClick={openMenu}>
        <img src={logoIcon} alt="icon" />
        <span>Product</span>
        <img src={arrowRight} alt="arrow" />
      </div>
      <div className={currentStyleMenuItem}>
        <div className="sidebar_hiden_menuItem">first</div>
        <div className="sidebar_hiden_menuItem">first</div>
        <div className="sidebar_hiden_menuItem">first</div>
      </div>
      <div className="sidebar_label" onClick={openMenu}>
        <img src={logoIcon} alt="icon" />
        <span>Product2</span>
        <img src={arrowRight} alt="arrow" />
      </div>
      <div className={currentStyleMenuItem}>
        <div className="sidebar_hiden_menuItem">first</div>
        <div className="sidebar_hiden_menuItem">first</div>
        <div className="sidebar_hiden_menuItem">first</div>
      </div>
    </div>
  );
};
export default SideBar;
