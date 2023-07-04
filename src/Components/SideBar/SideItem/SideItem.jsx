import { useState } from "react";
import arrowRight from "../../../Assets/arrowRight.png";

const SideItem = ({ icon, title, item }) => {
  const [isOpen, setIsOpen] = useState("none");

  const openMenu = () => {
    setIsOpen((prev) => (prev === "block" ? "none" : "block"));
  };

  return (
    <div className="sidebar">
      <div className="sidebar_label" onClick={openMenu}>
        <img src={icon} alt="icon" className="sidebar_icon" />
        <span>{title}</span>
        <img src={arrowRight} alt="arrow" className={`${isOpen}`} />
      </div>
      <div className="sidebar_hiden_menu" style={{ display: `${isOpen}` }}>
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
