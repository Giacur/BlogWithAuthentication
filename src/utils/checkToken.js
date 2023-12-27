export function checkToken() {
  const chiave = localStorage.getItem("sb-nrzxrrqghoozxlzznjit-auth-token");
  return chiave;
}

export function getAuthToken() {
  return checkToken();
}
