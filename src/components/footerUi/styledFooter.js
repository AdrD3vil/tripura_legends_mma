import { Box, styled, Typography } from "@mui/material";

export const FooterContainer = styled(Box)(() => ({
  display: "flex",
  padding: "20px",
  paddingTop: "50px",
  paddingBottom: "50px",
  backgroundColor: "black",
  marginTop: "auto",
}));
export const FooterBox = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent:"center",
});

export const LogoContainer = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  cursor: "default",
  textWrap:"nowrap",
});

export const CompanyName = styled(Typography)({
  color: "white",
  fontWeight: "600",
});

export const Address = styled(Typography)({
  color: "white",
});

export const FooterImage = styled("img")({
  width: "100%",
  height: "93%",
  objectFit: "cover",
  borderRadius: "6px",
});

// Social icons container
export const SocialIconsContainer = styled(Box)({
  display: "flex",
  paddingTop: "6px",
  paddingBottom: "6px",
  gap: "20px",
});

// Individual social icon style
export const SocialIcon = styled("img")({
  width: "15px",
  objectFit: "contain",
  "&:hover": {
    transform: "scale(1.5)",
    transition: "0.2s",
  },
});

// Footer3 container for creator credits
export const Footer3Container = styled(Box)({
  display: "flex",
  justifyContent: "center",
  width: "100%",
  backgroundColor: "black",
  paddingTop: "12px",
  paddingBottom: "12px",
});

// Footer3 inner box for links
export const Footer3InnerBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  gap: "4px",
});

// Styled link for credits
export const StyledLink = styled("a")({
  color: "#0d18df",
  textDecoration: "underline",
  cursor: "pointer",
  fontSize: "12px",
  "&:hover": {
    color: "blue",
  },
});

// Separator in Footer3
export const Separator = styled("span")({
  color: "#cdcdcd",
});
