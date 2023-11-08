// script.js
document.addEventListener("DOMContentLoaded", function () {
  console.log("Hello, world!");
  // const reviewForm = document.getElementById("review-form");
  // const reviewsList = document.getElementById("reviews-list");

  // reviewForm.addEventListener("submit", function(e) {
  //     e.preventDefault();

  //     const reviewerName = document.getElementById("reviewer-name").value;
  //     const reviewRating = document.getElementById("review-rating").value;
  //     const reviewText = document.getElementById("review-text").value;

  //     const reviewItem = document.createElement("li");
  //     reviewItem.innerHTML = `
  //         <strong>${reviewerName}</strong> - Rating: ${reviewRating}<br>
  //         ${reviewText}
  //     `;

  //     reviewsList.appendChild(reviewItem);
  // });

  

  const addReview = document.getElementById("add-review");

  addReview.addEventListener("click", function (e) {
    console.log("Hello, world!");
    e.preventDefault();
    console.log("Hello!");
    const reviewForm = document.getElementById("review");
    reviewForm.style.display = "block";
  });
});
