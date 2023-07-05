import { useState } from "react";
import "./Status.scss";

const Status = ({ status }) => {
  const [isActive, setIsActive] = useState(status);
  let styleActive = { backgroundColor: "inherit" };
  if (isActive == "Active") {
    styleActive = {
      backgroundColor: "#16C09861",
      border: "1px solid #00B087",
      color: "#00B087",
    };
  } else {
    styleActive = {
      backgroundColor: "#FFC5C5",
      border: "1px solid #DF0404",
      color: "#DF0404",
    };
  }

  return (
    <div className="status" style={styleActive}>
      {isActive}
    </div>
  );
};
export default Status;
