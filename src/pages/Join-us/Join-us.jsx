import React from "react";
import Button from "../../components/Button/Button";

// Style
import "./Join-us.scss";

function JoinUs() {
  return (
    <section className="join-us" id="join-us">
      <div className="join-us__container _container">
        <div className="join-us__wrapper">
          <h2 className="join-us__title _title-2">
            У нас є 15 років досвіду у будівництві
          </h2>
          <div className="join-us__subtitle">
            <p>Станьте і ви частиною неперевершеного проекту, що забезпечує
            екологічне, комфортне та сучасне життя!</p>
          </div>
          <Button link={"#contact"} cls={"join-us__btn _btn-black"} text={"Приєднатися до нас"} />
        </div>
      </div>
    </section>
  );
}

export default JoinUs;
