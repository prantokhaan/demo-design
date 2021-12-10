import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import './Appbar.css';
import home from './../../../resources/home.svg';
import NotificationsIcon from '@mui/icons-material/Notifications';
import Badge from "@mui/material/Badge";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import { styled, alpha } from "@mui/material/styles";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import EditIcon from "@mui/icons-material/Edit";
import Divider from "@mui/material/Divider";
import ArchiveIcon from "@mui/icons-material/Archive";
import FileCopyIcon from "@mui/icons-material/FileCopy";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import maleUser from './../../../resources/male-user.png';
import { Link } from "react-router-dom";

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "right",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "right",
    }}
    {...props}
  />
))(({ theme }) => ({
  "& .MuiPaper-root": {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color: '#fff',
    background: 'transparent linear-gradient(0deg, #091E3A 0%, #2F80ED 50%, #2D9EE0 100%)',
    boxShadow:
      "rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px",
    "& .MuiMenu-list": {
      padding: "4px 0",
    },
    "& .MuiMenuItem-root": {
      "& .MuiSvgIcon-root": {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      "&:active": {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity
        ),
      },
    },
  },
}));

export default function ButtonAppBar() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const [anchorEl2, setAnchorEl2] = React.useState(null);
    const open = Boolean(anchorEl);
    const open2 = Boolean(anchorEl2);
    const handleClick = (event) => {
      setAnchorEl(event.currentTarget);
    };
    const handleClick2 = (event) => {
      setAnchorEl2(event.currentTarget);
    };
    const handleClose = () => {
      setAnchorEl(null);
    };
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" className="navbar">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2 }}
          ></IconButton>
          <Box
            sx={{ flexGrow: 1 }}
            style={{ marginLeft: "213px", marginTop: "30px" }}
          >
            <div style={{ display: "inline" }}>
              <img src={home} alt="" />
              <div
                style={{
                  marginLeft: "60px",
                  marginTop: "-80px",
                }}
              >
                <h4
                  style={{
                    fontSize: "20px",
                  }}
                >
                  Payment
                </h4>
                <p style={{ marginTop: "-25px", fontSize: "12px" }}>
                  Dashboard >{" "}
                  <span style={{ color: "#2F81ED" }}>Add Certificate</span>
                </p>
              </div>
            </div>
          </Box>
          <Box style={{ display: "flex" }} sx={{ mt: 3 }}>
            <Badge
              color="secondary"
              overlap="circular"
              variant="dot"
              sx={{ mt: 1 }}
            >
              <NotificationsIcon />
            </Badge>
            <div style={{ display: "flex" }}>
              <i
                className="fas fa-user-circle"
                style={{ fontSize: "45px", marginLeft: "40px" }}
              ></i>
              <h6
                style={{
                  fontWeight: 300,
                  fontSize: "14px",
                  marginTop: "-1px",
                  marginLeft: "10px",
                }}
              >
                Welcome, <br />{" "}
                <span style={{ fontWeight: 600, fontSize: "18px" }}>
                  Melinda M.
                </span>
              </h6>
              {/* <i className="fas fa-sort-down" style={{marginTop: '10px', marginLeft: '10px'}}></i> */}
              <div>
                <Button
                  id="demo-customized-button"
                  aria-controls="demo-customized-menu"
                  aria-haspopup="true"
                  aria-expanded={open ? "true" : undefined}
                  style={{ color: "#fff", marginLeft: "-20px" }}
                  sx={{ mt: 1 }}
                  disableElevation
                  onClick={handleClick}
                  endIcon={<KeyboardArrowDownIcon />}
                ></Button>
                <StyledMenu
                  id="demo-customized-menu"
                  MenuListProps={{
                    "aria-labelledby": "demo-customized-button",
                  }}
                  anchorEl={anchorEl}
                  open={open}
                  onClose={handleClose}
                >
                  <MenuItem onClick={handleClose} disableRipple>
                    <i
                      className="far fa-user-circle"
                      style={{ marginRight: "30px" }}
                    ></i>
                    Profile
                  </MenuItem>
                  <MenuItem disableRipple>
                    <i
                      className="fas fa-cog"
                      style={{ marginRight: "30px" }}
                    ></i>
                    Settings{" "}
                    <Button
                      id="demo-customized-button"
                      aria-controls="demo-customized-menu"
                      aria-haspopup="true"
                      aria-expanded={open2 ? "true" : undefined}
                      style={{ color: "#ffffff", marginLeft: "-20px" }}
                      disableElevation
                      onClick={handleClick2}
                      endIcon={<KeyboardArrowDownIcon />}
                    ></Button>
                  </MenuItem>
                  {open2 && (
                    <Box>
                      <MenuItem onClick={handleClose} disableRipple>
                        <i className="far" style={{ marginRight: "55px" }}></i>
                        <Link
                          to="/add-user"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          Add User
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <i className="far" style={{ marginRight: "55px" }}></i>
                        <Link
                          to="/add-user"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          Team Settings
                        </Link>
                      </MenuItem>
                      <MenuItem onClick={handleClose} disableRipple>
                        <i className="far" style={{ marginRight: "55px" }}></i>
                        <Link
                          to="/add-user"
                          style={{ color: "#fff", textDecoration: "none" }}
                        >
                          Company Settings
                        </Link>
                      </MenuItem>
                    </Box>
                  )}
                  <Divider sx={{ my: 0.5 }} />
                  <MenuItem onClick={handleClose} disableRipple>
                    <i
                      className="fas fa-sign-out-alt"
                      style={{ marginRight: "30px" }}
                    ></i>
                    Logout
                  </MenuItem>
                </StyledMenu>
              </div>
            </div>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
