import React from "react";
import Card from "./Components/Card-to-Fruit";
const data = [
  {
    id: 1,
    name: "Kivi",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 2,
    name: "Piyoz",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 3,
    name: "Pomidor",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 4,
    name: "Torvuz",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 5,
    name: "Qovun",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 6,
    name: "Bodring",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 7,
    name: "Karam",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  { id: 8, name: "Sok", ucm: "02", size: "02", price: "$8.99", total: "$0.00" },
  {
    id: 9,
    name: "Tomat",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
  {
    id: 10,
    name: "Qalampir",
    ucm: "02",
    size: "02",
    price: "$8.99",
    total: "$0.00",
  },
];
function FruitsCard() {
  return (
    <div className="Fruits">
      {data.map((el) => {
        return (
          <div>
            <Card data={el} />
          </div>
        );
      })}
    </div>
  );
}

export default FruitsCard;
