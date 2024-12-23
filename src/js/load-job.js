async function loadVacancies() {
    try {
        const response = await fetch("http://localhost:3000/vacancies");

        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }

        const vacancies = await response.json();

        function filterVacancies(vacancies) {
            const activeTypes = Array.from(
                document.querySelectorAll('input[name="type"]:checked')
            ).map((input) => input.value);
            const activeLocations = Array.from(
                document.querySelectorAll('input[name="location"]:checked')
            ).map((input) => input.value);

            return vacancies.filter((vacancy) => {
                const matchesType =
                    activeTypes.length === 0 ||
                    activeTypes.includes(vacancy.type);
                const matchesLocation =
                    activeLocations.length === 0 ||
                    activeLocations.includes(vacancy.location);
                return matchesType && matchesLocation;
            });
        }

        function renderVacancies(vacancies) {
            const jobListContainer = document.querySelector(".job-list");

            jobListContainer.innerHTML = "";

            vacancies.forEach((vacancy) => {
                const jobCard = document.createElement("li");
                jobCard.className = "job-card";

                jobCard.innerHTML = `
                    <div class="job-header">
                        <h3>${vacancy.title}</h3>
                        <img src="${vacancy.img}" alt="Логотип компанії">
                    </div>
                    <p>${vacancy.type} | ${vacancy.location}</p>
                    <p>Повна зайнятість. ${
                        vacancy.company
                    } — надійний роботодавець...</p>
                    <div class="card-bottom">
                        <p class="date">${new Date().toLocaleDateString(
                            "uk-UA"
                        )}</p>
                        <button>Відгукнутись</button>
                    </div>
                `;

                jobListContainer.appendChild(jobCard);
            });
        }

        renderVacancies(vacancies);

        document
            .querySelectorAll('input[name="type"], input[name="location"]')
            .forEach((input) => {
                input.addEventListener("change", () => {
                    const filteredVacancies = filterVacancies(vacancies);
                    renderVacancies(filteredVacancies);
                });
            });
    } catch (error) {
        console.error("Помилка при завантаженні вакансій:", error);
    }
}

document.addEventListener("DOMContentLoaded", loadVacancies);
