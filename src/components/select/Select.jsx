import { Select } from "antd";
import React from "react";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const Selects = () => (
  <Select
    defaultValue="Ru"
    
    style={{
      width: 120,
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
