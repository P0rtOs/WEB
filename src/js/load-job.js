// Функція для отримання вакансій та відображення на сторінці
async function loadVacancies() {
    try {
        // Виконуємо запит до API
        const response = await fetch('http://localhost:3000/vacancies');
        
        // Перевіряємо чи успішний запит
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        // Перетворюємо дані у формат JSON
        const vacancies = await response.json();

        // Отримуємо контейнер для списку вакансій
        const jobListContainer = document.querySelector('.job-list');

        // Очищуємо контейнер перед додаванням нових даних
        jobListContainer.innerHTML = '';

        // Генеруємо HTML для кожної вакансії
        vacancies.forEach(vacancy => {
            const jobCard = document.createElement('li');
            jobCard.className = 'job-card';

            jobCard.innerHTML = `
                <div class="job-header">
                    <h3>${vacancy.title}</h3>
                    <img src="${vacancy.img}" alt="Логотип компанії">
                </div>
                <p>${vacancy.type} | ${vacancy.location}</p>
                <p>Повна зайнятість. ${vacancy.company} — надійний роботодавець...</p>
                <div class="card-bottom">
                    <p class="date">${new Date().toLocaleDateString('uk-UA')}</p>
                    <button>Відгукнутись</button>
                </div>
            `;

            // Додаємо вакансію до списку
            jobListContainer.appendChild(jobCard);
        });
    } catch (error) {
        console.error('Помилка при завантаженні вакансій:', error);
    }
}

// Викликаємо функцію після завантаження сторінки
document.addEventListener('DOMContentLoaded', loadVacancies);
