/* DOM Elements */
const submitBtn = document.querySelector(".rating-btn-submit");
const ratingInputs = document.getElementsByName("num-rating");
const ratingCard = document.querySelector(".card");

let rating = "";

function getSuccessHTML() {
  return `<img
        src="../images/illustration-thank-you.svg"
        alt="Thank you for the rating"
        width="162"
        height="108"
      />

      <p class="selected-rating">You selected ${rating} out of 5</p>

      <div class="success-msg-wrapper">
        <h2>Thank you!</h2>
        <p>
          We appreciate you taking the time to give a rating. If you ever need
          more support, don’t hesitate to get in touch!
        </p>
      </div>`;
}

submitBtn.addEventListener("click", () => {
  ratingInputs.forEach((input) => {
    if (input.checked) {
      rating = input.value;
    }
  });

  if (rating > 0) {
    ratingCard.innerHTML = "";
    ratingCard.classList.add("card-success");

    ratingCard.innerHTML = getSuccessHTML();
  }
});
