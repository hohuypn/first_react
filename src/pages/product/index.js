import React from "react";
import { SideBar } from "../../components/product/sideBar";
// import { BrowserRouter as Router, Route} from "react-router-dom";
// import { Switch } from "react-router";
import { Switch, Route } from "react-router";
import { Category1 } from "../../components/category/category";
import { Category2 } from "../../components/category/category2";
export const Product = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-3 col-sm-3 col-md-3 col-lg-3">
          <SideBar />
        </div>
        <div className="col-xs-9 col-sm-9 col-md-9 col-lg-9">
          <Switch>
            <Route exact path="/product" component={Category1} />
            <Route path="/product/category2" component={Category2} />
          </Switch>
        </div>
      </div>
    </div>
  );
};
