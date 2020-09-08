import React from "react";
import IMG1 from "../../assets/images/menfashion/1.jpg";
import IMG2 from "../../assets/images/menfashion/2.jpg";
import IMG3 from "../../assets/images/menfashion/3.jpg";
import IMG4 from "../../assets/images/menfashion/4.jpg";
export const Category2 = () => {
    return (
        <>
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG1} />
            <p>Tên sản phẩm 10</p>
            <p>Giá sản phẩm 11</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG2} />
            <p>Tên sản phẩm 22</p>
            <p>Giá sản phẩm 22</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG3} />
            <p>Tên sản phẩm 33</p>
            <p>Giá sản phẩm 33</p>
          </div>
          <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
            <img src={IMG4} />
            <p>Tên sản phẩm 44</p>
            <p>Giá sản phẩm 44</p>
          </div>
          </>
    );
};
