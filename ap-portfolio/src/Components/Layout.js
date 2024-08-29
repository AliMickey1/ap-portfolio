import { Outlet } from "react-router-dom";
// import Footer from "./Footer";
import Navbar from "./Navbar";

function Layout() {
  return (
    <div>
      <nav>
        <Navbar />
      </nav>
        <Outlet />
      {/* <div>
        <Footer />
      </div> */}
    </div>
  );
}

export default Layout;