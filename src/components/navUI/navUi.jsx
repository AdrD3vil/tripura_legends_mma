/* eslint-disable react/prop-types */
import { Button, IconButton } from "@mui/material";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  LinkText,
  LogoContainer,
} from "../../appComponents/navbar/navbarStyles";
import logo from "../../assets/Logo.png";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export const NavButton = ({ to, icon, label, sx, isActive }) => {
  return (
    <Button
      component={Link}
      to={to}
      startIcon={<FontAwesomeIcon icon={icon} />}
      sx={sx}
      style={{
        borderBottom: isActive ? "4px solid rgba(117, 113, 113)" : null,
      }}
    >
      {label}
    </Button>
  );
};

export const NavLogo = ({ isSmallScreen }) => {
  return (
    <Link to="/home" style={{ textDecoration: "none" }}>
      <LogoContainer sx={{ marginLeft: isSmallScreen ? "0%" : "6%" }}>
        <img
          src={logo}
          alt="logo"
          style={{
            height: isSmallScreen && "60px",
            width: isSmallScreen && "60px",
          }}
        />
        <LinkText sx={{ fontSize: isSmallScreen ? "16px" : "20px" }}>
          Tripura Legends
        </LinkText>
      </LogoContainer>
    </Link>
  );
};
export const NavHamburger = ({ toggleModal }) => {
  return (
    <IconButton
      onClick={toggleModal}
      sx={{ marginRight: "5%", color: "#484343" }}
    >
      <FontAwesomeIcon icon={faBars} color="#f3f3f3" />
    </IconButton>
  );
};

export const NavModalLink = ({ to, sx, toggleModal, label, icon }) => {
  return (
    <Link to={to} style={{ textDecoration: "none", width: "100%" }}>
      <Button
        sx={sx}
        onClick={toggleModal}
        startIcon={<FontAwesomeIcon icon={icon} />}
      >
        {label}
      </Button>
    </Link>
  );
};
