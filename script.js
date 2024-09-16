function updateTime() {
    const timeElement = document.getElementById("time");
    const dateElement = document.getElementById("date");
    
    const now = new Date();
    const hours = String(now.getHours()).padStart(2, '0');
    const minutes = String(now.getMinutes()).padStart(2, '0');
    timeElement.textContent = `${hours}:${minutes}`;

    const options = { weekday: 'long', day: 'numeric', month: 'long' };
    dateElement.textContent = now.toLocaleDateString(undefined, options);
}

setInterval(updateTime, 1000);
updateTime();

document.getElementById("form").addEventListener("submit", function(event) {
    event.preventDefault();
    console.log("Hello");
});