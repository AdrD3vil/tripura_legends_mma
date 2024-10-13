import React from "react";
import {
  AddressContianer,
  Footer2,
  Footer3,
  MapContianer,
  SocialIcons,
} from "../../components/footerUi/footerUI";
import { FooterContainer } from "../../components/footerUi/styledFooter";
import useWindowSize from "../../../utils/FindWindowSize";

const FooterMain = () => {
  const windowSize = useWindowSize();
  const windowWidth = windowSize.width;
  const is768px = windowWidth <= 768;
  const is720px = windowWidth <= 720;
  return (
    <>
      <FooterContainer
        sx={{
          flexDirection: is768px ? "column" : "row",
          alignItems: is768px ? "center" : null,
          justifyContent: is768px ? "center" : "space-evenly",
          gap: is768px ? "40px" : null,
        }}
      >
        <AddressContianer is768px={is768px} is720px={is720px} />
        <MapContianer is768px={is768px} is720px={is720px} />
      </FooterContainer>
      <SocialIcons is768px={is768px} />
      <Footer2 is720px={is720px} />
      <Footer3 is720px={is720px} />
    </>
  );
};

export default FooterMain;
