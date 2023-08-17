import React from "react";
import { useForm } from "react-hook-form";

// Style
import "./Form.scss";

// Components
import Button from "../Button/Button";

function Form(cls) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  function heandlerForm(data) {
    console.log(data);
    alert(`
    Імя - ${data["forms-name"]}
    Телефон - ${data["forms-phone"]}
    Запитання - ${data["forms-question"]}
    `);
    reset();
  }

  return (
    <form
      action="#"
      className={`${cls} forms`}
      onSubmit={handleSubmit(heandlerForm)}
    >
      <div className="forms__inner">
        <div className="forms__item">
          <input
            {...register("forms-name", {
              required: "Ведіть своє імя!",
            })}
            className={`${errors["forms-name"] ? "error" : ""}`}
            type="text"
            id="forms-name"
            name="forms-name"
            placeholder=" "
          />
          <label htmlFor="forms-name">Ім’я</label>
          {errors["forms-name"] && (
            <p className={`${errors["forms-name"] ? "error" : ""}`}>
              {errors["forms-name"].message || "Поле потрібно заповнити!"}
            </p>
          )}
        </div>
        <div className="forms__item">
          <input
            id="forms-phone"
            className={`${errors["forms-phone"] ? "error" : ""}`}
            name="forms-phone"
            {...register("forms-phone", {
              required: "Телефон потрібно заповнити поністю!",
              minLength: {
                value: 12,
                message: "Ведіть повний номер телефону, почніть з 380!",
              },
              maxLength: {
                value: 12,
                message: "За багато цифер!",
              },
            })}
            type="number"
            defaultValue={380}
            placeholder=" "
          />
          <label htmlFor="forms-phone">Телефон</label>
          {errors["forms-phone"] && (
            <p className={`${errors["forms-phone"] ? "error" : ""}`}>
              {errors["forms-phone"].message || "Поле потрібно заповнити!"}
            </p>
          )}
        </div>
      </div>
      <div className="forms__item">
        <textarea
          {...register("forms-question", {
            required: "Задайте своє запитання!",
          })}
          className={`${errors["forms-question"] ? "error" : ""}`}
          id="forms-question"
          name="forms-question"
          placeholder=" "
        />
        <label htmlFor="forms-question">Ваше питання...</label>
        {errors["forms-question"] && (
          <p className={`${errors["forms-question"] ? "error" : ""}`}>
            {errors["forms-question"].message || "Поле потрібно заповнити!"}
          </p>
        )}
      </div>
      <div className="forms__box-btn">
        <button
          type="submit"
          className="forms__btn _btn-yellow"
        >Відправити запит</button>
      </div>
    </form>
  );
}

export default Form;
