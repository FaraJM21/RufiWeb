import { Checkbox } from "antd";
import React from "react";
import "./modal.scss";
const onChange = (checkedValues) => {
  console.log("checked = ", checkedValues);
};
const plainOptions = [
  "Квартира во вторичке",
  "Квартира в новостройке",
  "Комната",
];
const options = [
  {
    label: 1,
    value: 1,
  },
  {
    label: 2,
    value: 2,
  },
  {
    label: 3,
    value: 3,
  },
  {
    label: 4,
    value: 4,
  },
  {
    label: 5,
    value: 5,
  },
];

const ModalCheckbox = () => (
  <>
    <div className="labels">
      <div className="label-inner">
        Жильё
        <Checkbox.Group options={plainOptions} onChange={onChange} />
      </div>
    </div>

    <div className="labels">
      <div className="label-inner">
        Комнат
        <Checkbox.Group options={options} onChange={onChange} id="rowmodal" />
      </div>
    </div>
  </>
);
export default ModalCheckbox;
