// Idea By GPT-Mama
function toggleForms(showFormId) {
  const formIds = [
    "cash-out-form",
    "add-money-form",
    "transfer-money-form",
    "get-bonus-form",
    "pay-bill-form",
    "transaction-form",
  ];
  formIds.forEach((id) => {
    if (id === showFormId) {
      document.getElementById(id).classList.remove("hidden");
    } else {
      document.getElementById(id).classList.add("hidden");
    }
  });
}

document
  .getElementById("btn-show-cash-out")
  .addEventListener("click", () => toggleForms("cash-out-form"));
document
  .getElementById("btn-show-add-money")
  .addEventListener("click", () => toggleForms("add-money-form"));
document
  .getElementById("btn-show-transfer-money")
  .addEventListener("click", () => toggleForms("transfer-money-form"));
document
  .getElementById("btn-show-get-bonus")
  .addEventListener("click", () => toggleForms("get-bonus-form"));
document
  .getElementById("btn-show-pay-bill")
  .addEventListener("click", () => toggleForms("pay-bill-form"));
document
  .getElementById("btn-show-transaction")
  .addEventListener("click", () => toggleForms("transaction-form"));
