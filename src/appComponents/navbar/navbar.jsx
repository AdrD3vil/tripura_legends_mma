import { useState } from "react";
import {
  faCamera,
  faHouse,
  faPhone,
  faIdBadge,
} from "@fortawesome/free-solid-svg-icons";
import { Box } from "@mui/material";

import NavBarModal from "../../components/navUI/navbarModal";
import { navContainerStyles, ButtonStyles, BtnContainer } from "./navbarStyles";
import { NavButton, NavHamburger, NavLogo } from "../../components/navUI/navUi";
import useWindowSize from "../../../utils/FindWindowSize";
import { useLocation } from "react-router-dom";

const Navbar = () => {
  const windowSize = useWindowSize();
  const location = useLocation();
  const windowWidth = windowSize.width;
  const is760px = windowWidth <= 760;
  const [isModalOpen, setIsModalOpen] = useState(false);

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };
  const dynamicNavContainerStyles = {
    ...navContainerStyles,
    height: is760px ? "4.25rem" : "6.25rem",
  };
  return (
    <Box sx={dynamicNavContainerStyles}>
      <NavLogo isSmallScreen={is760px} fromFooter={false} />
      {!is760px ? (
        <BtnContainer>
          <NavButton
            to="/home"
            icon={faHouse}
            label="Home"
            sx={ButtonStyles}
            isActive={
              location.pathname === "/home" || location.pathname === "/"
            }
          />
          {/* <NavButton
            to="/gallery"
            icon={faCamera}
            label="Gallery"
            sx={ButtonStyles}
          /> */}
          <NavButton
            to="/about"
            icon={faIdBadge}
            label="About"
            sx={ButtonStyles}
            isActive={location.pathname === "/about"}
          />
        </BtnContainer>
      ) : (
        <NavHamburger toggleModal={toggleModal} />
      )}

      {isModalOpen && <NavBarModal toggleModal={toggleModal} />}
    </Box>
  );
};

export default Navbar;
