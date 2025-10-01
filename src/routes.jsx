import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/login/login";
import { BookView } from "./views/booksView/contentView";
import { PerfilView } from "./views/perfilViews/perfilView";
import { PerfilData } from "./views/perfilViews/perfilData";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
        <Route path="*" element={<Login />} />
        <Route path="/libros" element={<BookView isBooks={true} />} />
        <Route path="/recomendaciones" element={<BookView isBooks={false} />} />
        <Route path="/perfil" element={<PerfilView />}>
          <Route path="datos" element={<PerfilData />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};