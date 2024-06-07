import { Box, Typography } from "@mui/material";

const Banner = () => {
  return (
    <Box
      sx={{
        backgroundImage: "url(https://via.placeholder.com/1200x400)",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "800px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        color: "white",
        textShadow: "2px 2px 4px rgba(0, 0, 0, 0.7)",
      }}
    >
      <Typography variant="h2">Welcome to Our Shop</Typography>
      <Typography variant="h5">Find the best products here!</Typography>
    </Box>
  );
};

export default Banner;
