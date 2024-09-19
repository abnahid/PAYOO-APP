// Step-1: Add an event handler to the "Add Money" button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Step-2: Retrieve Add Money & Pin Number Input
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("input-pin-number").value;

    if (addMoneyInput === "" || pinNumberInput === "") {
      alert("Please fill in all fields.");
      return;
    }

    // Verify Pin Number (In practice, this should be more secure)
    const correctPin = "1234";
    if (pinNumberInput === correctPin) {
      const balance = document.getElementById("account-balance").innerText;

      const balanceNumber = parseFloat(balance);
      const addMoneyNumber = parseFloat(addMoneyInput);

      if (!isNaN(balanceNumber) && !isNaN(addMoneyNumber)) {
        const newBalance = balanceNumber + addMoneyNumber;

        document.getElementById("account-balance").innerText =
          newBalance.toFixed(2);

        // Clear the input fields after successful operation
        document.getElementById("input-add-money").value = "";
        document.getElementById("input-pin-number").value = "";

        alert("Money added successfully!");
      } else {
        alert("Invalid input! Please enter a valid amount.");
      }
    } else {
      alert("Failed to add money! Please check your PIN and try again.");
    }
  });

// Log out functionality
document.getElementById("log-out").addEventListener("click", function () {
  window.location.href = "/login.html";
});
