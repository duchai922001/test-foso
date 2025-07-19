import { Outlet } from "react-router-dom";
import AppBar from "../components/AppBar";
import Container from "../components/BaseUI/Container";
import Footer from "../components/Footer";

const CommonLayout = () => {
  return (
    <div>
      <AppBar />
      <Container style={{ marginTop: 12 }}>
        <Outlet />
      </Container>
      <Footer />
    </div>
  );
};

export default CommonLayout;
