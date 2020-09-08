import React from "react";
import IMG1 from "../../assets/images/products/1.jpg";
import IMG2 from "../../assets/images/products/2.jpg";
import IMG3 from "../../assets/images/products/3.jpg";
import IMG4 from "../../assets/images/products/4.jpg";
export const Category1 = () => {
    return (
        <>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG1} />
            <p>Tên sản phẩm 1</p>
            <p>Giá sản phẩm 1</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG2} />
            <p>Tên sản phẩm 2</p>
            <p>Giá sản phẩm 2</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG3} />
            <p>Tên sản phẩm 3</p>
            <p>Giá sản phẩm 3</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG4} />
            <p>Tên sản phẩm 4</p>
            <p>Giá sản phẩm 4</p>
          </div>
          </>
    );
};
