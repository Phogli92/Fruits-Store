import React from 'react';
import product from './media/product.jpg'
import './css/FruitCard.css';
function CardToFruit(){
    return(
        <>
        <div className="card">
            <div className="img">
        <img src={product} alt="" />
            </div>
            <div className="product">
                <div className="osnova">
                    <h2>Celery Stalk</h2>
                    <button className='AddBtn'>Add</button>
                </div>
                <div className="info">
                    <p>UCM <span>02</span></p>
                    <p>PACK SIZE <span>02</span></p>
                    <p>PRICE <span>$8.99</span></p>
                    <p>TOTAL <span>$0.00</span></p>
                </div>
            </div>
        </div>
        </>
    )
}

export default CardToFruit;