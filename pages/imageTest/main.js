import template from "./index.html?raw";
import "./styles.css";

import imagen2 from "../../assets/img/imagen2.webp";

const ImageTest = () => {
  document.querySelector(".imagen2 img").setAttribute("src", imagen2);
};


export default [ template, ImageTest ];