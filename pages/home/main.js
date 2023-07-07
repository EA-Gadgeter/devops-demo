import $ from "jquery";
import DataTable from "datatables.net-dt";
import axios from "axios";

import endPoints from "../../services/endpoints";

import template from "./index.html?raw";
import styles from "./styles.css?raw";

const Home = async () => {
  const { data: productsData } = await axios.get(endPoints.products.getProducts(50, 0));

  console.log(data);
  var variable;

  new DataTable("#products", {
    data: productsData,
    columns: [
      { data: "id", title: "Id Producto", width: "10%" },
      { data: "title", title: "Producto" },
      { data: "category", title: "Categoria", render: (__, ___, row) => {
        const { name } = row.category;
        return name;
      } },
      { data: "price", title: "Precio", width: "10%", render: (__, ___, row) => {
        return `$${row.price}`;
      } },
      { data: "description", title: "Descripcion" },
      { data: "updatedAt", title: "Last Update", render: (__, ___, row) => {
        const date = new Date(row.updatedAt);
        return `${date.getUTCDate()}/${date.getUTCMonth() + 1}/${date.getUTCFullYear()}`;
      } }
    ],
    initComplete: (__, ___) => {
      $("h1 span").text(productsData.length);
    }
  });
};

export default [ template, styles, Home ];
