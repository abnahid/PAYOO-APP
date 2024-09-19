const validCoupon = "PICCHI10";

document.getElementById("getBonusBtn").addEventListener("click", function () {
  const couponCode = document.getElementById("couponCode").value.trim(); // Get the coupon input

  // Basic condition to check the coupon code
  if (couponCode === "") {
    alert("Please enter a coupon code.");
  } else if (couponCode === validCoupon) {
    alert("Coupon applied successfully! You got the bonus.");
  } else {
    alert("Invalid coupon code. Please try again.");
  }
});
