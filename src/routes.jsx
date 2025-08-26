import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/login/login";
import { BookView } from "./views/booksView/contentView";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/libros" element={<BookView />} />
      </Routes>
    </BrowserRouter>
  );
};