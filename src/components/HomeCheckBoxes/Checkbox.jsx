import React from "react";
import "./checkbox.scss";
import { Checkbox } from "antd";
const Checkboxes = () => {
  const onChange = (e) => {
    console.log(`checked = ${e.target.checked}`);
  };
  return (
    <div className="check-box">
      <p className="checkbox-title">Удобства в доме</p>
      <div className="boxes">
        <div className="box-left">
          <Checkbox onChange={onChange}>Телевизор</Checkbox>
          <Checkbox onChange={onChange}>Кондиционер</Checkbox>
          <Checkbox onChange={onChange}>Кухня</Checkbox>
          <Checkbox onChange={onChange}>Красивый вид</Checkbox>
        </div>
        <div className="box-right">
          <Checkbox onChange={onChange}>Быстрый Wi-Fi</Checkbox>
          <Checkbox onChange={onChange}>Кондиционер</Checkbox>
          <Checkbox onChange={onChange}>Стиральнаыя машина</Checkbox>
        </div>
      </div>
    </div>
  );
};

export default Checkboxes;
