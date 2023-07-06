import $ from "jquery";
import template from "./index.html?raw";
import styles from "./styles.css?raw";

import "evo-calendar";

const Products = () => {
  $("#calendar").evoCalendar();
};

export default [ template, styles, Products ];