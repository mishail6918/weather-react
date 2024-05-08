import { Link } from "react-router-dom";

export const NotFound = () => {
  return (
    <div>
      <p>Страница не найдена</p>
      <Link to="/">На главную</Link>
    </div>
  );
};
