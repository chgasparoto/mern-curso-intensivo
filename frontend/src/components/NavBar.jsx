import { AppBar, Box, IconButton, Toolbar, Typography } from "@mui/material";
import MenuBookIcon from "@mui/icons-material/MenuBook";
import AddBoxIcon from "@mui/icons-material/AddBox";
import Brightness4Icon from "@mui/icons-material/Brightness4";

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
          >
            <MenuBookIcon />
          </IconButton>
          <Typography variant="h6" sx={{ flexGrow: 1 }}>
            MERN Biblioteca
          </Typography>
          <IconButton>
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
