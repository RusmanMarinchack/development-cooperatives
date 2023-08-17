import React from "react";

// Slider-Swiper
import { Swiper, SwiperSlide } from "swiper/react";

import { Pagination } from "swiper/modules";
import "swiper/scss";
import "swiper/scss/pagination";

// Style
import "./With-us.scss";

// Components
import Card from "../../components/Card/Card";

// Png
import AnnaKarpenko from "../../assets/images/aнна-карпенко.png";
import IvanMazeyniuk from "../../assets/images/іван-мазейнюк.png";

function WithUs() {
  return (
    <section className="with-us">
      <div className="with-us__container _container">
        <h2 className="with-us__title _title-2">
          Що говорять про нас ті хто вже з нами
        </h2>
        <div className="with-us__wrapper with-us-wrapper">
          <Swiper
             breakpoints={{
                0: {
                slidesPerView: 1,
                },
                1023.98: {
                slidesPerView: 2,
                },
            }}
            modules={[Pagination]}
            spaceBetween={24}
            slidesPerView={2}
            pagination={{ clickable: true }}
          >
            <SwiperSlide>
              <Card cls={"with-us-wrapper__card"}>
                <div className="with-us-wrapper__box-img">
                  <img src={AnnaKarpenko} alt="Іван Мазейнюк" />
                </div>
                <div className="with-us-wrapper__box-info">
                  <h3 className="with-us-wrapper__name _title-3">Анна Карпенко</h3>
                  <div className="with-us-wrapper__label">
                    Зелений кооператив
                  </div>
                  <div className="with-us-wrapper__text">
                    <p>
                      Моя родина і я вдячні компанії "Розбудова кооперативів" за
                      чудовий досвід співпраці. Вони допомогли нам зреалізувати
                      нашу мрію про власний будинок. Професійний підхід, висока
                      якість робіт і швидке виконання завдань - це те, чому
                      можна довіряти. Рекомендую з усієї душі!
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card cls={"with-us-wrapper__card"}>
                <div className="with-us-wrapper__box-img">
                  <img src={IvanMazeyniuk} alt="Анна Карпенко" />
                </div>
                <div className="with-us-wrapper__box-info">
                  <h3 className="with-us-wrapper__name _title-3">Іван Мазейнюк</h3>
                  <div className="with-us-wrapper__label">
                    Спільнота комфорту
                  </div>
                  <div className="with-us-wrapper__text">
                    <p>
                      Приємно співпрацювати з командою "Розбудова кооперативів".
                      Вони допомогли нам обрати оптимальні рішення для нашого
                      будівництва і професійно втілили наші ідеї в реальність.
                      Результат перевершив наші очікування, і ми залишаємось
                      дуже задоволені співпрацею.
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card cls={"with-us-wrapper__card"}>
                <div className="with-us-wrapper__box-img">
                  <img src={AnnaKarpenko} alt="Іван Мазейнюк" />
                </div>
                <div className="with-us-wrapper__box-info">
                  <h3 className="with-us-wrapper__name _title-3">Анна Карпенко</h3>
                  <div className="with-us-wrapper__label">
                    Зелений кооператив
                  </div>
                  <div className="with-us-wrapper__text">
                    <p>
                      Моя родина і я вдячні компанії "Розбудова кооперативів" за
                      чудовий досвід співпраці. Вони допомогли нам зреалізувати
                      нашу мрію про власний будинок. Професійний підхід, висока
                      якість робіт і швидке виконання завдань - це те, чому
                      можна довіряти. Рекомендую з усієї душі!
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card cls={"with-us-wrapper__card"}>
                <div className="with-us-wrapper__box-img">
                  <img src={IvanMazeyniuk} alt="Анна Карпенко" />
                </div>
                <div className="with-us-wrapper__box-info">
                  <h3 className="with-us-wrapper__name _title-3">Іван Мазейнюк</h3>
                  <div className="with-us-wrapper__label">
                    Спільнота комфорту
                  </div>
                  <div className="with-us-wrapper__text">
                    <p>
                      Приємно співпрацювати з командою "Розбудова кооперативів".
                      Вони допомогли нам обрати оптимальні рішення для нашого
                      будівництва і професійно втілили наші ідеї в реальність.
                      Результат перевершив наші очікування, і ми залишаємось
                      дуже задоволені співпрацею.
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
            <SwiperSlide>
              <Card cls={"with-us-wrapper__card"}>
                <div className="with-us-wrapper__box-img">
                  <img src={AnnaKarpenko} alt="Іван Мазейнюк" />
                </div>
                <div className="with-us-wrapper__box-info">
                  <h3 className="with-us-wrapper__name _title-3">Анна Карпенко</h3>
                  <div className="with-us-wrapper__label">
                    Зелений кооператив
                  </div>
                  <div className="with-us-wrapper__text">
                    <p>
                      Моя родина і я вдячні компанії "Розбудова кооперативів" за
                      чудовий досвід співпраці. Вони допомогли нам зреалізувати
                      нашу мрію про власний будинок. Професійний підхід, висока
                      якість робіт і швидке виконання завдань - це те, чому
                      можна довіряти. Рекомендую з усієї душі!
                    </p>
                  </div>
                </div>
              </Card>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </section>
  );
}

export default WithUs;
