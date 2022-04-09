document.addEventListener(
  "DOMContentLoaded",
  () => {
    console.log("Bookclub JS imported successfully!");
  },
  false
);

const switchForm = (e) => {
    e.preventDefault();
    const signup = document.getElementById('signup');
    const login = document.getElementById('login');
    signup.hidden = !signup.hidden;
    login.hidden = !login.hidden;
}