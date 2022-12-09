import React from "react";

const Characteristcs = (props) => {
  const BoxArray = [
    {
      title: "Адрес",
      info: "Юнусабадский район, 10 кв-л",
    },
    {
      title: "Статус",
      info: "Продажа",
    },
    {
      title: "Тип недвижимости",
      info: "Квартира",
    },
    {
      title: "Город",
      info: "Ташкент",
    },
    {
      title: "Размер",
      info: "45 м2",
    },
    {
      title: "Ванная комната",
      info: "1",
    },
    {
      title: "Спальни",
      info: "1",
    },
    {
      title: "Комнаты",
      info: "2",
    },
    {
      title: "Потребление энергии",
      info: "10 kWh",
    },
    {
      title: "Потребление газа",
      info: "5 kg CO2/m2 ",
    },
    {
      title: "Просмотры объявления",
      info: "312 ",
    },
  ];
  return (
    <div
      className="charasteristics"
      style={{ display: props.infoNum === 2 ? "flex" : "none" }}>
      <div className="table-box">
        {BoxArray.map((item, index) => {
          return (
            <div key={index}>
              <div className="line">
                <div className="title">
                  <p>{item.title}</p>
                </div>
                <div className="info">
                  <span>{item.info}</span>
                </div>
              </div>
              <div className="bottomline"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Characteristcs;
