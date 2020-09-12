import React from "react";
import NotificationsNoneOutlinedIcon from "@material-ui/icons/NotificationsNoneOutlined";
import GetAppOutlinedIcon from "@material-ui/icons/GetAppOutlined";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { withStyles } from "@material-ui/core/styles";
import HelpOutlineOutlinedIcon from "@material-ui/icons/HelpOutlineOutlined";
import SearchOutlinedIcon from "@material-ui/icons/SearchOutlined";
import PersonAddOutlinedIcon from "@material-ui/icons/PersonAddOutlined";
import AssignmentTurnedInOutlinedIcon from "@material-ui/icons/AssignmentTurnedInOutlined";

import Badge from "@material-ui/core/Badge";
import "./Navbar.scss";

const Navbar = (props) => {
  const StyledBadge = withStyles((theme) => ({
    badge: {
      right: -7,
      top: -1,
      background: "#fff",
      color: "#2a2f4d",
    },
  }))(Badge);

  const StyledBadgeAvatar = withStyles((theme) => ({
    badge: {
      backgroundColor: "#E34259",
      color: "#E34259",
      boxShadow: `0 0 0 5px #2a2f4d`,
      top: 9,
      "&::after": {
        position: "absolute",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        borderRadius: "50%",
        animation: "$ripple 1.2s infinite ease-in-out",
        border: "1px solid currentColor",
        content: '""',
      },
    },
    "@keyframes ripple": {
      "0%": {
        transform: "scale(.8)",
        opacity: 1,
      },
      "100%": {
        transform: "scale(2.4)",
        opacity: 0,
      },
    },
  }))(Badge);

  return (
    <div className="main__Navbar ">
      <ul>
        <li>Logo</li>
        <li>
          <NotificationsNoneOutlinedIcon fontSize="large" />
        </li>
        <li>
          <StyledBadge badgeContent={1} color="secondary">
            <GetAppOutlinedIcon fontSize="large" />
          </StyledBadge>
        </li>
        <li>
          <AssignmentTurnedInOutlinedIcon fontSize="large" />
        </li>
        <li>
          <PersonAddOutlinedIcon fontSize="large" />
        </li>
        <li>
          <SearchOutlinedIcon fontSize="large" />
        </li>
        <li>
          <HelpOutlineOutlinedIcon fontSize="large" />
        </li>
        <li>
          <StyledBadgeAvatar
            overlap="circle"
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "right",
            }}
            variant="dot"
          >
            <AccountCircleIcon style={{ fontSize: 50, color: "#fff" }} />
          </StyledBadgeAvatar>
        </li>
      </ul>
      {props.children}
    </div>
  );
};

export default Navbar;
