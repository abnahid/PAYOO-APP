// Step-1: Add an event handler to the "Add Money" button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Step-2: Retrieve Add Money & Pin Number Input
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("input-pin-number").value;

    // Verify Pin Number (In practice, this should be more secure)
    const correctPin = "1234";
    if (pinNumberInput === correctPin) {
      // Get the current balance (as a string from innerText)
      const balance = document.getElementById("account-balance").innerText;

      // Convert balance and addMoneyInput to numbers using parseFloat()
      const balanceNumber = parseFloat(balance);
      const addMoneyNumber = parseFloat(addMoneyInput);

      // Check if both balance and input are valid numbers
      if (!isNaN(balanceNumber) && !isNaN(addMoneyNumber)) {
        // Calculate the new balance
        const newBalance = balanceNumber + addMoneyNumber;

        // Update the account balance in the DOM
        document.getElementById("account-balance").innerText =
          newBalance.toFixed(2);
      } else {
        alert("Invalid input! Please enter a valid amount.");
      }
    } else {
      alert("Failed to add money! Please check your PIN and try again.");
    }
  });
