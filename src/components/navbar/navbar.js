import React from "react";
import "./navbar.css";
import LOGO from "../../assets/images/logo.svg";
import { Link } from "react-router-dom";

export default function NavBar() {
  return (
    <>
      <div className="nav-bar">
        <div className="container">
          <div className="row">
            <div className="col-12 d-flex flex-wrap justify-content-between align-items-center">
              <div className="site-branding d-flex align-items-center">
                <Link className="d-block" to="" rel="home">
                  <img className="d-block" src={LOGO} alt="logo" />
                </Link>
              </div>
              <nav className="site-navigation d-flex justify-content-end align-items-center">
                <ul className="d-flex flex-column flex-lg-row justify-content-lg-end align-content-center">
                  <li className="current-menu-item">
                    <Link to="./">Trang chủ</Link>
                  </li>
                  <li>
                    <Link to="./product">Sản phẩm</Link>
                  </li>
                  <li>
                    <Link to="Blog">Blog</Link>
                  </li>
                  <li>
                    <Link to="./introduction">Giới thiệu</Link>
                  </li>

                  {/* <li className="nav-form-search">
                    <form action="#" method="get">
                      <div className="input-group">
                        <input type="text" name="search" />
                        <span className="input-group">
                          <button type="submit"><i className="glyphicon glyphicon-search" /></button>
                        </span>
                      </div>
                    </form>
                  </li> */}
                  <li className="nav-user-icons">
                    <Link className="account-user">
                      <i className="glyphicon glyphicon-user" />
                    </Link>
                  </li>
                  <li className="nav-user-icons">
                    <Link to="./cart" className="account-user">
                      <i className="glyphicon glyphicon-shopping-cart" />
                    </Link>
                  </li>
                </ul>
              </nav>
              <div className="hamburger-menu d-lg-none">
                <span />
                <span />
                <span />
                <span />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
