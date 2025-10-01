import axios from 'axios';

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class BookService {
  async getAll() {
    const res = await axios.get(`${API_URL}/books`);
    return res.data;
  }

  async getByText(text) {
    console.log(text);
    const res = await axios.get(`${API_URL}/books/search?text=${text}`);
    return res.data;
  }
}

export const bookService = new BookService();