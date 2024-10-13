
// navbarModalStyles.js
export const modalOverlayStyles = {
  position: "fixed",
  top: 0,
  left: 0,
  width: "100vw",
  height: "100vh",
  backgroundColor: "rgba(0, 0, 0, 0.5)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  zIndex: 1000,
};

export const modalContentStyles = {
  backgroundColor: "black",
  padding: "2rem",
  borderRadius: "10px",
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  width: "80%",
  maxWidth: "250px",
  position: "relative",
  bottom: "18%",
  justifyContent: "center",
  height: "30%",
};

export const buttonStyles = {
  display:"flex",
  alignItems:"center",
  justifyContent:"center",
  color: "#f5f6f8",
  marginBottom: "1rem",
  padding:"10px",
  fontSize: "1.2rem",
  fontWeight: "550",
  width: "100%",
  border: "1px solid #f5f6f8",
  borderRadius: "6px",
  backgroundColor: "black",
  transition: "transform 0.3s ease, background-color 0.5s ease",
  "&:hover": {
    color: "#007bff",
  },
  "&:active": {
    transform: "scale(0.95)",
    backgroundColor: "#d1d1d1",
  },
};
