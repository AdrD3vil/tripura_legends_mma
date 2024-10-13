import { useEffect, useState } from "react";
import { MainImageContainer } from "../homeUI/homeUiStyles";
import { Box, Typography } from "@mui/material";
import { SocialGrid } from "../homeUI/homeUi";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEnvelope, faPhone } from "@fortawesome/free-solid-svg-icons";

export const AboutImage = ({ is760px }) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc =
    "https://res.cloudinary.com/dkuf2xlil/image/upload/v1728809628/ABOUT_US_a7itz2.png";

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setIsLoading(false);
  }, [imgSrc]);
  return (
    <MainImageContainer sx={{ backgroundColor: "#0f0e0e", width: "100%" }}>
      {isLoading ? (
        <Box
          style={{
            width: "100%",
            height: "50vh",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            color: "#ff4800",
            backgroundColor: "#151515",
          }}
        >
          Loading...
        </Box>
      ) : (
        <img
          src={imgSrc}
          style={{
            width: is760px ? "100%" : "80%",
            height: is760px ? "30vh" : "auto",
            objectFit: "contain",
          }}
        />
      )}
    </MainImageContainer>
  );
};

export const ContactDetails = ({ is760px }) => {
  return (
    <Box
      display={"flex"}
      alignItems={"center"}
      justifyContent={"center"}
      flexDirection={"column"}
      padding={"50px"}
    >
      <Typography variant="h4">Contact Details:</Typography>
      <Box
        display={"flex"}
        flexDirection={"column"}
        gap={"20px"}
        marginTop={"20px"}
      >
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
          gap={"10px"}
        >
          <FontAwesomeIcon icon={faPhone} />
          <span>/</span>
          <img
            src="https://res.cloudinary.com/dkuf2xlil/image/upload/v1728848580/WhatsApp_icon-Photoroom_mhei90.png"
            style={{
              width: "25px",
            }}
          />
          <Typography variant="body1">+91 8974057832</Typography>
        </Box>
        <Box
          display={"flex"}
          alignItems={"center"}
          justifyContent={"center"}
          flexDirection={"row"}
          gap={"5px"}
        >
          <FontAwesomeIcon icon={faEnvelope} />
          <Typography variant="body1">
            Email: tripuralegends51@gmail.com
          </Typography>
        </Box>
      </Box>
      <Box
        display={"flex"}
        alignItems={"center"}
        justifyContent={"center"}
        flexDirection={"column"}
        marginTop={"80px"}
      >
        <Typography variant="h4">Social Media</Typography>
        <SocialGrid />
      </Box>
    </Box>
  );
};
