import Home from "../pages/home/main";
import ImageTest from "../pages/imageTest/main";
import Products from "../pages/products/main";

import NotFound from "../pages/404/main";

const routes = {
  "/": Home,
  "/imageTest": ImageTest,
  "/products": Products,

  404: NotFound
};

const appRoot = document.getElementById("app");

const router = (route) => {
  const [ template, styles, js ] = routes[route] ?? routes[404];
  appRoot.innerHTML = `
    <style>
      ${styles}
    </style>
    ${template}
  `;
  js();
};

export { router };

