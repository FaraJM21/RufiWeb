import { Modal } from "antd";
import React, { useEffect, useState } from "react";
import settings from "../../assets/img/setting.svg";
import ModalCheckbox from "../modalCheckbox/ModalCheckbox";
import "./modalsettings.scss";
const ModalSettings = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [choose, setChoose] = useState(true);

  const [width, setWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => setWidth(window.innerWidth);
    if (width > 630) {
      setIsModalOpen(false);
    }
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };
  return (
    <>
      <img src={settings} alt="404" onClick={showModal} />

      <Modal
        title="Фильтры"
        centered
        open={isModalOpen}
        okButtonProps={{
          children: "Custom OK",
        }}
        cancelButtonProps={{
          children: "Custom cancel",
        }}
        okText="Подвердит"
        cancelText="Отменить"
        onOk={handleOk}
        onCancel={handleCancel}
      >
        <div className="modal-inner">
          <div className="modal-buttons">
            <button
              onClick={() => setChoose(true)}
              style={{ background: choose ? "#EFEFEF" : "white" }}
            >
              Купить
            </button>
            <button
              onClick={() => setChoose(false)}
              style={{ background: choose ? "white" : "#EFEFEF" }}
            >
              Снять
            </button>
          </div>
          <ModalCheckbox />

          <div className="input-inner">
            <label>
              {" "}
              <input type="number" placeholder="От" />
              <span>$</span>
            </label>

            <label>
              <input type="number" placeholder="До" />
              <span>$</span>
            </label>
          </div>
        </div>
      </Modal>
    </>
  );
};
export default ModalSettings;
