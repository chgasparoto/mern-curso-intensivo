import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Brightness4Icon from "@mui/icons-material/Brightness4";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <Box>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            component={Link}
            to="/"
          >
            <MenuBookIcon />
          </IconButton>
          <Typography
            variant="h6"
            sx={{ flexGrow: 1, textDecoration: "none", color: "inherit" }}
            component={Link}
            to="/"
          >
            MERN Biblioteca
          </Typography>
          <IconButton component={Link} to="/create-book">
            <AddBoxIcon />
          </IconButton>
          <IconButton>
            <Brightness4Icon />
          </IconButton>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default NavBar;
