// Show the Cash Out
document
  .getElementById("btn-show-cash-out") // corrected from "tn-show-cash-out" to "btn-show-cash-out"
  .addEventListener("click", function (event) {
    // show cash out button clicked
    document.getElementById("cash-out-form").classList.remove("hidden");

    // hide the add money form
    document.getElementById("add-money-form").classList.add("hidden");
  });

// Show Add Money Form and Hide the Cash Out Form
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", function () {
    document.getElementById("add-money-form").classList.remove("hidden");
    document.getElementById("cash-out-form").classList.add("hidden");
  });
