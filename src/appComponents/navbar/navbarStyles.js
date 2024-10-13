import { Box, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

// Navbar container styles
export const navContainerStyles = {
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  width: "100%",
  backgroundColor: "black",
  zIndex: "900",
};

// Logo container styles
export const LogoContainer = styled(Box)(() => ({
  display: "flex",
  alignItems: "center",
  textDecoration: "none",
  img: {
    objectFit: "contain",
    height: 70,
    width: 70,
    cursor: "pointer",
  },
}));

// Link text styles
export const LinkText = styled(Typography)(() => ({
  fontSize: "20px",
  fontWeight: "550",
  marginLeft: "2%",
  whiteSpace: "nowrap",
  color: "white",
  textDecoration: "none",
  "&:hover": {
    cursor: "pointer",
    color: "#007bff",
  },
}));

// Button container styles
export const BtnContainer = styled(Box)(() => ({
  display: "flex",
  gap: "30px",
  marginRight: "3%",
  alignItems: "center",
}));

//Button text styles
export const ButtonStyles = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  color: "#f3f3f3",
  textTransform: "none",
  fontSize: "18px",
  fontWeight: "500",
  paddingLeft: "15px",
  paddingRight: "15px",
  borderRadius: "2px",
  backgroundColor: "rgba(117, 113, 113, 0.15)",
  "&:hover": {
    cursor: "pointer",
    color: "#007bff",
    backgroundColor: "rgba(117, 113, 113, 0.3)",
  },
};
