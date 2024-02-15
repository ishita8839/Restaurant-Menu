import React, { useState } from 'react'
import './style.css'
import Menu from './menuApi.js'
import MenuCard from './MenuCard.js'
import Navbar from './Navbar.js'

const uniqueList = [...new Set(Menu.map((curElement) =>{
    return curElement.category
})), "All"]
console.log(uniqueList)

const Restaurant = () => {

    const [menuData , setMenuData] = useState(Menu);
    console.log(menuData)
    const [menuList , setMenuList] = useState(uniqueList);

    const filterItem = (catgeory) =>{
        if(catgeory === "All"){
            // setMenuList([true, ...uniqueList]); 
            setMenuData(Menu);                  
            return;
        }
        const updatedList = Menu.filter((curElement) =>{
            return curElement.category === catgeory;

        })
        setMenuData(updatedList)

    }


  return (
    <>
    <Navbar filterItem={filterItem} menuList= {menuList}/>
   <MenuCard menuData = { menuData}/>
    </>
 
  )
}

export default Restaurant
