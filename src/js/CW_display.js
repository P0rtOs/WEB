document.addEventListener("DOMContentLoaded", function () {
    // Отримуємо дані з localStorage
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        // Фото
        const profilePhoto = document.getElementById("profile-photo");
        profilePhoto.src = resumeData.photo || "../images/cw-photo.jpg";
        profilePhoto.alt = "Фото користувача";

        // Основна інформація
        document.getElementById(
            "name"
        ).textContent = `${resumeData.firstName} ${resumeData.lastName}`;
        document.getElementById("birthdate").textContent = resumeData.birthdate;
        document.getElementById("phone").textContent = resumeData.phone;
        document.getElementById("email-link").textContent = resumeData.email;
        document.getElementById(
            "email-link"
        ).href = `mailto:${resumeData.email}`;

        // Освіта
        document.getElementById("education").textContent = resumeData.education;

        // Курси
        const coursesList = document.getElementById("courses");
        resumeData.courses.split("\n").forEach((course) => {
            const li = document.createElement("li");
            li.textContent = course.trim();
            coursesList.appendChild(li);
        });

        // Мови
        const languagesList = document.getElementById("languages");
        resumeData.languages.split("\n").forEach((language) => {
            const li = document.createElement("li");
            li.textContent = language.trim();
            languagesList.appendChild(li);
        });

        // Навички
        const skillsList = document.getElementById("skills");
        resumeData.skills.split("\n").forEach((skill) => {
            const li = document.createElement("li");
            li.textContent = skill.trim();
            skillsList.appendChild(li);
        });

        // Якості
        const qualitiesList = document.getElementById("qualities");
        resumeData.qualities.split("\n").forEach((quality) => {
            const li = document.createElement("li");
            li.textContent = quality.trim();
            qualitiesList.appendChild(li);
        });
    } else {
        alert("Дані для резюме відсутні! Поверніться назад і заповніть форму.");
        window.location.href = "./CreateCW.html"; // Повернення на форму
    }
});
