import {
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  CardHeader,
  TextField,
} from "@mui/material";
import { useForm } from "react-hook-form";
import { createBook } from "../lib/api";

const CreateBookPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async (data) => {
    console.log(data);
    try {
      await createBook(data);
      reset();
    } catch (error) {
      console.error("Error creating book: ", error);
    }
  };

  return (
    <Card sx={{ p: 2, my: 5 }}>
      <CardHeader title="Cadastrar novo livro" />
      <form noValidate onSubmit={handleSubmit(onSubmit)}>
        <CardContent>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Título"
              fullWidth
              margin="normal"
              {...register("title", {
                required: "Campo obrigatório",
                minLength: { value: 10, message: "Mínimo de 10 caracteres" },
              })}
              error={!!errors.title}
              helperText={errors.title?.message}
            />
            <TextField
              label="SubTítulo"
              fullWidth
              margin="normal"
              {...register("subtitle", {
                minLength: { value: 10, message: "Mínimo de 10 caracteres" },
              })}
              error={!!errors.subtitle}
              helperText={errors.subtitle?.message}
            />
          </Box>
          <Box sx={{ display: "flex", gap: 2 }}>
            <TextField
              label="Autor"
              fullWidth
              margin="normal"
              {...register("author", {
                required: "Campo obrigatório",
                minLength: { value: 10, message: "Mínimo de 10 caracteres" },
              })}
              error={!!errors.author}
              helperText={errors.author?.message}
            />
            <TextField
              label="Gênero"
              fullWidth
              margin="normal"
              {...register("genre", {
                required: "Campo obrigatório",
                minLength: { value: 10, message: "Mínimo de 10 caracteres" },
              })}
              error={!!errors.genre}
              helperText={errors.genre?.message}
            />
            <TextField
              label="Imagem da Capa"
              fullWidth
              margin="normal"
              {...register("cover", {
                required: "Campo obrigatório",
                pattern: {
                  value:
                    /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff))$/i,
                  message: "URL da imagem inválida",
                },
              })}
              error={!!errors.cover}
              helperText={errors.cover?.message}
            />
          </Box>
        </CardContent>
        <CardActions>
          <Button variant="contained" color="primary" type="submit">
            Cadastrar
          </Button>
        </CardActions>
      </form>
    </Card>
  );
};

export default CreateBookPage;
