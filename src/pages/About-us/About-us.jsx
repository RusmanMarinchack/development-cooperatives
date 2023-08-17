import React from "react";

// Components
import Video from "../../components/Video/Video";
import Card from "../../components/Card/Card";

// Style
import "./About-us.scss";

// Png
import Decor from "../../assets/images/about-us-decor.png";
import Poster from "../../assets/images/poster-video.png";

// Svg
import Combining from "../../assets/images/svg/combining.svg";
import Create from "../../assets/images/svg/create.svg";
import Logistics from "../../assets/images/svg/logistics.svg";

function AboutUs () {

  return (
    <section className="about-us" id="about-us">
      <div className="about-us__container _container">
        <div className="about-us__wrapper">
          <div className="about-us__box-text about-us-text">
            <div className="about-us-text__content">
              <h2 className="about-us-text__title _title-2">
                Чому варто бути з нами?
              </h2>
              <div className="about-us-text__text">
                <p>
                  Ми - злагоджена команда, що поєднує постачальників
                  будматеріалів зі своїми споживачами та логістикою. Наша ідея
                  полягає у тому, щоб створити універсальний механізм, який
                  дозволить нашим клієнтам забудовувати мрію про свої оселі з
                  легкістю та задоволенням.
                </p>
              </div>
            </div>
          </div>
          <div className="about-us__box-video about-us-video">
            <Video 
            src={"https://media.w3.org/2010/05/bunny/trailer.ogv"} 
            poster={Poster}
            />
          </div>
        </div>
        <div className="about-us__box-cards about-us-cards">
          <Card cls={"about-us-cards__card"}>
            <div className="about-us-cards__inner">
              <div className="about-us-cards__icon">
                <img src={Logistics} alt="Icon" />
              </div>
              <h3 className="about-us-cards__title _title-3">
                  Логістика без зайвих клопотів
                </h3>
            </div>
            <div className="about-us-cards__box-text">
              <p>
                Наша команда забезпечує плавний та безпечний хід робіт завдяки
                високопрофесійній логістичній підтримці. Ви можете бути
                впевнені, що ваш будівельний проект отримає своєчасні та якісні
                матеріали, а процес будівництва пройде без зайвих клопотів.
              </p>
            </div>
          </Card>
          <Card cls={"about-us-cards__card"}>
            <div className="about-us-cards__inner">
              <div className="about-us-cards__icon">
              <img src={Combining} alt="Icon" />
              </div>
              <h3 className="about-us-cards__title _title-3">
                  Поєднання ресурсів для майбутнього
                </h3>
            </div>
            <div className="about-us-cards__box-text">
              <p>
                Ми віримо, що справжній успіх полягає у спільності. Тому ми
                створюємо місце, де можливості розкриваються, а співпраця стає
                ключем до досягнення взаємного росту та процвітання.
              </p>
            </div>
          </Card>
          <Card cls={"about-us-cards__card"}>
            <div className="about-us-cards__inner">
              <div className="about-us-cards__icon">
                <img src={Create} alt="Icon" />
              </div>
              <h3 className="about-us-cards__title _title-3">
                  Створюємо разом
                </h3>
            </div>
            <div className="about-us-cards__box-text">
              <p>
                Ми прагнемо бачити результати своєї спільної роботи. Ваша довіра
                та участь є основою нашого успіху. Ми цінуємо кожного клієнта, і
                ваша задоволеність - наша найбільша нагорода.
              </p>
            </div>
          </Card>
        </div>
        <div className="about-us__decor">
          <img src={Decor} alt="Decor" />
        </div>
      </div>
    </section>
  );
}

export default AboutUs;
