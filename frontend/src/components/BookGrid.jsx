import Grid from "@mui/material/Unstable_Grid2";

import BookCard from "./BookCard";
import { getBooks } from "../lib/api";
import { useQuery } from "@tanstack/react-query";

const BookGrid = () => {
  const { isLoading, isError, data } = useQuery({
    queryKey: ["books"],
    queryFn: getBooks,
    staleTime: 1000 * 60 * 5, // 5 minutes
  });

  if (isLoading) {
    return <p>Carregando...</p>;
  }

  if (isError) {
    return <p>Ocorreu um erro ao carregar os livros</p>;
  }

  return (
    <Grid container spacing={5}>
      {data.length ? (
        data.map((book) => <BookCard key={book._id} {...book} />)
      ) : (
        <p>Não há livros cadastrados</p>
      )}
    </Grid>
  );
};

export default BookGrid;
