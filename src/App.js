import "./App.css";
import Header from "./components/HeaderFooter/Header";
import Footer from "./components/HeaderFooter/Footer";
import { BrowserRouter as Router } from "react-router-dom";
import AnimatedRoutes from "./components/Helpers/AnimatedRoutes";
import CartProvider from "./store/CartProvider";
function App() {
  return (
    <>
      <CartProvider>
          <Router>
            <Header />
            <AnimatedRoutes />
            <Footer />
          </Router>
      </CartProvider>
        
    </>
  );
}

export default App;
