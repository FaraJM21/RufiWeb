import { Select } from "antd";
import React from "react";
import "./selectgroups.scss";
const handleChange = (value) => {
  console.log(`selected ${value}`);
};
const SelectGroups = (props) => (
  <div className="selects">
    <Select
      onClick={() => props.setShowDropdown(false)}
      bordered={false}
      defaultValue="Купить"
      onChange={handleChange}
      options={[
        {
          value: "Купить",
          label: "Купить",
        },
        {
          value: "Продать",
          label: "Продать",
        },
        {
          value: "Арендовать",
          label: "Арендовать",
        },
      ]}
    />
    <Select
      onClick={() => props.setShowDropdown(false)}
      defaultValue="Дом"
      bordered={false}
      onChange={handleChange}
      options={[
        {
          value: "Дом",
          label: "Дом",
        },
        {
          value: "Дача",
          label: "Дача",
        },
      ]}
    />
    <Select
      onClick={() => props.setShowDropdown(false)}
      bordered={false}
      defaultValue="Комнат"
      onChange={handleChange}
      options={[
        {
          value: 1,
          label: 1,
        },
        {
          value: 2,
          label: 2,
        },

        {
          value: 3,
          label: 3,
        },

        {
          value: 4,
          label: 4,
        },

        {
          value: 5,
          label: 5,
        },
      ]}
    />
  </div>
);
export default SelectGroups;
