import { Box } from "@mui/material";
import {
  Classes,
  ContactButton,
  MainImage,
  OtherSection,
  Social,
  WhyTrainWithUs,
} from "../../components/homeUI/homeUi";
import useWindowSize from "../../../utils/FindWindowSize";
import TrainingCarousel from "../../components/homeUI/TrainingCarousel";

const HomeMain = () => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;

  const is1000px = windowWidth <= 1000;
  const is1024px = windowWidth <= 1024;
  const is768px = windowWidth <= 768;
  const is720px = windowWidth <= 720;
  const is820px = windowWidth <= 820;
  const is1500px = windowWidth <= 1500;
  const is1273px = windowWidth <= 1273;
  const is375px = windowWidth <= 375;
  const is514px = windowWidth <= 514;
  const less760px = windowWidth < 760;
  const equals768px = windowWidth === 768;
  const is360px = windowWidth <= 360;

  return (
    <Box
      sx={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <MainImage
        is768px={is768px}
        is1000px={is1000px}
        is1024px={is1024px}
        less760px={less760px}
        is514px={is514px}
      />
      <WhyTrainWithUs
        is1000px={is1000px}
        is768px={is768px}
        is1500px={is1500px}
        is1273px={is1273px}
        is375px={is375px}
        equals768px={equals768px}
        is360px={is360px}
      />
      {is720px ? (
        <TrainingCarousel />
      ) : (
        <Classes
          is768px={is768px}
          is375px={is375px}
          is820px={is820px}
          is514px={is514px}
        />
      )}
      <Social
        is768px={is768px}
        is375px={is375px}
        is1273px={is1273px}
        is1000px={is1000px}
        is820px={is820px}
        is720px={is720px}
      />
      <OtherSection is720px={is720px} />
      <ContactButton is720px={is720px} />
    </Box>
  );
};

export default HomeMain;
