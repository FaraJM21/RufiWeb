import { Select } from "antd";
import React from "react";
import map from "../../assets/img/map.svg";
import "./style.scss";

const Ads = () => {
  return (
    <section className="ads">
      <div className="wrapper">
        <div className="left">
          <p className="count">6 032 объявлений найдено</p>
          <p className="sort">Сортировать:</p>
          <Select
            defaultValue="lucy"
            style={{ width: 120 }}
            onChange={""}
            className="select"
            options={[
              {
                value: "jack",
                label: "Jack",
              },
              {
                value: "lucy",
                label: "Lucy",
              },
              {
                value: "disabled",
                disabled: true,
                label: "Disabled",
              },
              {
                value: "Yiminghe",
                label: "yiminghe",
              },
            ]}
          />
        </div>
        <div className="right">
          <img src={map} alt="" />
          <p>На карте</p>
        </div>
      </div>
    </section>
  );
};

export default Ads;
