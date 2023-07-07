import template from "./index.html?raw";
import styles from "./styles.css?raw";

import imagen2 from "../../assets/img/imagen2.webp";

const ImageTest = () => {
  document.querySelector(".imagen2 img").setAttribute("src", imagen2);
};


export default [ template, styles, ImageTest ];