import React from 'react';

const Navbar = ({ filterItem, menuList }) => {
    return (
        <>
            <nav className='navbar'>
                <div className="btn-group">
                    {
                        menuList.map((curElement, index) => (
                            <button className='btn-group__item' key={index} onClick={() => filterItem(curElement)}>
                                {curElement}
                            </button>
                        ))
                    }
                </div>
            </nav>
        </>
    );
};

export default Navbar;

