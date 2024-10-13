import React from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Box, Card, CardContent, Typography, styled } from "@mui/material";
import { classes } from "../../../data/classes_data";

// Create styled components
const StyledCard = styled(Card)(() => ({
  backgroundColor: "#151515",
  color: "white",
  margin: "0 15px",
}));

const StyledImage = styled("img")(() => ({
  width: "280px",
  height: "180px",
}));

const TrainingCarousel = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    tablet: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  };

  return (
    <Box sx={{ width: "100vw" }}>
      <Box
        sx={{
          alignItems: "center",
          justifyContent: "center",
          display: "flex",
          marginTop: "50px",
        }}
      >
        <Typography
          variant="h4"
          sx={{
            fontWeight: "700",
            fontSize: "20px",
          }}
        >
          WE OFFER TRAINING IN
        </Typography>
      </Box>
      <Box sx={{ marginTop: "24px" }}>
        <Carousel responsive={responsive}>
          {classes.map((card) => (
            <StyledCard key={card.id}>
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  paddingBottom: "8px !important",
                }}
              >
                <StyledImage src={card.image} alt={card.title} />
                <Typography
                  variant="h4"
                  sx={{ marginTop: 2, fontSize: "18px" }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </StyledCard>
          ))}
        </Carousel>
      </Box>
    </Box>
  );
};

export default TrainingCarousel;
