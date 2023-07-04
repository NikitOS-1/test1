import { useState } from "react";
import arrowRight from "../../../Assets/arrowRight.png";

const SideItem = ({ icon, title, item }) => {
  const [items, setItems] = useState(item);
  const [isOpen, setIsOpen] = useState("close");

  const openMenu = () => {
    setIsOpen((prev) => (prev === "open" ? "close" : "open"));
  };

  return (
    <div className="sidebar">
      <div className="sidebar_label" onClick={openMenu}>
        <img src={icon} alt="icon" className="sidebar_icon" />
        <span>{title}</span>
        <img src={arrowRight} alt="arrow" className={`arrow_` + `${isOpen}`} />
      </div>
      <div className={`sidebar_hiden_menu ` + `${isOpen}`}>
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
