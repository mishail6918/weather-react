import { FC, ReactNode } from "react";
import { Header } from "../components/Header/Header";

interface IWrapperPage {
  children: ReactNode;
}

export const WrapperPage: FC<IWrapperPage> = ({ children }) => {
  return (
    <>
      <Header />
      <div className="container">{children}</div>
    </>
  );
};
