import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";

import BookCard from "./BookCard";
import { getBooks } from "../lib/api";

const BookGrid = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    const fetchBooks = async () => {
      const response = await getBooks();
      setBooks(response);
    };

    fetchBooks();
  }, []);

  return (
    <Grid container spacing={5}>
      {books.length ? (
        books.map((book) => <BookCard key={book._id} {...book} />)
      ) : (
        <p>Não há livros cadastrados</p>
      )}
    </Grid>
  );
};

export default BookGrid;
