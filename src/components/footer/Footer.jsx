import React from "react";
import "./footer.scss";
import googleplay from "../../assets/img/Google_Play-Icon-Logo.wine.svg";
import appstore from "../../assets/img/App_Store_(iOS)-Logo.wine.svg";

function Footer() {
  return (
    <footer>
      <div className="main">
        <div className="container">
          <div className="footer">
            <div className="first-body">
              <h3 className="logo">Logo</h3>
              <div className="lists">
                <div className="list">
                  <ul>
                    <li className="top">В районе </li>
                    <li>Юнусабад</li>
                    <li>Мирабад</li>
                    <li>Чилонзар</li>
                    <li>Мирзо-Улугбек</li>
                    <li>Яшнабад</li>
                    <li style={{ textDecoration: "underline" }}>Все районы</li>
                  </ul>
                </div>
                <div className="list">
                  <ul>
                    <li className="top">У метро</li>
                    <li>Юнусабад</li>
                    <li>Туркистон</li>
                    <li>Минор</li>
                    <li>Пушкин</li>
                    <li>Алишер Навои</li>
                    <li style={{ textDecoration: "underline" }}>
                      Все станции метро{" "}
                    </li>
                  </ul>
                </div>
                <div className="list">
                  <ul>
                    <li className="top">Комнатность</li>
                    <li>Однокомнатные</li>
                    <li>Двухкомнатные</li>
                    <li>Трёхкомнатные</li>
                    <li>Многокомнатные</li>
                  </ul>
                </div>

                <div className="stores">
                  <div className="store">
                    <img src={appstore} alt="404" width={25} height={28} />
                    <p>
                      Загрузите в <br />
                      <strong>App Store</strong>{" "}
                    </p>
                  </div>
                  <div className="store">
                    <img src={googleplay} alt="404" width={25} height={28} />
                    <p>
                      Загрузите <br />
                      <strong>Play Market</strong>{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="second-body">
              <div className="stores" style={{flexDirection:'row'}}>
                <div className="store">
                  <img src={appstore} alt="404" width={25} height={28} />
                  <p>
                    Загрузите в <br />
                    <strong>App Store</strong>{" "}
                  </p>
                </div>
                <div className="store">
                  <img src={googleplay} alt="404" width={25} height={28} />
                  <p>
                    Загрузите <br />
                    <strong>Play Market</strong>{" "}
                  </p>
                </div>
              </div>

              <div className="second-list">
                <h3 className="logo">Logo</h3>
                <div className="list-box">
                  <div className="list">
                    <ul>
                      <li className="top">У метро</li>
                      <li>Юнусабад</li>
                      <li>Туркистон</li>
                      <li>Минор</li>
                      <li>Пушкин</li>
                      <li>Алишер Навои</li>
                      <li style={{ textDecoration: "underline" }}>
                        Все станции метро{" "}
                      </li>
                    </ul>

                    <ul>
                      <li className="top">В районе </li>
                      <li>Юнусабад</li>
                      <li>Мирабад</li>
                      <li>Чилонзар</li>
                      <li>Мирзо-Улугбек</li>
                      <li>Яшнабад</li>
                      <li style={{ textDecoration: "underline" }}>
                        Все районы
                      </li>
                    </ul>
                  </div>
                  <div className="list">
                    <ul>
                      <li className="top">Комнатность</li>
                      <li>Однокомнатные</li>
                      <li>Двухкомнатные</li>
                      <li>Трёхкомнатные</li>
                      <li>Многокомнатные</li>
                    </ul>

                    <ul>
                      <li className="top">Тип недвижимости</li>
                      <li>Квартира</li>
                      <li>Участок</li>
                      <li>Комната</li>
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
