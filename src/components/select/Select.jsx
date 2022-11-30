import { Select } from "antd";
import React from "react";
import "./select.scss";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selects = () => (
  <div className="myselect">
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
  </div>
);
export default Selects;
