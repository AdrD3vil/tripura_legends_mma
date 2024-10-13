/* eslint-disable react/prop-types */
import { Box } from "@mui/material";
import {
  modalOverlayStyles,
  modalContentStyles,
  buttonStyles,
} from "./modalStyles"; // Adjust the path as needed
import { NavModalLink } from "./navUi";
import { faCamera, faHouse, faIdBadge, faPhone } from "@fortawesome/free-solid-svg-icons";

const NavBarModal = ({ toggleModal }) => {
  return (
    <Box sx={modalOverlayStyles} onClick={toggleModal}>
      <Box sx={modalContentStyles} onClick={(e) => e.stopPropagation()}>
        <NavModalLink
          to="/home"
          sx={buttonStyles}
          toggleModal={toggleModal}
          label="Home"
          icon={faHouse}
        />
        {/* <NavModalLink
          to="/gallery"
          sx={buttonStyles}
          toggleModal={toggleModal}
          label="Gallery"
          icon={faCamera}
        /> */}
        <NavModalLink
          to="/about"
          sx={buttonStyles}
          toggleModal={toggleModal}
          label="About"
          icon={faIdBadge}
        />
      </Box>
    </Box>
  );
};

export default NavBarModal;
