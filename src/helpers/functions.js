export const addDataToLocalStorage = (user, tokens) => {
  localStorage.setItem("user", JSON.stringify(user));
  localStorage.setItem("tokens", JSON.stringify(tokens));
};
export const logout = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("tokens");
};

export const checkUserLogin = () => {
  const user = localStorage.getItem("user");
  if (!user) return false;
  return true;
};
