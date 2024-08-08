import axios from "axios";

const API_VERSION = "v1";

const axiosInstance = axios.create({
  baseURL: `/api/${API_VERSION}`,
  headers: {
    "Content-Type": "application/json",
  },
});

const handleError = (error, message) => {
  console.error(message, error);
  throw error;
};

export const createBook = async (data) => {
  try {
    const response = await axiosInstance.post("/books", data);
    return response.data.data;
  } catch (error) {
    handleError(error, "Error creating book");
  }
};
