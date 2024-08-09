import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createBook, deleteBook, updateBook } from "./api";

export const useCreateBook = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["createBook"],
    mutationFn: (data) => createBook(data),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
    onError: (error) => {
      console.error("Error creating book: ", error);
    },
  });
};
export const useUpdateBook = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["updateBook", id],
    mutationFn: (data) => updateBook(id, data),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
    onError: (error) => {
      console.error("Error creating book: ", error);
    },
  });
};

export const useDeleteBook = (id) => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["deleteBook", id],
    mutationFn: (bookId) => deleteBook(bookId),
    onSuccess: () => {
      queryClient.invalidateQueries(["books"]);
    },
    onError: (error) => {
      console.error("Error creating book: ", error);
    },
  });
};
