import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import AppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { Link, NavLink } from "react-router-dom";
import logo from "./../../../resources/logo.svg";
import itemOne from './../../../resources/itemOne.svg';
import itemTwo from './../../../resources/itemTwo.svg';
import itemThree from './../../../resources/itemThree.svg';
import itemFour from './../../../resources/itemFour.svg';
import itemFive from './../../../resources/itemFive.svg';
import itemSix from './../../../resources/itemSix.svg';
import itemSeven from './../../../resources/itemSeven.svg';
import Company from "../../Company/Company/Company";
import './Drawer.css';
import { styled } from "@mui/system";

const drawerWidth = 162;
const drawerHeight = '100%';



export default function PermanentDrawerLeft() {

    const drawerStyle = {
        backgroundColor: 'red',
        width: drawerWidth,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: 'border-box'
        }
    }
    const isActive = {
        backgroundColor: '#fff',
        padding: '25px 100px 5px 20px',
        marginLeft: '28%',
        borderRadius: '30px',
    }
    
  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />

      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          height: drawerHeight,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="permanent"
        anchor="left"
        style={{ backgroundColor: "red" }}
      >
        <Toolbar className="drawer-empty">
          <div className="drawer-div">
            <img src={logo} alt="" />
          </div>
        </Toolbar>
        <Divider />
        <Box className="drawer-full">
          <List style={{ textAlign: "center", marginTop: "20px" }}>
            <NavLink to="/company-setup" activeStyle={isActive}>
              <img src={itemOne} alt="" />
            </NavLink>
          </List>
          <List style={{ textAlign: "center", marginTop: "20px" }}>
            <Link to="/company-setup" activeStyle={isActive}>
              <img src={itemTwo} alt="" />
            </Link>
          </List>
          <List style={{ textAlign: "center", paddingTop: "20px" }}>
            <Link to="company-setup">
              <img src={itemThree} alt="" />
            </Link>
          </List>
          <List style={{ textAlign: "center", paddingTop: "20px" }}>
            <Link to="company-setup">
              <img src={itemFour} alt="" />
            </Link>
          </List>
          <List style={{ textAlign: "center", paddingTop: "20px" }}>
            <Link to="company-setup">
              <img src={itemFive} alt="" />
            </Link>
          </List>
          <List
            style={{
              textAlign: "center",
              paddingTop: "20px",
              paddingBottom: "20px",
            }}
          >
            <Link to="company-setup">
              <img src={itemSix} alt="" />
            </Link>
          </List>
          <Divider />
          <List style={{ textAlign: "center", paddingTop: "20px" }}>
            <Link to="company-setup">
              <img src={itemSeven} alt="" />
            </Link>
          </List>
          <List></List>
        </Box>
      </Drawer>
    </Box>
  );
}
