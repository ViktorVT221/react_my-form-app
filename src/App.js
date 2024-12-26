// Імпортуємо React для використання JSX
import React from "react";

// Імпортуємо компонент Form з папки components
import Form from "./components/Form";

// Основний компонент App
function App() {
  return (
    // Контейнер для додатка з відступами для зручності
    <div style={{ padding: "20px" }}>
      {/* Викликаємо компонент Form, який, ймовірно, містить логіку для форми */}
      <Form />
    </div>
  );
}

// Експортуємо компонент App для використання в index.js або інших частинах додатку
export default App;
