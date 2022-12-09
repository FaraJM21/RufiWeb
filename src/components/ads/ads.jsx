import { Select } from "antd";
import React, { useState } from "react";
import map from "../../assets/img/map.svg";
import "./style.scss";
const Ads = (props) => {
const [toggle,setToggle] = useState(false)

  const myFunc = () =>{
    setToggle(!toggle)
    props.changeFunc(toggle)
  }
  return (
    <section className="ads">
      <div className="wrapper">
        <div className="left">
          <p className="count">6 032 объявлений</p>
          <p className="sort">Сортировать:</p>
          <Select
            defaultValue="newOffer"
            onChange={""}
            className="select"
            options={[
              {
                value: "newOffer",
                label: "Новые предложения ",
              },
              {
                value: "option 1",
                label: "option 1",
              },
              {
                value: "option 2",
                label: "option 2",
              },
              {
                value: "option 3",
                label: "option 3",
              },
            ]}
          />
        </div>
        {!toggle ?
        <div className="right">
          <img src={map} alt="" />
          <p onClick={myFunc}>На карте</p>
        </div>
        :
        <div className="right">
          <p onClick={myFunc}>Вернуть</p>
        </div>}
      </div>
    </section>
  );
};

export default Ads;
