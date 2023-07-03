import React from "react";
import "./Table.css";

const Table = () => {
  const data = [
    {
      id: 1,
      name: "Item 1",
      price: "$10",
      stock: 15,
      category: "Category A",
      description: "Description for Item 1",
    },
    {
      id: 2,
      name: "Item 2",
      price: "$15",
      stock: 8,
      category: "Category B",
      description: "Description for Item 2",
    },
    {
      id: 3,
      name: "Item 2",
      price: "$15",
      stock: 8,
      category: "Category B",
      description: "Description for Item 2",
    },
    // Добавьте другие элементы таблицы
  ];

  return (
    <section>
      <div className="grid-table">
        <div className="grid-header">ID</div>
        <div className="grid-header">Name</div>
        <div className="grid-header">Price</div>
        <div className="grid-header">Stock</div>
        <div className="grid-header">Category</div>
        <div className="grid-header">Description</div>
        {data.map((item) => (
          <React.Fragment key={item.id}>
            <div className="grid-cell">{item.id}</div>
            <div className="grid-cell">{item.name}</div>
            <div className="grid-cell">{item.price}</div>
            <div className="grid-cell">{item.stock}</div>
            <div className="grid-cell">{item.category}</div>
            <div className="grid-cell">{item.description}</div>
          </React.Fragment>
        ))}
      </div>
    </section>
  );
};

export default Table;
