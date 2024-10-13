import { Box } from "@mui/material";
import { AboutImage, ContactDetails } from "../../components/contactUI/contactUI";
import useWindowSize from "../../../utils/FindWindowSize";

const AboutMain = () => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  const is760px = windowWidth <= 760;
  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <AboutImage is760px={is760px}/>
      <ContactDetails/>
    </Box>
  );
};

export default AboutMain;
