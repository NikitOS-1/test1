import React from "react";
import "./Table.scss";

const Table = () => {
  const data = [
    {
      CustomerName: "Jane Cooper",
      Company: "Microsoft",
      PhoneNumber: "(225) 555-0118",
      Email: "jane@microsoft.com",
      Country: "United States",
      Status: "Active",
    },
    {
      CustomerName: "Floyd Miles",
      Company: "Yahoo",
      PhoneNumber: "(205) 555-0100",
      Email: "floyd@yahoo.com",
      Country: "Kiribati",
      Status: "Inactive",
    },
  ];

  return (
    <div className="grid-table">
      <div className="wrap-grid-header">
        <div className="grid-header">Customer Name</div>
        <div className="grid-header">Company</div>
        <div className="grid-header">Phone Number</div>
        <div className="grid-header">Email</div>
        <div className="grid-header">Country</div>
        <div className="grid-header">Status</div>
      </div>
      {data.map((item) => (
        <React.Fragment key={item.id}>
          <div className="wrap-grid-cell">
            <div className="grid-cell">{item.CustomerName}</div>
            <div className="grid-cell">{item.Company}</div>
            <div className="grid-cell">{item.PhoneNumber}</div>
            <div className="grid-cell">{item.Email}</div>
            <div className="grid-cell">{item.Country}</div>
            <div className="grid-cell">{item.Status}</div>
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Table;
