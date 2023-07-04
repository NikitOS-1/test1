import { useEffect, useState } from "react";
import arrowRight from "../../../Assets/arrowRight.png";
import Item from "./Item/Item";

const SideItem = ({ icon, title, item }) => {
  const [items, setItems] = useState(item);
  const [isOpen, setIsOpen] = useState("close");

  const openMenu = () => {
    setIsOpen((prev) => (prev === "open" ? "close" : "open"));
  };

  return (
    <div>
      <div className="sidebar_label" onClick={openMenu}>
        <img src={icon} alt="icon" />
        <span>{title}</span>
        <img src={arrowRight} alt="arrow" className={`arrow_` + `${isOpen}`} />
      </div>
      <div className={`sidebar_hiden ` + `${isOpen}`}>
        {items.map((i) => (
          <div className="sidebar_hiden_menuItem" key={i.name}>
            <span>
              {i.name} link:{i.link}
            </span>
            {console.log(i)}
          </div>
        ))}
      </div>
    </div>
  );
};
export default SideItem;
