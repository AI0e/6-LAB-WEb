const databaseUrl = "https://lab6veb-default-rtdb.firebaseio.com/firebase.json"; 

async function saveToFirebase() {
  const data = {
    text: document.getElementById("textInput").value,
    color: document.getElementById("colorInput").value,
    padding: document.getElementById("paddingInput").value,
    duration: document.getElementById("durationInput").value,
  };
  
  const validationErrors = validateInput(data);

  if (validationErrors.length > 0) {
    alert(validationErrors.join("\n")); 
  } else {
  
  

  try {
    const response = await fetch(databaseUrl, {
      method: "PUT", 
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


  if (!data.text) errors.push("Поле 'text' не може бути порожнім.");
  if (!data.color) errors.push("Поле 'color' не може бути порожнім.");
  if (!data.padding) errors.push("Поле 'padding' не може бути порожнім.");
  if (!data.duration) errors.push("Поле 'duration' не може бути порожнім.");


  if (data.text && data.text.length > 10) {
    errors.push("Поле 'text' не повинно перевищувати 10 символів.");
  }


  if (data.padding && (parseInt(data.padding) > 250 ||parseInt(data.padding) < 0 )) {
    errors.push("Поле 'padding' повинно бути в межах від 0  250.");
  }
  if (data.duration && parseInt(data.duration) < 0 ) {
    errors.push("Поле 'duration' повинно бути більше 0.");
  }


  return errors;
}


document.getElementById("saveButton").addEventListener("click", saveToFirebase);