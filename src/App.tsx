import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { allRoutes } from "./routes";
import "./App.css";
import { WrapperPage } from "./pages/WrapperPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          {allRoutes.map((route) => (
            <Route
              key={route.name}
              path={route.path}
              element={<WrapperPage>{route.component}</WrapperPage>}
            />
          ))}
          <Route path="notfound" element={<NotFound />} />
          <Route path="*" element={<Navigate to="notfound" replace />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
