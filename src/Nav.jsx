import React from 'react';
import './Nav.css'
function NavBar(){
    return (
        <>
        <div className="header">
            <div className="nav">
            <div className="text">
                <button>Menu</button>
                    <h3>Golden Corral-Adison</h3>
            </div>
                <div className="search">
                    <button>Filter</button>
                    <input type="text" placeholder='Seacrh'/>
                </div>
            </div>
        </div>
        </>
    )
}

export default NavBar;