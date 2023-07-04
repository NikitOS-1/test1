import { useState } from "react";
import arrowRight from "../../../Assets/arrowRight.png";

const SideItem = ({ icon, title }) => {
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
    <div>
      <div className="sidebar_label" onClick={openMenu}>
        <img src={icon} alt="icon" />
        <span>{title}</span>
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
export default SideItem;
