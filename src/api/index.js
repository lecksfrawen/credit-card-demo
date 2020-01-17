const API_URL = "https://www.mocky.io/v2/5e1be37f31000067004f3420"

export const saveCreditCardInfo = data => {
  return fetch(API_URL, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then(response => response.json())
    .catch(error => {
      console.error("Error:", error)
    })
}
