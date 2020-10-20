let emailCollectorForm = document.getElementById("Email-Collector");
emailCollectorForm.addEventListener("submit", (event) => {
  // Stop the default event behavior
  event.preventDefault();

  // use FormData to get the User's name and email
  let userFormDetails = new FormData(event.target);

  let userFirstName = userFormDetails.get("firstName");
  let userEmailAddress = userFormDetails.get("emailAddress");
  console.log(userEmailAddress);

  let updatedHtmlContent = `
      <h2>Congratulations, ${userFirstName}!</h2>

      <p>You're on your way to becoming a BBQ Master!</p>

      <p class="fine-print">You will get weekly BBQ tips sent to: ${userEmailAddress}</p>
  `;

  let registeredMessage = document.querySelector(".register-container");
  registeredMessage.innerHTML = updatedHtmlContent;
});
