document.getElementById("toggleDescription").addEventListener("click",
    function () {
    const description = document.getElementById("description");
    if (description.style.display === "none") {
        description.style.display = "block";
        this.textContent = "Скрыть описание";
    } else {
        description.style.display = "none";
        this.textContent = "Показать описание";
    }
});