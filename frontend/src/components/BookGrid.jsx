import Grid from "@mui/material/Unstable_Grid2";
import BookCard from "./BookCard";

const BookGrid = () => {
  return (
    <Grid container spacing={5}>
      <BookCard />
    </Grid>
  );
};

export default BookGrid;
