import React, { useState, useEffect } from "react";
import ProductList from "./ProductList";
import { makeStyles } from "@material-ui/core/styles";
import { Paper, Typography, Button } from "@material-ui/core";
import { toast } from "react-toastify";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "90%",
    background: "#ffffff",
    borderRadius: "1em",
    [theme.breakpoints.up("md")]: {
      width: "40%",
    },
  },
  paper: {
    borderRadius: "2em",
  },
  titleBar: {
    padding: theme.spacing(2),
    textAlign: "center",
    borderBottom: "0.1em solid gray",
  },
  title: {
    fontSize: "2em",
    fontWeight: "bold",
  },
  priceContainer: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
    borderBottom: "0.1em solid gray",
    borderTop: "0.1em solid gray",
    padding: theme.spacing(3),
  },
  priceText: {
    fontWeight: "bold",
    fontSize: "1.5em",
  },
  btnContainer: {
    padding: theme.spacing(2, 0),
  },
  btn: {
    width: "90%",
    color: "white",
    borderRadius: "1em",
    background: "#3b74f2",
    display: "block",
    margin: "auto",
    padding: theme.spacing(2, 0),
    fontSize: "1.5em",
    fontWeight: "bold",
    textTransform: "none",
    "&:hover": {
      background: "#3b74f2",
      opacity: "0.95",
    },
  },
  freeFreight: {
    padding: theme.spacing(2, 1),
    [theme.breakpoints.up("md")]: {
      padding: theme.spacing(2, 8),
    },
  },
  freeFreightText: {
    textAlign: "center",
    background: "#c7ffa6",
    color: "#217a00",
    borderRadius: "2em",
    padding: theme.spacing(2, 0),

    fontWeight: "600",
    [theme.breakpoints.up("md")]: {
      fontSize: "1.5em",
    },
  },
}));

const Cart = ({ products, removeProduct }) => {
  const classes = useStyles();
  const [total, setTotal] = useState(0);

  useEffect(() => {
    let total = 0;
    for (let index = 0; index < products.length; index++) {
      total = total + products[index].sellingPrice;
    }
    setTotal(total);
  }, [products]);

  const formatCost = (cost) =>
    cost ? (cost / 100).toFixed(2).replace(".", ",") : 0;

  const purchase = () => {
    toast.success("Compra finalizada!");
  };

  return (
    <div className={classes.root}>
      <Paper elevation={2} className={classes.paper}>
        <div className={classes.titleBar}>
          <Typography className={classes.title}>Meu carrinho</Typography>
        </div>
        <ProductList products={products} removeProduct={removeProduct} />
        <div className={classes.priceContainer}>
          <Typography className={classes.priceText}>Total</Typography>
          <Typography className={classes.priceText}>
            {`R$ `}
            {formatCost(total)}
          </Typography>
        </div>
        {total > 1000 ? (
          <div className={classes.freeFreight}>
            <Typography className={classes.freeFreightText}>
              Parabéns, sua compra tem frete grátis!
            </Typography>
          </div>
        ) : null}
        <div className={classes.btnContainer}>
          <Button className={classes.btn} onClick={purchase}>
            Finalizar Compra
          </Button>
        </div>
      </Paper>
    </div>
  );
};

export default Cart;
