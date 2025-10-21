function generatePassword() {
  const length = Number(document.getElementById("length").value);
  const passwordField = document.getElementById("password");
  const copyBtn = document.getElementById("copyBtn");
  const copyMsg = document.getElementById("copyMsg");

  copyMsg.style.display = "none"; // Hide copy message each time you generate

  if (!length || length < 1) {
    alert("Please enter a valid password length!");
    return;
  }

  const chars = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+[]{}|;:,.<>?";
  let password = "";

  for (let i = 0; i < length; i++) {
    const randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }

  passwordField.textContent = password;
  copyBtn.style.display = "inline-block"; // Show the copy button
}

function copyPassword() {
  const password = document.getElementById("password").textContent;
  const copyMsg = document.getElementById("copyMsg");

  if (!password) return;

  navigator.clipboard.writeText(password)
    .then(() => {
      copyMsg.style.display = "block";
      setTimeout(() => {
        copyMsg.style.display = "none";
      }, 2000);
    })
    .catch(() => {
      alert("Failed to copy password!");
    });
}
