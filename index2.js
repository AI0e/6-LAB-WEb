const databaseUrl = "https://lab6veb-default-rtdb.firebaseio.com/firebase.json"; // Заміни на URL своєї бази Firebase

// Функція для завантаження даних
async function loadFromFirebase() {
  try {

    const response = await fetch(databaseUrl);
    if (response.ok) {
      const data = await response.json();
      if (data) {
        const picture = document.querySelector(".picture");
        picture.style.fontSize = `4em`;
        const preview = document.querySelectorAll(".preview");
        const preview1 = document.querySelector("#preview1");
        const preview2 = document.querySelector("#preview2");
        const preview3 = document.querySelector("#preview3");
        const preview4 = document.querySelector("#preview4");
        const preview5 = document.querySelector("#preview5");
        const preview6 = document.querySelector("#preview6");
        const preview7 = document.querySelector("#preview7");
        preview.forEach((preview)=>{
        preview.textContent = data.text;
        preview.style.color = data.color;
        preview.style.margin= `${data.padding}px`;
        preview.style.fontsize = '1rem';
        });
        preview1.style.animation = `glitch3 ${data.duration}ms infinite`;
        preview2.style.animation = `glitch4 ${data.duration}ms infinite`;
        preview3.style.animation = `glitch3 ${data.duration}ms infinite`;
        preview4.style.animation = `glitch1 ${data.duration}ms infinite`;
        preview5.style.animation = `glitch5 ${data.duration}ms infinite`;
        preview6.style.animation = `glitch1 ${data.duration}ms infinite`;
        preview7.style.animation = `glitch2 ${data.duration}ms infinite`;
      }else {
        alert("Дані відсутні у Firebase!");
      }
    } else {
      console.error("Помилка завантаження:", response.statusText);
  }
  } catch (error) {
    console.error("Помилка:", error);
  }
}

// Додаємо обробники подій
document.getElementById("loadButton").addEventListener("click", loadFromFirebase);
