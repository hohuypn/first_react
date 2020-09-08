import React from "react";
import "./footer.css";
import LOGO from '../../assets/images/footer-logo.svg';
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <>
      <div className="footer-widgets">
        <div className="container">
          <div className="row">
            <div className="col-12 col-md-6 col-lg-3">
              <div className="foot-about">
                <h2>
                  <Link className="foot-logo" to="">
                    <img src={LOGO} alt="footer logo" />
                  </Link>
                </h2>
                <p>
                  K-Shop là một cửa hàng bán hàng online.
                  Ở đây chúng tôi bán tất cả mọi thứ bạn muốn.
                  Chúng tôi luôn đảm bảo chất lượng sản phẩm tốt nhất
                </p>
                <ul className="d-flex flex-wrap align-items-center">
                  <li>
                    <Link href="#">
                      <i className="fa fa-pinterest-p" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-facebook" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-twitter" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-dribbble" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-behance" />
                    </Link>
                  </li>
                  <li>
                    <Link href="#">
                      <i className="fa fa-linkedin" />
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <h2>Link hữu ích</h2>
              <ul>
                <li>
                  <Link href="#">Chính sách bảo mật</Link>
                </li>
                <li>
                  <Link href="#">Về chúng tôi</Link>
                </li>
                <li>
                  <Link href="#">Blog</Link>
                </li>
              </ul>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div className="foot-latest-news">
                <h2>Tin mới nhất</h2>
                <ul>
                  <li>
                    <h3>
                      <Link href="#">Sản phẩm mới về</Link>
                    </h3>
                    <div className="posted-date">MArch 12, 2020</div>
                  </li>
                  <li>
                    <h3>
                      <Link href="#">Sản phẩm mới về</Link>
                    </h3>
                    <div className="posted-date">MArch 12, 2020</div>
                  </li>
                  <li>
                    <h3>
                      <Link href="#">Sản phẩm mới về</Link>
                    </h3>
                    <div className="posted-date">MArch 12, 2020</div>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-12 col-md-6 col-lg-3 mt-5 mt-md-0">
              <div className="foot-contact">
                <h2>Liên hệ</h2>
                <ul>
                  <li>
                    <i className="fa fa-phone" />
                    <span>+84 677 899 223</span>
                  </li>
                  <li>
                    <i className="fa fa-envelope" />
                    <span>kshop@gmail.com</span>
                  </li>
                  <li>
                    <i className="fa fa-map-marker" />
                    <span>101B Lê Hữu Trác, Sơn Trà, Đà Nẵng</span>
                  </li>
                </ul>
              </div>
              <div className="subscribe-form">
                <form className="d-flex flex-wrap align-items-center">
                  <input type="email" placeholder="Email của bạn" />
                  <input type="submit" value="Gửi" />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
