import { Card, CardContent, Grid2, Typography } from "@mui/material";
import { cards } from "../../../data/card_data";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconDescription, IconTitle } from "./homeUiStyles";

export const WhyGrid = ({
  is360px,
  is375px,
  equals768px,
  is1000px,
  is1273px,
  is1500px,
  is768px,
}) => {
  const getMarginTop = (card,is360px,is375px,equals768px,is1000px,is1273px,is1500px) => {
    if (card.margin2) {
      if (is375px || equals768px) return null;
      if (is1000px) return "35px";
      if (is1500px) return "37px";
      return null;
    } else if (card.margin1) {
      if (is360px) return "35px";
      if (is375px || equals768px || is1000px || is1273px) return null;
      if (is1500px) return "35px";
      return null;
    }
    return null;
  };
  return (
    <Grid2 container spacing={2} sx={{ justifyContent: "center" }}>
      {cards.map((card) => (
        <Grid2
          item
          xs={12}
          sm={6}
          md={4}
          lg={2.4}
          key={card.id}
          sx={{ textAlign: "center", width: is768px ? "40%" : "22%" }}
        >
          <Card sx={{ backgroundColor: "black" }}>
            <CardContent sx={{ padding: 0 }}>
              <FontAwesomeIcon
                icon={card.icon}
                color="#ff4800"
                size="2x"
                style={{
                  height: is768px ? "30px" : is1000px ? "40px" : "60px",
                  width: is768px ? "30px" : is1000px ? "40px" : "60px",
                }}
              />
              <Typography
                variant="h4"
                sx={IconTitle}
                style={{
                  fontSize: is768px ? "14px" : is1000px ? "16px" : "18px",
                }}
              >
                {card.title}
              </Typography>
              <Typography
                variant="body2"
                sx={IconDescription}
                style={{
                  fontSize: is1000px ? "12px" : "14px",
                  marginTop: getMarginTop(card,is360px,is375px,equals768px,is1000px,is1273px,is1500px),
                }}
              >
                {card.description}
              </Typography>
            </CardContent>
          </Card>
        </Grid2>
      ))}
    </Grid2>
  );
};
