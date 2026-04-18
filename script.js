// subtask 4.1
const clickBtn = document.getElementById("clickBtn");
const textInput = document.getElementById("textInput");
const dropdown = document.getElementById("dropdown");
const form = document.getElementById("myForm");
const nameInput = document.getElementById("name");
const hoverBox = document.getElementById("hoverBox");
const output = document.getElementById("output");

// subtask 4.2
clickBtn.addEventListener("click", function () {
    output.textContent = "Spin Drive ignited. Velocity increasing!"; 
});

// subtask 4.3
textInput.addEventListener("input", function () {
    output.textContent = "Analyzing data: " + textInput.value;
});
dropdown.addEventListener("change", function () {
    output.textContent = "Researching subject: " + dropdown.value;
});

// subtask 4.4
form.addEventListener("submit", function(event) {
    event.preventDefault();
    output.textContent = "Transmission sent to Earth. Signal verified by: " + nameInput.value;
});

// subtask 4.5
textInput.addEventListener("keyup", function (event) {
    output.textContent = "System input detected: " + event.key;
});

// subtask 4.6
hoverBox.addEventListener("mouseover", function () {
    hoverBox.style.backgroundColor = "#ffb6c1";
    output.textContent = "EVA suit sensors active. Oxygen levels: 100%";
});
hoverBox.addEventListener("mouseout", function () {
    hoverBox.style.backgroundColor = "rgba(236, 158, 220, 0.781)";
    output.textContent = "Standby mode. Awaiting further commands.";
});

// subtask 4.7
textInput.addEventListener("focus", function () {
    textInput.style.backgroundColor = "#e0f7fa";
});
textInput.addEventListener("blur", function () {
    textInput.style.backgroundColor = "white";
});