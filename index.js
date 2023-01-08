const numbers = document.querySelectorAll(".numbers")
const cardContainer = document.querySelector(".card-container")
const rates = document.querySelectorAll(".num-btn")
const after = document.querySelector(".after")
const ctaBtn = document.getElementById("cta-btn")
const rating = document.getElementById("rating")


rates.forEach((rate) => {
    rate.addEventListener("click", () => {
        rating.textContent = rate.innerHTML
    })
})

ctaBtn.addEventListener('click', function() {
     cardContainer.style.display = "none";
     after.classList.add('submit')
})