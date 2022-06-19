const form = document.querySelector("form")!;
const addressInput = document.getElementById("address") as HTMLInputElement;

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // Google API に送信
}

form.addEventListener("submit", searchAddressHandler);
