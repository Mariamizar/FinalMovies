import Header from "../components/Header";
import HomePage from "./HomePage";
import Footer from "../components/Footer";

function Layout({ children }) {
  return (
    <div>
      <Header /> {}
      <main>{children}</main>
      <Footer />
    </div>
  );
}

export default Layout;
