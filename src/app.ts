const form = document.querySelector("form")!;
const addressInput = document.getElementById("address") as HTMLInputElement;

const GOOGLE_API_KEY = "AIzaSyBDjYFBiCHJPeVLvkjVoJc_OyIljiXvhew";

function searchAddressHandler(event: Event) {
  event.preventDefault();
  const enteredAddress = addressInput.value;

  // Google API に送信
}

form.addEventListener("submit", searchAddressHandler);
