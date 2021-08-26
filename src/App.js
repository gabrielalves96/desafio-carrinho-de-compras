import React, { useEffect, useState } from "react";
import Cart from "./components/Cart";
import { makeStyles } from "@material-ui/core/styles";
import { ThemeProvider } from "@material-ui/styles";
import { ToastContainer } from "react-toastify";
import 'react-toastify/dist/ReactToastify.css';
import theme from "./theme/theme";
import getProducts from "./utils/getProducts";

const useStyles = makeStyles((theme) => ({
  root: {
    background: "#282c34",
    minHeight: "100vh",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
}));

const App = () => {
  const classes = useStyles();
  const [products, setProducts] = useState([]);

  useEffect(() => {
    async function fetchProducts() {
      getProducts.get().then((res) => {
        setProducts(res.data.items);
      });
    }
    fetchProducts();
  }, []);

  const removeProduct = (prod) => {
    const productName = prod;
    function removeSelected(prods) {
      return prods.name !== productName;
    }
    setProducts(products.filter(removeSelected));
  };

  return (
    <>
      <ThemeProvider theme={theme}>
        <div className={classes.root}>
          <Cart products={products} removeProduct={removeProduct} />
        </div>
      </ThemeProvider>
      <ToastContainer />
    </>
  );
};

export default App;
