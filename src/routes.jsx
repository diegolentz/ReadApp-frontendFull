import { BrowserRouter, Routes, Route } from "react-router-dom";
import {Login} from "./views/login/login";

export const AppRouter = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Login />} />
      </Routes>
    </BrowserRouter>
  );
};
