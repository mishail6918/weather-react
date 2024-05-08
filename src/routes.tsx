import { Main } from "./pages/Main/Main";

type RouteType = {
  name: string;
  path: string;
  component: JSX.Element;
};

export const allRoutes: RouteType[] = [
  { name: "home", path: "/", component: <Main /> },
];
