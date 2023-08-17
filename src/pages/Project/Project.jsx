import React from "react";

import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

// Style
import './Project.scss'

// Png
import GalleryOne from '../../assets/images/gallery-1.png'
import Button from "../../components/Button/Button";

function Project() {

    return(
        <section className="project" id="project">
            <div className="project__container _container">
                <Tabs>
                    <TabList>
                        <Tab>Зелений кооператив</Tab>
                        <Tab>Спільнота комфорту</Tab>
                        <Tab>Екологічний Оазис</Tab>
                        <Tab>Беспечне майбутне</Tab>
                        <Tab>Сучасний Вибір</Tab>
                    </TabList>

                    <TabPanel>
                        <div className="project__content">
                            <div className="project__box-text project-text">
                                <div className="project-text__flag completed">Завершено</div>
                                <h3 className="project-text__title _title-3">
                                    <span>Зелений кооператив:</span>
                                    <span>Створення екологічної спільноти</span>    
                                </h3>
                                <div className="project-text__text">
                                    <p>Компанія "Розбудова кооперативів" успішно реалізувала проєкт "Зелений кооператив", що забезпечив створення екологічної спільноти. Резиденти кооперативу заощаджують на комунальних послугах, активно взаємодіють між собою та сприяють збереженню довкілля. Цей проєкт став прикладом сталого розвитку та популяризації екологічних ініціатив у будівництві.</p>
                                </div>
                                <Button link={"#contact"} cls={"project-text__btn _btn-yellow"} text={"Дізнатися більше"}/>
                            </div>
                            <div className="project__box-img">
                                <img src={GalleryOne} alt="Project" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="project__content">
                            <div className="project__box-text project-text">
                                <div className="project-text__flag in-process">В процесі</div>
                                <h3 className="project-text__title _title-3">
                                    <span>Спільнота комфорту:</span>
                                    <span>Створення екологічної спільноти</span>    
                                </h3>
                                <div className="project-text__text">
                                    <p>Компанія "Розбудова кооперативів" успішно реалізувала проєкт "Зелений кооператив", що забезпечив створення екологічної спільноти. Резиденти кооперативу заощаджують на комунальних послугах, активно взаємодіють між собою та сприяють збереженню довкілля. Цей проєкт став прикладом сталого розвитку та популяризації екологічних ініціатив у будівництві.</p>
                                </div>
                                <Button link={"#contact"} cls={"project-text__btn _btn-yellow"} text={"Дізнатися більше"}/>
                            </div>
                            <div className="project__box-img">
                                <img src={GalleryOne} alt="Project" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="project__content">
                            <div className="project__box-text project-text">
                                <div className="project-text__flag completed">Завершено</div>
                                <h3 className="project-text__title _title-3">
                                    <span>Екологічний Оазис:</span>
                                    <span>Створення екологічної спільноти</span>    
                                </h3>
                                <div className="project-text__text">
                                    <p>Компанія "Розбудова кооперативів" успішно реалізувала проєкт "Зелений кооператив", що забезпечив створення екологічної спільноти. Резиденти кооперативу заощаджують на комунальних послугах, активно взаємодіють між собою та сприяють збереженню довкілля. Цей проєкт став прикладом сталого розвитку та популяризації екологічних ініціатив у будівництві.</p>
                                </div>
                                <Button link={"#contact"} cls={"project-text__btn _btn-yellow"} text={"Дізнатися більше"}/>
                            </div>
                            <div className="project__box-img">
                                <img src={GalleryOne} alt="Project" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="project__content">
                            <div className="project__box-text project-text">
                                <div className="project-text__flag completed">Завершено</div>
                                <h3 className="project-text__title _title-3">
                                    <span>Беспечне майбутне:</span>
                                    <span>Створення екологічної спільноти</span>    
                                </h3>
                                <div className="project-text__text">
                                    <p>Компанія "Розбудова кооперативів" успішно реалізувала проєкт "Зелений кооператив", що забезпечив створення екологічної спільноти. Резиденти кооперативу заощаджують на комунальних послугах, активно взаємодіють між собою та сприяють збереженню довкілля. Цей проєкт став прикладом сталого розвитку та популяризації екологічних ініціатив у будівництві.</p>
                                </div>
                                <Button link={"#contact"} cls={"project-text__btn _btn-yellow"} text={"Дізнатися більше"}/>
                            </div>
                            <div className="project__box-img">
                                <img src={GalleryOne} alt="Project" />
                            </div>
                        </div>
                    </TabPanel>
                    <TabPanel>
                        <div className="project__content">
                            <div className="project__box-text project-text">
                                <div className="project-text__flag completed">Завершено</div>
                                <h3 className="project-text__title _title-3">
                                    <span>Сучасний Вибір:</span>
                                    <span>Створення екологічної спільноти</span>    
                                </h3>
                                <div className="project-text__text">
                                    <p>Компанія "Розбудова кооперативів" успішно реалізувала проєкт "Зелений кооператив", що забезпечив створення екологічної спільноти. Резиденти кооперативу заощаджують на комунальних послугах, активно взаємодіють між собою та сприяють збереженню довкілля. Цей проєкт став прикладом сталого розвитку та популяризації екологічних ініціатив у будівництві.</p>
                                </div>
                                <Button link={"#contact"} cls={"project-text__btn _btn-yellow"} text={"Дізнатися більше"}/>
                            </div>
                            <div className="project__box-img">
                                <img src={GalleryOne} alt="Project" />
                            </div>
                        </div>
                    </TabPanel>
                </Tabs>
            </div>
        </section>
    )
}

export default Project