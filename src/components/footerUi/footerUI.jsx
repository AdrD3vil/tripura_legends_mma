import { Box, Typography } from "@mui/material";
import logo from "../../assets/Logo.png";
import facebook from "../../assets/facebook.svg";
import instagram from "../../assets/instagram.svg";
import youtube from "../../assets/youtube.svg";

import {
  Address,
  CompanyName,
  Footer3Container,
  Footer3InnerBox,
  FooterBox,
  FooterImage,
  LogoContainer,
  Separator,
  SocialIcon,
  SocialIconsContainer,
  StyledLink,
} from "./styledFooter";

export const AddressContianer = ({ is768px, is720px }) => {
  return (
    <FooterBox
      sx={{
        width: is768px ? "65%" : "33%",
        alignItems: is768px ? "center" : "flex-start",
        justifyContent: is768px ? "center" : "flex-start",
      }}
    >
      <LogoContainer sx={{ justifyContent: is768px ? "center" : "flex-start" }}>
        <img
          src={logo}
          alt="Company Logo"
          style={{ width: "80px", marginBottom: "10px" }}
        />
        <CompanyName variant="h2" sx={{ fontSize: is720px ? "14px" : "18px" }}>
          Tripura Legends
        </CompanyName>
      </LogoContainer>
      <Address
        sx={{
          textAlign: is768px ? "center" : "left",
          marginLeft: is768px ? null : "5%",
          fontSize: is720px ? "12px" : "14px",
        }}
      >
        Phone: +91 8974057832
        <br />
        Email: tripuralegends51@gmail.com,
        <br />
        Address - Cantonment Road,
        <br />
        Bhati Abhoynagar,
        <br />
        Agartala, Tripura, India
        <br />
        Pin-799002
      </Address>
    </FooterBox>
  );
};

export const MapContianer = ({ is768px, is720px }) => {
  return (
    <FooterBox
      sx={{
        width: is768px ? "60%" : "33%",
        marginTop: is768px ? null : "25px",
      }}
    >
      <CompanyName variant="h2" sx={{ fontSize: is720px ? "16px" : "18px" }}>
        How to Find Us
      </CompanyName>
      <a
        href="https://maps.app.goo.gl/Khx4sTVv1HzppTqe9"
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "25px",
        }}
      >
        <FooterImage
          src="https://res.cloudinary.com/dkuf2xlil/image/upload/v1728675153/MAP_vvkatz.png"
          alt="Footer Map"
          sx={{
            width: is768px ? "80%" : "100%",
            height: is768px ? "80%" : "93%",
            "&:hover": {
              transform: "scale(1.1)",
              transition: "0.2s",
            },
          }}
        />
      </a>
    </FooterBox>
  );
};
export const SocialIcons = ({ is768px }) => {
  return (
    <Box sx={{ backgroundColor: "black" }}>
      <SocialIconsContainer
        sx={{
          justifyContent: is768px ? "center" : "flex-start",

          marginLeft: is768px ? null : "13.5%",
        }}
      >
        <a
          href="https://www.facebook.com/profile.php?id=100063738893161"
          target="blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={facebook} alt="Facebook" />
        </a>
        <a
          href="https://www.instagram.com/tripuralegends/"
          target="blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={instagram} alt="Instagram" />
        </a>
        <a
          href="https://www.youtube.com/@tripuralegends4189"
          target="blank"
          rel="noopener noreferrer"
        >
          <SocialIcon src={youtube} alt="YouTube" sx={{ width: "18px" }} />
        </a>
      </SocialIconsContainer>
    </Box>
  );
};

export const Footer2 = ({ is720px }) => {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "black",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderTop: "1px solid rgba(163, 163, 163, 0.5)",
        borderBottom: "1px solid rgba(163, 163, 163, 0.5)",
        width: "100%",
      }}
    >
      <Typography
        variant="body2"
        sx={{ color: "#cdcdcd", fontSize: is720px ? "10px" : "14px" }}
      >
        Copyright ©2024 All rights reserved to Tripura Legends MMA
      </Typography>
    </Box>
  );
};

export const Footer3 = ({ is720px }) => {
  return (
    <Footer3Container>
      <Footer3InnerBox>
        <Typography
          variant="body2"
          sx={{ color: "#cdcdcd", fontSize: is720px ? "10px" : "12px" }}
        >
          Created by -
        </Typography>
        <StyledLink
          href="https://www.linkedin.com/in/atanu-debbarma/"
          target="blank"
          rel="noopener noreferrer"
        >
          Atanu Debbarma
        </StyledLink>
        <Separator>|</Separator>
        <StyledLink
          href="https://github.com/AdrD3vil/tripura_legends_mma"
          target="blank"
          rel="noopener noreferrer"
        >
          Github Repository
        </StyledLink>
      </Footer3InnerBox>
    </Footer3Container>
  );
};
