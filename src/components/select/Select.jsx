import { Select } from "antd";
import React from "react";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selects = () => (
  <Select
    defaultValue="Ru"
    size="small"
    style={{
      width: 90,
    }}
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
