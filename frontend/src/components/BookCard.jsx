import { useState } from "react";
import { Box, IconButton, Paper, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";
import EditIcon from "@mui/icons-material/Edit";
import DeleteIcon from "@mui/icons-material/Delete";
import PropTypes from "prop-types";
import ConfirmDeleteDialog from "./ConfirmDeleteDialog";

import EditBookDialog from "./EditBookDialog";
import { useDeleteBook, useUpdateBook } from "../lib/mutations";

const BookCard = ({ _id: id, title, subtitle, author, genre, cover }) => {
  const [editDialogOpen, setEditDialogOpen] = useState(false);
  const [deleteDialogOpen, setDeleteDialogOpen] = useState(false);
  const bookUpdateMutation = useUpdateBook(id);
  const bookDeleteMutation = useDeleteBook(id);

  const handleEditDialogOpen = () => {
    setEditDialogOpen(true);
  };

  const handleEditDialogClose = () => {
    setEditDialogOpen(false);
  };

  const handleEditSaveBook = async (data) => {
    await bookUpdateMutation.mutateAsync(data);
    handleEditDialogClose();
  };

  const handleDeleteDialogOpen = () => {
    setDeleteDialogOpen(true);
  };

  const handleDeleteDialogClose = () => {
    setDeleteDialogOpen(false);
  };

  const handleDeleteBook = async () => {
    await bookDeleteMutation.mutateAsync(id);
    handleDeleteDialogClose();
  };

  return (
    <Grid xs={12} sm={6} md={4} lg={3}>
      <Paper elevation={5}>
        <Box
          sx={{
            width: "100%",
            overflow: "hidden",
            img: {
              width: "100%",
              objectFit: "cover",
              aspectRatio: "9/16",
              boxShadow: "0 0 10px rgba(0, 0, 0, 0.5)",
            },
          }}
        >
          <img src={cover} alt={`Capa do livro ${title} (${id})`} />
        </Box>
        <Box sx={{ p: 2 }}>
          <Typography variant="h6" component="h3" noWrap>
            {title}
          </Typography>
          <Typography variant="body2" component="h4" noWrap>
            {subtitle}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {author}
          </Typography>
          <Typography variant="body2" component="p" noWrap>
            {genre}
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-end",
          }}
        >
          <IconButton onClick={handleEditDialogOpen}>
            <EditIcon />
          </IconButton>
          <IconButton onClick={handleDeleteDialogOpen}>
            <DeleteIcon />
          </IconButton>
        </Box>
      </Paper>
      <EditBookDialog
        book={{ id, title, subtitle, author, genre, cover }}
        open={editDialogOpen}
        onClose={handleEditDialogClose}
        onSave={handleEditSaveBook}
      />
      <ConfirmDeleteDialog
        open={deleteDialogOpen}
        onClose={handleDeleteDialogClose}
        onDelete={handleDeleteBook}
      />
    </Grid>
  );
};

BookCard.propTypes = {
  _id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  author: PropTypes.string.isRequired,
  genre: PropTypes.string.isRequired,
  cover: PropTypes.string.isRequired,
};

export default BookCard;
