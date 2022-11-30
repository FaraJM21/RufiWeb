import { Select } from "antd";
import React from "react";
import "./select.scss";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selects = () => (
  <Select
  id="select"
    defaultValue="Ru"
    bordered={false}
    onChange={handleChange}
    options={[
      {
        value: "uz",
        label: "Uz",
      },
      {
        value: "ru",
        label: "Ru",
      },
    ]}
  />
);
export default Selects;
