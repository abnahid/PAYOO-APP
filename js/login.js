// document.getELementById('id').addEventListener('click', fun)

// search: form submit reloading the page

// step - 1 set event handler
document
  .getElementById("button-login")
  .addEventListener("click", function (event) {
    //step - 2 Reloading The Browser
    event.preventDefault();
    console.log("Login Button click ");

    // step - 3 get The Phone Number & Pin Number
    const phoneNumber = document.getElementById("phone-number").value;
    const pinNumber = document.getElementById("pin-number").value;

    // bad Way To Find valid Data
    if (phoneNumber === "235689" && pinNumber === "1234") {
      // window.location.href = "/home.html";

      const spinner = document.getElementById("loading-spinner");
      spinner.classList.remove("hidden");
      document.getElementById("logo").classList.add("hidden");
      document.getElementById("hero").classList.add("hidden");

      // Navigate to the new page after a short delay
      setTimeout(function () {
        window.location.href = "/home.html";
      }, 1000);
    } else {
      console.log("Something wrong");
    }
  });
