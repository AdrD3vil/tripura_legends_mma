import {
  MainImageContainer,
  WhyContainer,
  WhySubTitleText,
  WhyTextContainer,
  WhyTitleText,
} from "./homeUiStyles";
import { WhyGrid } from "./whyGrid";
import { classes } from "../../../data/classes_data";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid2,
  Typography,
} from "@mui/material";
import { social } from "../../../data/social_data";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
export const MainImage = ({
  is768px,
  is1000px,
  is1024px,
  less760px,
  is514px,
}) => {
  const [isLoading, setIsLoading] = useState(true);
  const imgSrc =
    is768px || is1000px || is1024px
      ? "https://res.cloudinary.com/dkuf2xlil/image/upload/v1727782722/MMA_z5ufl8.png"
      : "https://res.cloudinary.com/dkuf2xlil/image/upload/v1727787571/MMA3.png";

  useEffect(() => {
    const img = new Image();
    img.src = imgSrc;
    img.onload = () => setIsLoading(false);
  }, [imgSrc]);
  return (
    <MainImageContainer>
      {isLoading ? (
        <div
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
        </div>
      ) : (
        <img
          src={imgSrc}
          style={{
            width: less760px ? "120%" : "100%",
            position: less760px ? "relative" : null,
            left: is514px ? "25px" : null,
            height: is514px ? "50vh" : less760px ? "80vh" : "auto",
            objectFit: less760px ? null : "contain",
          }}
        />
      )}
    </MainImageContainer>
  );
};

export const WhyTrainWithUs = ({
  is1000px,
  is768px,
  is1500px,
  is1273px,
  is375px,
  equals768px,
  is360px,
}) => {
  return (
    <WhyContainer>
      <WhyTextContainer>
        <WhyTitleText
          variant="body1"
          sx={{ fontSize: is768px ? "12px" : is1000px ? "14px" : "16px" }}
        >
          WHY TRAIN WITH US?
        </WhyTitleText>
        <WhySubTitleText
          variant="h2"
          sx={{ fontSize: is768px ? "18px" : is1000px ? "25px" : "32px" }}
        >
          PUSH YOUR LIMITS FORWARD
        </WhySubTitleText>
      </WhyTextContainer>
      <WhyGrid
        is360px={is360px}
        is375px={is375px}
        equals768px={equals768px}
        is1000px={is1000px}
        is1273px={is1273px}
        is1500px={is1500px}
        is768px={is768px}
      />
    </WhyContainer>
  );
};
export const Classes = ({ is768px, is375px, is820px, is514px }) => {
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
            fontSize: is514px ? "20px" : is768px ? "25px" : "32px",
          }}
        >
          WE OFFER TRAINING IN
        </Typography>
      </Box>

      <TrainingGrid is375px={is375px} is820px={is820px} />
    </Box>
  );
};
export const TrainingGrid = ({ is375px, is820px }) => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ justifyContent: "center", marginTop: "24px", }}
    >
      {classes.map((card) => (
        <Grid2 item xs={12} sm={6} md={6} key={card.id}>
          <Card sx={{ backgroundColor: "#151515", color: "white" }}>
            <CardContent
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
              }}
            >
              <img
                src={card.image}
                alt={card.title}
                style={{
                  width: is820px ? "280px" : "320px",
                  height: is820px ? "180px" : "200px",
                }}
              />
              <Typography
                variant="h4"
                sx={{ marginTop: 2, fontSize: is375px ? "16px" : "18px" }}
              >
                {card.title}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export const Social = ({
  is768px,
  is375px,
  is1273px,
  is1000px,
  is820px,
  is720px,
}) => {
  return (
    <Box
      sx={{
        width: "100vw",
        display: "flex",
        flexDirection: "column",
        marginTop: "50px",
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.4), 0px -1px 3px rgba(0, 0, 0, 0.4)",
        marginBottom: "25px",
      }}
    >
      <Box
        sx={{
          width: "100%",
          display: "flex",
          flexDirection: is720px ? "column-reverse" : "row",
          alignItems: "center",
          justifyContent: "space-evenly",
          backgroundColor: "transparent",
        }}
      >
        <Box
          sx={{
            width: is720px ? "96%" : is768px ? "50%" : is820px ? "55%" : "50%",
            height: "100%",
            borderRight: is720px ? null : "1px solid #151515",
          }}
        >
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
                fontSize: is768px ? "20px" : is820px ? "25px" : "32px",
                color: "#151515",
              }}
            >
              FOLLOW US ON
            </Typography>
          </Box>

          <SocialGrid is375px={is375px} is820px={is820px} is768px={is768px} />
        </Box>
        <Coach
          is375px={is375px}
          is1273px={is1273px}
          is1000px={is1000px}
          is720px={is720px}
        />
      </Box>
    </Box>
  );
};
export const SocialGrid = ({ is375px, is820px, is768px }) => {
  return (
    <Grid2
      container
      spacing={2}
      sx={{ justifyContent: "center", marginTop: "24px", marginBottom: "24px" }}
    >
      {social.map((card) => (
        <Grid2 item xs={12} sm={6} md={6} key={card.id}>
          <Card
            sx={{
              backgroundColor: "#fefefe",
              height: is768px ? "80px" : "100px",
              width: is768px ? "100px" : "120px",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              "&:hover": {
                transform: "scale(1.05)",
                boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.2)",
              },
            }}
          >
            <a
              href={card.url}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none" }}
            >
              <CardContent
                sx={{
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                  padding: "13%",
                }}
              >
                <img
                  src={card.image}
                  alt={card.title}
                  style={{
                    width: is768px ? "27%" : is820px ? "30%" : "40%",
                    height: is768px ? "27%" : is820px ? "30%" : "40%",
                  }}
                />
                <Typography
                  variant="h4"
                  sx={{
                    marginTop: 2,
                    fontWeight: "600",
                    fontSize: is375px ? "14px" : is768px ? "16px" : "18px",
                    color: "#151515",
                  }}
                >
                  {card.title}
                </Typography>
              </CardContent>
            </a>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};

export const Coach = ({ is375px, is1273px, is1000px, is720px }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        marginTop: "24px",
        marginBottom: "24px",
        width: is720px ? "100%" : "50%",
        cursor: "default",
      }}
    >
      <Card sx={{ backgroundColor: "#151515", width: "50%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <img
            src="https://res.cloudinary.com/dkuf2xlil/image/upload/v1728156125/COACH_ei1duf.png"
            alt="coach"
            style={{ width: "90%", height: "90%" }}
          />
          <Typography
            variant="h4"
            sx={{
              marginTop: 2,
              fontSize: is375px
                ? "16px"
                : is1000px
                ? "18px"
                : is1273px
                ? "25px"
                : "32px",
              color: "white",
            }}
          >
            Mr. Amit Murasing
          </Typography>
          <Typography
            variant="h4"
            sx={{
              marginTop: 2,
              fontSize: is375px ? "12px" : "15px",
              color: "white",
            }}
          >
            Coach/Trainer
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};
export const OtherSection = ({ is720px }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "100%",
        justifyContent: "center",
        alignItems: "center",
        marginBottom: "50px",
      }}
    >
      <ApparelSection is720px={is720px} />
    </Box>
  );
};

