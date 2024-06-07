import { AppBar, Toolbar, Typography, Box } from "@mui/material";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <AppBar position="static" sx={{ backgroundColor: "#ffffff" }}>
      <Toolbar
        sx={{
          height: "100px",
          color: "black",
          width: "80%",
          margin: "0 auto",
        }}
      >
        <Typography variant="h5" component="div" sx={{ flexGrow: 1 }}>
          <Link className="link">Singdongkwang</Link>
        </Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "25px",
          }}
        >
          <Typography
            color="inherit"
            variant="h6"
            sx={{ letterSpacing: "1px" }}
          >
            <Link className="link">회사소개</Link>
          </Typography>
          <Typography
            color="inherit"
            variant="h6"
            sx={{ letterSpacing: "1px", textDecoration: "none" }}
          >
            <Link className="link">제품현황</Link>
          </Typography>
          <Typography
            color="inherit"
            variant="h6"
            sx={{ letterSpacing: "1px", textDecoration: "none" }}
          >
            <Link className="link">온라인주문</Link>
          </Typography>
          <Typography
            color="inherit"
            variant="h6"
            sx={{ letterSpacing: "1px", textDecoration: "none" }}
          >
            <Link className="link">로그인</Link>
          </Typography>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
