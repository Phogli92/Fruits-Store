import React from "react";
import product from "./media/product.jpg";
import "./css/FruitCard.css";
import { useState } from "react";
function CardToFruit(props) {
  const [add, SetAdd] = useState(0);
  let addText = "Add";
  const AddBtn = () => {
    SetAdd(add + 8.99);
  };
  return (
    <>
      <div className="card">
        <div className="img">
          <img src={product} alt="" />
        </div>
        <div className="product">
          <div className="osnova">
            <h2>{props.data.name}</h2>
            <button className="AddBtn" onClick={AddBtn}>
              {addText}
            </button>
          </div>
          <div className="info">
            <p>
              UCM <span>{props.data.ucm}</span>
            </p>
            <p>
              PACK SIZE <span>{props.data.size}</span>
            </p>
            <p>
              PRICE <span>{props.data.price}</span>
            </p>
            <p className="total">
              TOTAL <span>${add}</span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default CardToFruit;
