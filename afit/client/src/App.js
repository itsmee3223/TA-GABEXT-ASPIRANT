import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Sidebar, Footer, Toast, ErrorBoundary } from "./components";
import { useProductsContext } from "./context/products_context";
import "react-toastify/dist/ReactToastify.css";
import {
  Home,
} from "./pages";

function App() {
  const { isSidebarOpen } = useProductsContext();
  const overflowPropertyToHideScroll =
    isSidebarOpen === true ? "hidden" : "scroll";
    
    return (
      <div style={{ minHeight: "100%", overflowPropertyToHideScroll }}>
        <Router>
          <Toast />
          <Navbar />
          <Sidebar />
          <ErrorBoundary>
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
            </Switch>
            <Footer />
          </ErrorBoundary>
        </Router>
      </div>
    );
}

export default App;
