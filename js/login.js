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
    if (phoneNumber === "5" && pinNumber === "1234") {
      window.location.href = "/home.html";
    } else {
      console.log("Something wrong");
    }
  });
