// Імпортуємо React для використання JSX та ReactDOM для рендерингу компонентів в DOM
import React from 'react';
import ReactDOM from 'react-dom/client';  // Імпортуємо з 'react-dom/client' для створення кореня для рендерингу

// Імпортуємо глобальні стилі для додатка
import './index.css';

// Імпортуємо головний компонент App
import App from './App';

// Створюємо корінь для рендерингу, який зв'язується з елементом з id "root" в index.html
const root = ReactDOM.createRoot(document.getElementById('root'));

// Використовуємо метод render для рендерингу компонента App в режимі строгого моніторингу (StrictMode)
// StrictMode допомагає знаходити потенційно небезпечні практики в додатку під час розробки
root.render(
  <React.StrictMode>
    {/* Основний компонент додатка */}
    <App />
  </React.StrictMode>
);
