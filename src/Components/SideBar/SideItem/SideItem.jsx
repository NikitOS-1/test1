import { useState } from "react";
import arrowRight from "../../../Assets/arrowRight.png";
import "./SideItem.scss";
const SideItem = ({ icon, title, item }) => {
  const [isOpen, setIsOpen] = useState("none");

  const openMenu = () => {
    setIsOpen((prev) => (prev === "block" ? "none" : "block"));
  };

  return (
    <div className="sidebar_wrraper">
      <div className="sidebar_label" onClick={openMenu}>
        <div className="sidebar_container">
          <img src={icon} alt="icon" className="sidebar_icon" />
          <span>{title}</span>
        </div>
        <img src={arrowRight} alt="arrow" className={`${isOpen}`} />
      </div>
      <div className={"sidebar_hiden_menu"} style={{ display: `${isOpen}` }}>
        {item.map((i) => (
          <div className="sidebar_hiden_menuItem" key={i.name}>
            <span>{i.name}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideItem;
