import React from "react";
import "./checkbox.scss";
import { Checkbox } from "antd";
const onChange = (e) => {
  console.log(`checked = ${e.target.checked}`);
};
const LocationCheckboxes = () => {
  return (
    <div className="check-box">
    <p className="checkbox-title">Что рядом</p>
    <div className="boxes">
      <div className="box-left">
        <Checkbox onChange={onChange}>Супермаркет 450 м</Checkbox>
        <Checkbox onChange={onChange}>Аптека 600 м</Checkbox>
        <Checkbox onChange={onChange}>Метро “Туркистон”</Checkbox>
        <Checkbox onChange={onChange}>Автобусная остановка</Checkbox>
      </div>
      <div className="box-right">
        <Checkbox onChange={onChange}>Поликлиника 1800 м</Checkbox>
        <Checkbox onChange={onChange}>Мусорка 400 м</Checkbox>
        <Checkbox onChange={onChange}>Кафе 1200 м</Checkbox>
      </div>
    </div>
  </div>
  );
};

export default LocationCheckboxes;
