import React from 'react'
import { menuItems } from "../utils/Constant";
import { Link, NavLink } from "react-router-dom";
import "./Menu.css"


export const Menu = () => {
  // const selectedTabStyle = {
  //   color: 'blue', 
  // };
  return (
    <>
      <ul className="d-flex gap-3 list-unstyled px-1 align-items-center text-white m-0 ps-4">
        {
          menuItems?.map((element, index) => {

            return (
              <>
                <li>
                  <Link to={element.link} className="text-white">{element.items}</Link>

                  <span> {element?.icon}</span>
                  {/* <NavLink className="" activeClassName="selected"
                    activeStyle={selectedTabStyle} to={element.link}>{element.items}</NavLink> */}

                </li >


              </>



            )
          })
        }
      </ul >
    </>
  )
}

