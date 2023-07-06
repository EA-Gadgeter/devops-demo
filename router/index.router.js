import Home from "../pages/home/main";
import ImageTest from "../pages/imageTest/main";
import Products from "../pages/products/main";

const routes = {
  "/": Home,
  "/imageTest": ImageTest,
  "/products": Products
};

const appRoot = document.getElementById("app");

const router = (route) => {
  const [ template, styles, js ] = routes[route];
  appRoot.innerHTML = `
    <style>
      ${styles}
    </style>
    ${template}
  `;
  js();
};

export { router };

