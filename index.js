const databaseUrl = "https://lab6veb-default-rtdb.firebaseio.com/firebase.json"; // Заміни на URL своєї бази Firebase

// Функція для збереження даних
async function saveToFirebase() {
  const data = {
    text: document.getElementById("textInput").value,
    color: document.getElementById("colorInput").value,
    padding: document.getElementById("paddingInput").value,
    duration: document.getElementById("durationInput").value,
  };
  
  const validationErrors = validateInput(data);

  if (validationErrors.length > 0) {
    alert(validationErrors.join("\n")); // Виводимо помилки
  } else {
  
  

  try {
    const response = await fetch(databaseUrl, {
      method: "PUT", // Використовуємо PUT для перезапису об'єкта
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    if (response.ok) {
      alert("Дані успішно збережено!");
    } else {
      console.error("Помилка збереження:", response.statusText);
    }
  } catch (error) {
    console.error("Помилка:", error);
  }
}
}
function validateInput(data) {
  const errors = [];

  // Перевірка на порожні поля
  if (!data.text) errors.push("Поле 'text' не може бути порожнім.");
  if (!data.color) errors.push("Поле 'color' не може бути порожнім.");
  if (!data.padding) errors.push("Поле 'padding' не може бути порожнім.");
  if (!data.duration) errors.push("Поле 'duration' не може бути порожнім.");

  // Перевірка довжини тексту
  if (data.text && data.text.length > 10) {
    errors.push("Поле 'text' не повинно перевищувати 10 символів.");
  }

  // Перевірка padding
  if (data.padding && (parseInt(data.padding) > 250 ||parseInt(data.padding) < 0 )) {
    errors.push("Поле 'padding' повинно бути в межах від 0  250.");
  }
  if (data.duration && (parseInt(data.duration) > 250 ||parseInt(data.duration) < 0 )) {
    errors.push("Поле 'duration' повинно бути в межах від 0 до 150.");
  }

  // Повернення результату
  return errors;
}


document.getElementById("saveButton").addEventListener("click", saveToFirebase);