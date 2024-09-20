document
  .getElementById("btn-cash-out")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // Step-2: Retrieve Cash Out & Pin Number Input
    const cashOutInput = document.getElementById("input-cash-out").value;
    const cashOutPinInput = document.getElementById("input-cash-out-pin").value;

    // Verify Pin Number (In practice, this should be more secure)
    const correctPin = "1234";
    if (cashOutPinInput === correctPin) {
      const balance = document.getElementById("account-balance").innerText;

      const balanceNumber = parseFloat(balance);
      const cashOutNumber = parseFloat(cashOutInput);

      if (cashOutNumber > balanceNumber) {
        alert("You do not have sufficient balance");
      }

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
