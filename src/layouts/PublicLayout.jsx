import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

const PublicLayout = () => {
  return (
    <>
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer />
    </>
  );
};

export default PublicLayout;
