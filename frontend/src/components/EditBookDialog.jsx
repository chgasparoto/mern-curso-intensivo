import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogTitle from "@mui/material/DialogTitle";
import PropTypes from "prop-types";
import { useForm } from "react-hook-form";

const EditBookDialog = ({ book, open, onClose, onSave }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: book,
  });

  return (
    <Dialog open={open} onClose={onClose} maxWidth="sm">
      <form noValidate onSubmit={handleSubmit(onSave)}>
        <DialogTitle>Editar livro: {book.title}</DialogTitle>
        <DialogContent>
          <TextField
            label="Título"
            fullWidth
            margin="normal"
            {...register("title", {
              required: "Campo obrigatório",
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
            })}
            error={!!errors.title}
            helperText={errors.title?.message}
          />

          <TextField
            label="SubTítulo"
            fullWidth
            margin="normal"
            {...register("subtitle", {
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
            })}
            error={!!errors.subtitle}
            helperText={errors.subtitle?.message}
          />

          <TextField
            label="Autor"
            fullWidth
            margin="normal"
            {...register("author", {
              required: "Campo obrigatório",
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
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
              minLength: { value: 3, message: "Mínimo de 3 caracteres" },
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
                  /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|webp|bmp|tiff))(?:\?.*)?$/i,
                message: "URL da imagem inválida",
              },
            })}
            error={!!errors.cover}
            helperText={errors.cover?.message}
          />
        </DialogContent>
        <DialogActions>
          <Button onClick={onClose}>Cancelar</Button>
          <Button variant="contained" color="primary" type="submit">
            Salvar
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

EditBookDialog.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    subtitle: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    cover: PropTypes.string.isRequired,
  }),
  open: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired,
};

export default EditBookDialog;