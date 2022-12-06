import React from "react";
import Checkboxes from "../HomeCheckBoxes/Checkbox";
import LocationCheckboxes from "../HomeCheckBoxes/LocationCheckboxes";
const Info = (props) => {
  return (
    <div
      className="info-page"
      style={{ display: props.infoNum === 1 ? "flex" : "none" }}
    >
      <div className="info-text">
        <p>
          Эксклюзивное предложение! Свободная продажа! Двухуровневый
          дизайнерский лофт с антресолью в комплексе "Вольная, 25". 15 минут
          пешком от метро Семеновская. Высокие потолки (4,8 метра). Закрытый
          двор, места общего пользования для жителей ЖК . Прекрасный, готовый
          арендный бизнес! Лучшее предложение, как для проживания, так и для
          инвестиции и коммерческого использования. Комплекс высокого уровня,
          бизнес класс! Презентабельная входная группа. Комплекс заселен.
          Рассмотрим ипотеку. Показы оперативно.
        </p>
      </div>
      <div className="arrow-line"></div>
      <Checkboxes />
      <div className="arrow-line" ></div>
      <LocationCheckboxes />
    </div>
  );
};

export default Info;
