export const authDefaultState = {
  token: localStorage.getItem("token") || "",
  user: JSON.parse(localStorage.getItem("user")) || null,
};
