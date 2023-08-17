import React from "react";
import { animated, useSpring } from '@react-spring/web'

// Components
import Button from "../../components/Button/Button";

// Style
import './Home.scss'

function Home() {
    const styles = useSpring({
        from: { 
            x: -100,
            opacity: 0
         },
        to: { 
            x: 0,
            opacity: 1
         },
      })

    return(
        <section className="home">
            <div className="home__container _container">
                <div className="home__wrapper">
                    <div className="home__inner">
                        <animated.h1 style={styles} className="home__title _title-1">Розбудова кооперативів</animated.h1>
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