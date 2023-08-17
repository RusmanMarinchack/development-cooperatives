import React from "react";
import Form from "../../components/Form/Form";

// Style
import './Contact.scss'

// Svg
import { ReactComponent as Phone } from '../../assets/images/svg/phone.svg'
import { ReactComponent as Location } from '../../assets/images/svg/location.svg'
import { ReactComponent as Email } from '../../assets/images/svg/email.svg'

function Contact() {
    return(
        <section className="contact" id="contact">
            <div className="contact__container _container">
                <div className="contact__wrapper">
                    <div className="contact__box-form contact-box-form">
                        <h2 className="contact-box-form__title _title-2">Залишились питання?</h2>
                        <div className="contact-box-form__subtitle">
                            <p>Заповніть форма у наші консультанти звяжуться з вами у найближчий час</p>
                        </div>
                        <Form />
                    </div>
                    <div className="contact__box-info contact-box-info">
                        <div className="contact-box-info__inner">
                            <div className="contact-box-info__label _title-3">Наші контакти</div>
                            <ul className="contact-box-info__list">
                                <li className="contact-box-info__item">
                                    <a href="tel:88006575981" className="contact-box-info__link">
                                        <Phone />
                                        <span>8 800 657 59 81</span>
                                    </a>
                                </li>
                                <li className="contact-box-info__item">
                                    <a href="mailto:buildingcooperatives@mail.ua" className="contact-box-info__link">
                                        <Email />
                                        <span>buildingcooperatives@mail.ua</span>
                                    </a>
                                </li>
                                <li className="contact-box-info__item">
                                    <a href="#" className="contact-box-info__link">
                                        <Location />
                                        <span>36231, Івано-Франківська область, місто Івано-Франківськ, вул. Прорізна, 81</span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                        <div className="contact-box-info__inner work">
                            <div className="contact-box-info__label _title-3">Розклад роботи</div>
                            <ul className="contact-box-info__list">
                                <li className="contact-box-info__item">
                                    Пн - Пт : 10:00 - 20:00
                                </li>
                                <li className="contact-box-info__item">
                                    Сб - Нд : 10:00 - 18:00
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact