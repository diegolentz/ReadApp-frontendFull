import axios from 'axios';

// @ts-ignore
const API_URL = import.meta.env.VITE_API_URL;

class BookService {
  
  async getGeneres() {
    const res = await axios.get(`${API_URL}/books/genres`);
    return res.data;
  }
  async getByGenere(genre, page) {
    const res = await axios.get(`${API_URL}/books/genre?name=${genre}&page=${page}&size=10`);
    return res.data;
  }
  async getAll(page) {
    const res = await axios.get(`${API_URL}/books?page=${page}&size=10`);
    return res.data;
  }
  async getByText(text, page = 0, size = 10) {
    const res = await axios.get(`${API_URL}/books/search?text=${text}&page=${page}&size=${size}`);
    return res.data;
  }

  async getMyBooks() {
    const id = sessionStorage.getItem('user');
    const res = await axios.get(`${API_URL}/books/mybooks/${id}`);
    console.log(res.data);
    return res.data;
  }
}

export const bookService = new BookService();