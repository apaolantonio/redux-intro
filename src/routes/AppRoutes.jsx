import { BrowserRouter, Route, Routes } from "react-router-dom";
import App from "../App";
import { PokemonApp } from "../PokemonApp";
import { TodoApp } from "../TodoApp";

export const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/*" element={<App />} />
        <Route path="/rtk-query" element={<TodoApp />} />
        <Route path="/redux-slice" element={<PokemonApp />} />
      </Routes>
    </BrowserRouter>
  );
};
