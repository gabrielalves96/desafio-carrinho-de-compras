import axios from "axios";

const getProducts = axios.create({
  baseURL: "https://gabrielalves96.github.io/produtos.json",
});

export default getProducts;
