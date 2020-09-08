import React from "react";
import { Link } from "react-router-dom";
import "./sideBar.css";

export const SideBar = () => {
  return (
    <ul className="sidebar-categories">
      <li>
        <label className="tablinks">Danh Mục Sản Phẩm</label>
      </li>
      <li>
        <Link to="/product">Thời Trang Nam</Link>
      </li>
      <li>
        <Link to="/product/category2">Thời Trang Nữ</Link>
      </li>
      <li>
        <Link to="#">Điện Thoại & Phụ Kiện</Link>
      </li>
      <li>
        <Link to="#">Du Lịch & Thể Thao</Link>
      </li>
      <li>
        <Link to="#">Giày Dép Nam</Link>
      </li>
      <li>
        <Link to="#">Váy Nữ</Link>
      </li>
      <li>
        <Link to="#">Đồng Hồ Nam</Link>
      </li>
    </ul>
  );
};
