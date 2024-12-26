// Імпортуємо необхідні бібліотеки та компоненти
import React from "react";
import { useForm } from "react-hook-form"; // Хук для роботи з формами
import { yupResolver } from "@hookform/resolvers/yup"; // Інтеграція yup для валідації з React Hook Form
import * as yup from "yup"; // Бібліотека для валідації
import "../App.css"; // Підключаємо стилі для форми

// Створення схеми валідації за допомогою yup
const validationSchema = yup.object({
  // Валідація для поля "name"
  name: yup
    .string()  // Перевіряємо, чи значення є рядком
    .required("Ім'я є обов'язковим")  // Поле є обов'язковим
    .min(3, "Мінімум 3 символи"),  // Мінімум 3 символи

  // Валідація для поля "email"
  email: yup
    .string()  // Перевіряємо, чи значення є рядком
    .required("Email є обов'язковим")  // Поле є обов'язковим
    .email("Некоректний формат email"),  // Перевіряємо, чи є це дійсним email

  // Валідація для поля "age"
  age: yup
    .number()  // Перевіряємо, чи значення є числом
    .required("Вік є обов'язковим")  // Поле є обов'язковим
    .positive("Вік має бути додатнім числом")  // Вік має бути додатнім числом
    .integer("Вік має бути цілим числом"),  // Вік має бути цілим числом

  // Валідація для поля "website"
  website: yup
    .string()  // Перевіряємо, чи значення є рядком
    .url("Некоректний URL-адрес")  // Перевіряємо, чи це дійсна URL-адреса
    .required("Посилання є обов'язковим")  // Поле є обов'язковим
    .matches(
      /^(https?:\/\/)?(www\.)?kickstarter\.com\/start(\/.*)?$/,  // Перевіряємо, чи відповідає URL формату Kickstarter
      "URL має бути посиланням на Kickstarter"
    ),
});

export default function Form() {
  // Ініціалізація хука useForm з валідацією через yup
  const { register, handleSubmit, formState: { errors } } = useForm({
    resolver: yupResolver(validationSchema), // Інтеграція схеми валідації yup
  });

  // Обробник при сабміті форми
  const onSubmit = (data) => {
    console.log(data); // Вивести дані форми в консоль
  };

  return (
    <div className="form-container">
      <h2>Форма реєстрації</h2>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        {/* Поле для імені */}
        <div className="form-group">
          <label>Ім'я:</label>
          <input className="form-input" {...register("name")} />
          {/* Вивести повідомлення про помилку, якщо вона є */}
          {errors.name && <p className="error">{errors.name.message}</p>}
        </div>

        {/* Поле для email */}
        <div className="form-group">
          <label>Email:</label>
          <input className="form-input" {...register("email")} />
          {/* Вивести повідомлення про помилку, якщо вона є */}
          {errors.email && <p className="error">{errors.email.message}</p>}
        </div>

        {/* Поле для віку */}
        <div className="form-group">
          <label>Вік:</label>
          <input className="form-input" type="number" {...register("age")} />
          {/* Вивести повідомлення про помилку, якщо вона є */}
          {errors.age && <p className="error">{errors.age.message}</p>}
        </div>

        {/* Поле для посилання */}
        <div className="form-group">
          <label>Посилання (наприклад, Kickstarter):</label>
          <input className="form-input" {...register("website")} />
          {/* Вивести повідомлення про помилку, якщо вона є */}
          {errors.website && <p className="error">{errors.website.message}</p>}
        </div>

        {/* Кнопка для відправлення форми */}
        <button className="submit-btn" type="submit">Надіслати</button>
      </form>
    </div>
  );
}
