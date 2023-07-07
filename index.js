import { router } from "./router/index.router";

const appRoute = import.meta.env.VITE_APP_ROUTE;

document.querySelector("body").addEventListener("click", (event) => {
  if (!(event.target.tagName === "A" && event.target.classList.contains("Link"))) return;

  event.preventDefault();

  const route = event.target.getAttribute("href");
  window.history.pushState({}, "", `${appRoute}${route}`);
  router(route);
});


window.onpopstate = () => {
  const path = window.location.pathname;
  const route = path.substring(path.lastIndexOf("/"));

  router(route);
};

(() => {
  const path = window.location.pathname;
  const route = path.substring(path.lastIndexOf("/"));
  router(route);
})();