export const ApparelSection = ({ is720px }) => {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        width: "80%",
        boxShadow:
          "0px 1px 3px rgba(0, 0, 0, 0.4), 0px -1px 3px rgba(0, 0, 0, 0.4)",
        padding: "30px",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          alignItems: "center",
          justifyContent: "center",
          gap: "30px",
        }}
      >
        <a
          href="https://legendsstore.in/"
          target="_blank"
          rel="noopener noreferrer"
          style={{ display: "contents" }}
        >
          <Box
            component="img"
            src="https://res.cloudinary.com/dkuf2xlil/image/upload/v1728841621/store_faovqj.webp"
            sx={{
              width: "30%",
              objectFit: "contain",
              borderRadius: "4px",
              transition: "transform 0.2s",
              "&:hover": {
                transform: "scale(1.06)",
              },
              cursor: "pointer",
            }}
          />
        </a>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            gap: "20px",
          }}
        >
          <Typography
            variant="h5"
            sx={{ fontSize: is720px ? "14px" : "25px", textWrap: "nowrap" }}
          >
            Check out our Apparel Store
          </Typography>
          <Button
            component="a"
            href="https://legendsstore.in/"
            target="_blank"
            rel="noopener noreferrer"
            sx={{ fontSize: "16px" }}
          >
            Click Here
          </Button>
        </Box>
      </Box>
    </Box>
  );
};
export const ContactButton = ({ is720px }) => {
  const navigate = useNavigate();
  const toContactPage = () => {
    navigate("/about");
  };
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        marginTop: "80px",
        marginBottom: "24px",
        flexDirection: "column",
      }}
    >
      <Typography variant="h5" sx={{ fontSize: is720px ? "15px" : "25px" }}>
        For contact information press here
      </Typography>
      <Box
        onClick={toContactPage}
        style={{
          padding: "15px",
          backgroundColor: "#FF4800",
          color: "white",
          borderRadius: "8px",
          textAlign: "center",
          fontSize: is720px ? "15px" : "18px",
          fontWeight: "600",
          cursor: "pointer",
          alignItems: "center",
          justifyContent: "center",
          marginTop: "15px",
        }}
      >
        Contact Us
      </Box>
    </Box>
  );
};
