import React, { useState } from "react";
import "./Table.scss";
import Status from "./Status/Status";

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
    {
      CustomerName: "Ronald Richards",
      Company: "Adobe",
      PhoneNumber: "(302) 555-0107",
      Email: "ronald@adobe.com",
      Country: "Israel",
      Status: "Inactive",
    },
    {
      CustomerName: "Marvin McKinney",
      Company: "Tesla",
      PhoneNumber: "(252) 555-0126",
      Email: "marvin@tesla.com",
      Country: "Iran",
      Status: "Active",
    },
    {
      CustomerName: "Jerome Bell",
      Company: "Google",
      PhoneNumber: "(629) 555-0129",
      Email: "jerome@google.com",
      Country: "Réunion",
      Status: "Active",
    },
    {
      CustomerName: "Kathryn Murphy",
      Company: "Microsoft",
      PhoneNumber: "(406) 555-0120",
      Email: "kathryn@microsoft.com",
      Country: "Curaçao",
      Status: "Active",
    },
    {
      CustomerName: "Jacob Jones",
      Company: "Yahoo",
      PhoneNumber: "(208) 555-0112",
      Email: "jacob@yahoo.com",
      Country: "Brazil",
      Status: "Active",
    },
    {
      CustomerName: "Kristin Watson",
      Company: "Facebook",
      PhoneNumber: "(704) 555-0127",
      Email: "kristin@facebook.com",
      Country: "Åland Islands",
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
            <Status status={item.Status} />
          </div>
        </React.Fragment>
      ))}
    </div>
  );
};

export default Table;
