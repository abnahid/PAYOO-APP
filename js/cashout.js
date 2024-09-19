// Step-1: Add an event handler to the "Add Money" button inside the form
document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Step-2: Retrieve Add Money & Pin Number Input
    const cashOutInput = document.getElementById("input-cash-out").value;
    const cashOutPinInput = document.getElementById("input-cash-out-pin").value;

    // Verify Pin Number (In practice, this should be more secure)
    const correctPin = "1234";
    if (cashOutPinInput === correctPin) {
      const balance = document.getElementById("account-balance").innerText;

      const balanceNumber = parseFloat(balance);
      const cashOutNumber = parseFloat(cashOutInput);

      // Check if both balance and input are valid numbers
      if (!isNaN(balanceNumber) && !isNaN(cashOutNumber)) {
        const newBalance = balanceNumber - cashOutNumber;

        document.getElementById("account-balance").innerText =
          newBalance.toFixed(2);
      } else {
        alert("Invalid input! Please enter a valid amount.");
      }
    } else {
      alert("Failed to cash out. Please try again later.'");
    }
  });
