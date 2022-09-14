import { Outlet } from "react-router-dom";
import { Footer } from "../Footer";
import { Nav } from "../Nav";
import { Wrapper } from "./styles";

export const MainTemplate = () => {
  return (
    <>
      <Nav />
      <Wrapper>
        <Outlet />
      </Wrapper>
      <Footer />
    </>
  );
};
