import { router } from "./router/index.router";

document.querySelector("body").addEventListener("click", (event) => {
  if (!(event.target.tagName === "A" && event.target.classList.contains("Link"))) return;

  event.preventDefault();

  const route = event.target.getAttribute("href");
  window.history.pushState({}, "", route);
  router(route);
});

window.onpopstate = () => {
  const route = window.location.pathname;
  router(route);
};

(() => {
  const route = window.location.pathname;
  router(route);
})();