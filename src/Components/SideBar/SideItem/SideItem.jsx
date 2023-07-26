import { useState } from "react";
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
        <svg
          className={`${isOpen}`}
          width="16"
          height="16"
          viewBox="0 0 16 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg">
          <path
            d="M6 12L10 8L6 4"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
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
