import { Routes, Route, Navigate, HashRouter } from "react-router-dom";
import { allRoutes } from "./routes";
import "./App.css";
import { WrapperPage } from "./pages/WrapperPage";
import { NotFound } from "./pages/NotFound";

function App() {
  return (
    <>
      <HashRouter>
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
      </HashRouter>
    </>
  );
}

export default App;
