document
    .getElementById("resumeForm")
    .addEventListener("submit", function (event) {
        event.preventDefault(); // Зупиняємо стандартне відправлення форми

        const fileInput = document.getElementById("photo");
        const file = fileInput.files[0];

        // Використовуємо FileReader для зчитування фото, якщо воно завантажене
        if (file) {
            const reader = new FileReader();
            reader.onload = function (e) {
                const formData = {
                    photo: e.target.result, // Закодоване у Base64 фото
                    firstName: document.getElementById("first-name").value,
                    lastName: document.getElementById("last-name").value,
                    address: document.getElementById("address").value,
                    phone: document.getElementById("phone").value,
                    email: document.getElementById("email").value,
                    birthdate: document.getElementById("birthdate").value,
                    education: document.getElementById("education").value,
                    courses: document.getElementById("courses").value,
                    languages: document.getElementById("languages").value,
                    skills: document.getElementById("skills").value,
                    qualities: document.getElementById("qualities").value,
                };

                // Зберігаємо дані у localStorage
                localStorage.setItem("resumeData", JSON.stringify(formData));

                // Перенаправляємо на сторінку з резюме
                window.location.href = "./CW.html";
            };
            reader.readAsDataURL(file);
        } else {
            alert("Будь ласка, виберіть фото.");
        }
    });
