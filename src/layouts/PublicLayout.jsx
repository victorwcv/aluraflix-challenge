import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const PublicLayout = () => {
  return (
    <div className="public-layout">
      <Navbar />
      <main className="mainframe">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default PublicLayout;
