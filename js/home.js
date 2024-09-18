// step-1: add an event handler to the add money button inside the form
document
  .getElementById("btn-add-money")
  .addEventListener("click", function (event) {
    event.preventDefault();

    // step-2 Add Money & Pin Number InPut
    const addMoneyInput = document.getElementById("input-add-money").value;
    const pinNumberInput = document.getElementById("input-pin-number").value;
    console.log("pinNumberInput :>> ", pinNumberInput);
  });
