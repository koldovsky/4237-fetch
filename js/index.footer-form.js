const form = document.querySelector(".footer__form");

async function handleSubmit(event) {
  event.preventDefault();
  const status = document.querySelector(".footer__form-status");
  const data = new FormData(event.target);
  const response = await fetch(event.target.action, {
    method: form.method,
    body: data,
    headers: {
      Accept: "application/json",
    },
  });
  if (response.ok) {
    status.innerHTML = "Thanks for your submission!";
  } else {
    status.innerHTML = "Error";
  }
}
form.addEventListener("submit", handleSubmit);
