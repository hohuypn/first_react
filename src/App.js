import React from "react";
import "./App.css";

import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Switch from "react-bootstrap/esm/Switch";
import NavBar from "./components/navbar/navbar";
import Footer from "./components/footer/footer";
import { Home } from "./pages/home";
import { Introduction } from "./pages/introduce/introduction";
import { Blog } from "./pages/blog/blog";
import { Cart } from "./pages/cart/cart";
import { Product } from "./pages/product";
export default function App() {
  return (
    <>
      <Router>
            <NavBar />
            <div className="content">
                <Switch>
                    <Route exact path="/" component={Home} />
                    <Route path="/product" component={Product} />
                    <Route path="/introduction" component={Introduction} />
                    <Route path="/blog" component={Blog} />
                    <Route path="/cart" component={Cart} />
                </Switch>
            </div>
            <Footer/>
        </Router>
    </>
  );
}
