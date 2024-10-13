import { Box } from "@mui/material";
import HomeMain from "../../appComponents/home/homeMain";

const Home = () => {
  return (
    <Box
      sx={{
        display: "flex",
        width: "100%",
        height: "auto",
        overflow: "hidden",
      }}
    >
      <HomeMain />
    </Box>
  );
};

export default Home;
