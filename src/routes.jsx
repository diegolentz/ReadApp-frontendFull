import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Login } from "./views/login/login";
import { BookView } from "./views/booksView/contentView";
import { PerfilView } from "./views/perfilViews/perfilView";
import { PerfilData } from "./views/perfilViews/perfilData";
import { PerfilMyBooks } from "./views/perfilViews/perfilMyBooks";
import { CreateEditRecomendation } from "./views/createEditRecomendation/createEditRecomendation";

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
          <Route path="misLibros" element={<PerfilMyBooks isBook={true} />} />
          <Route path="misRecomendaciones" element={<PerfilMyBooks isBook={false} />} />
          <Route path="buscarAmigos" element={<CreateEditRecomendation isEdit={false} />} />
          <Route path="chats" element={<CreateEditRecomendation isEdit={false} />} />
        </Route>

        <Route path="/crear-recomendacion" element={<CreateEditRecomendation isEdit={false} />} />
        <Route path="/editar-recomendacion/:recId" element={<CreateEditRecomendation isEdit={true} />} />

        <Route path="/valorar-recomendacion/:recId" element={<CreateEditRecomendation isEdit={false} />} />
      </Routes>
    </BrowserRouter>
  );
};