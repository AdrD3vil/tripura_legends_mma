import { Typography, Box } from "@mui/material";
import { styled } from "@mui/material/styles";

// Styled Component for the MainImage container
export const MainImageContainer = styled(Box)(() => ({
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  width: "100vw",
  img: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

// Styled Component for the Text Wrapper
export const ImageTextWrap = styled(Box)(() => ({
  display: "flex",
  position: "relative",
  width: "fit-content",
}));

// Styled Typography Component
export const ImageText = styled(Typography)(() => ({
  textAlign: "center",
  fontFamily: `'Franklin Gothic Medium', 'Arial Narrow', Arial, sans-serif`,
  fontWeight: "700",
  color: "#484343",
  backgroundColor: "rgba(215, 215, 209, 0.8)",
  padding: "5px",
  borderRadius: "6px",
}));

export const WhyContainer = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  backgroundColor: "black",
  flexDirection: "column",
  width:"100vw",
  paddingBottom:"10px",
});

// Styled Box for text container
export const WhyTextContainer = styled(Box)({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  marginTop: "5%",
  marginBottom: "45px",
});

// Styled Typography for title
export const WhyTitleText = styled(Typography)({
  fontWeight: "500",
  color: "#ff4800",
});

// Styled Typography for subtitle
export const WhySubTitleText = styled(Typography)({
  fontWeight: "700",
  color: "#f5f6f8",
  marginTop: "8px",
});

export const SectionBox = styled(Box)({
  display: "flex",
  flexDirection: "row",
  paddingRight: "15px",
  paddingLeft: "15px",
  alignTtems: "center",
  justifyContent: "space-evenly",
});

export const IconTextWrapper = styled(Box)(() => ({
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  justifyContent: "center",
  width: "20%",
  textAlign: "center",
}));

export const IconWrapper = styled(Box)({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "15px",
  borderRadius: "50px",
  backgroundColor: "#151515",
});

export const IconTitle = {
  color: "#f5f6f8",
  marginTop: "24px",
  marginBottom: "16px",
  fontWeight: "600",
};

export const IconDescription = {
  color: "#a9a9a9",
  fontWeight: "500",
};
