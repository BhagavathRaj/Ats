import React from "react";
import { NavLink } from "react-router-dom";
import Styles from "./Layouts.module.scss";
import { ListItemText, MenuItem } from "@mui/material";

const menuItems = [
  {
    id: 1,
    label: "Marketing Planner",
    to: "/marketing-planner",
  },
  {
    id: 2,
    label: "Mails Now",
    to: "/mails-now",
  },
  {
    id: 3,
    label: "Adwords",
    to: "/adwords",
  },
  {
    id: 4,
    label: "FB/Inst Ads",
    to: "/ads",
  },
];

const MenuList = () => {
  return (
    <div className={Styles.wrapper}>
      {menuItems.map((item) => (
        <NavLink
          key={item.id}
          to={item.to}
          style={{ textDecoration: "none" }}
         
        >
          <MenuItem
           disableRipple={true}
            sx={{
              padding: "15px 20px 15px 20px",
             
            }}
          >
            <ListItemText  sx={{ color: "black" }}>{item.label}</ListItemText>
          </MenuItem>
        </NavLink>
      ))}
    </div>
  );
};

export default MenuList;
