import { Box, IconButton, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";

const BookCard = () => {
  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={5}>
        <Box
          sx={{
            width: "100%",
            height: 500,
            overflow: "hidden",
            "@media (max-width: 600px)": {
              borderBottom: "1px solid rgba(255, 255, 255, 0.1)",
            },
            img: {
              width: "100%",
              height: "100%",
              objectFit: "cover",
              "@media (max-width: 600px)": {
                objectFit: "contain",
              },
            },
          }}
        >
          <img
            src="https://harpercollins.com.br/cdn/shop/products/9786555113624_84e92bc9-fe5b-4d2c-9c79-5d2153540499.jpg"
            alt="cover"
          />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="h3" noWrap>
            Nome do Livro
          </Typography>
          <Typography variant="body2" component="h4" noWrap>
            Subtitulo do livro
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            Autor
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            Genero
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton>
            <EditIcon />
          </IconButton>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
    </Grid>
  );
};

export default BookCard;
