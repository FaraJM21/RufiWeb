import { Select } from "antd";
import React from "react";
import "./style.scss";
import search from "../../assets/img/search.svg";
const Search = () => {
  const handleChange = (value) => {
    console.log(`selected ${value}`);
  };
  return (
    <div className="wrapper">
      <p>Районы</p>
      <p>
        <span>Введите город, адресс, район </span> Ташкент
      </p>
      <Select
        defaultValue="lucy"
        style={{ width: 120, border: "1px solid rgba(0, 0, 0, 0.3)" }}
        onChange={handleChange}
        options={[
          {
            value: "Купить",
            label: "Купить",
          },
          {
            value: "Квартира во вториче и новостройке",
            label: "Квартира во вториче и новостройке",
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
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
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
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
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
      <Select
        defaultValue="lucy"
        style={{ width: 120 }}
        onChange={handleChange}
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
      <div className="search">
        <img src={search} alt="" />
      </div>
    </div>
  );
};

export default Search;
