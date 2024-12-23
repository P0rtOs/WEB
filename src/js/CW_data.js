// Перевіряємо, на якій сторінці ми знаходимося, за допомогою унікальних елементів
document.addEventListener("DOMContentLoaded", () => {
    if (document.getElementById("resumeForm")) {
        // Ми на сторінці введення даних
        setupFormHandler();
    } else if (document.getElementById("resume-container")) {
        // Ми на сторінці перегляду резюме
        displayResumeData();
    }
});

// Логіка для сторінки введення даних
function setupFormHandler() {
    const form = document.getElementById("resumeForm");
    form.addEventListener("submit", (event) => {
        event.preventDefault(); // Забороняємо стандартне відправлення форми

        // Збір даних із форми
        const photo = document.getElementById("photo").value;
        const firstName = document.getElementById("first-name").value;
        const lastName = document.getElementById("last-name").value;
        const address = document.getElementById("address").value;
        const phone = document.getElementById("phone").value;
        const email = document.getElementById("email").value;
        const birthdate = document.getElementById("birthdate").value;
        const education = document.getElementById("education").value;
        const courses = document.getElementById("courses").value;
        const languages = document.getElementById("languages").value;
        const skills = document.getElementById("skills").value;
        const qualities = document.getElementById("qualities").value;

        // Створення об'єкта з усіма даними
        const resumeData = {
            photo,
            firstName,
            lastName,
            address,
            phone,
            email,
            birthdate,
            education,
            courses,
            languages,
            skills,
            qualities,
        };

        // Збереження даних у localStorage
        localStorage.setItem("resumeData", JSON.stringify(resumeData));

        // Перехід на сторінку перегляду резюме
        window.location.href = "../pages/CW.html";
    });
}

// Логіка для сторінки перегляду резюме
function displayResumeData() {
    const resumeData = JSON.parse(localStorage.getItem("resumeData"));

    if (resumeData) {
        // Ліва частина (зображення, ім'я, контактна інформація)
        document.getElementById("profile-photo").src =
            resumeData.photo || "../images/default-profile.png";
        document.getElementById(
            "name"
        ).textContent = `${resumeData.firstName} ${resumeData.lastName}`;
        document.getElementById("birthdate").textContent =
            resumeData.birthdate || "Не вказано";
        document.getElementById("phone").textContent =
            resumeData.phone || "Не вказано";
        const emailLink = document.getElementById("email-link");
        emailLink.textContent = resumeData.email || "Не вказано";
        emailLink.href = `mailto:${resumeData.email}`;

        // Освіта
        document.getElementById("education").textContent =
            resumeData.education || "Не вказано";

        // Курси
        const coursesList = document.getElementById("courses");
        if (resumeData.courses) {
            resumeData.courses.split(",").forEach((course) => {
                const li = document.createElement("li");
                li.textContent = course.trim();
                coursesList.appendChild(li);
            });
        } else {
            coursesList.innerHTML = "<li>Не вказано</li>";
        }

        // Мови
        const languagesList = document.getElementById("languages");
        if (resumeData.languages) {
            resumeData.languages.split(",").forEach((language) => {
                const li = document.createElement("li");
                li.textContent = language.trim();
                languagesList.appendChild(li);
            });
        } else {
            languagesList.innerHTML = "<li>Не вказано</li>";
        }

        // Навички
        const skillsList = document.getElementById("skills");
        if (resumeData.skills) {
            resumeData.skills.split(",").forEach((skill) => {
                const li = document.createElement("li");
                li.textContent = skill.trim();
                skillsList.appendChild(li);
            });
        } else {
            skillsList.innerHTML = "<li>Не вказано</li>";
        }

        // Особисті якості
        const qualitiesList = document.getElementById("qualities");
        if (resumeData.qualities) {
            resumeData.qualities.split(",").forEach((quality) => {
                const li = document.createElement("li");
                li.textContent = quality.trim();
                qualitiesList.appendChild(li);
            });
        } else {
            qualitiesList.innerHTML = "<li>Не вказано</li>";
        }
    } else {
        // Якщо даних немає, вивести повідомлення
        document.querySelector(".resume-result-container").innerHTML =
            "<p>Дані резюме не знайдено. Поверніться до форми заповнення.</p>";
    }
}
