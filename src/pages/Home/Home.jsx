import React from "react";

// Components
import Button from "../../components/Button/Button";

// Style
import './Home.scss'

function Home() {
    return(
        <section className="home">
            <div className="home__container _container">
                <div className="home__wrapper">
                    <div className="home__inner">
                        <h1 className="home__title _title-1">Розбудова кооперативів</h1>
                        <div className="home__subtitle">
                            <p>Поєднуємо постачальників будматеріалів зі своїми споживачами та логістикою.</p>
                        </div>
                    </div>
                    <Button id={"contact"} cls={"home__btn _btn-yellow"} text={"Дізнатися більше"} />
                </div>
            </div>
        </section>
    )
}

export default Home