const h2 = document.createElement("h2");
h2.textContent = "Subscribe to receive 10% discount on your first order!";
document.querySelector("h1").appendChild(h2);

h2.style.fontSize = "20px";

const button = document.querySelector('input[type="submit"]');
button.addEventListener('click', function() {
    alert('Your email has been sent successfully.');
});