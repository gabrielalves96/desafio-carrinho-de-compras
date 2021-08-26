import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, Typography } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "row",
    padding: theme.spacing(1),
  },
  img: {
    width: '3em',
    border: "0.1em solid gray",
    padding: theme.spacing(0, 5),
    [theme.breakpoints.up("md")]: {
      width: "15%",
      padding: theme.spacing(0, 3),
    },
  },
  info: {
    padding: theme.spacing(2),
  },
  name: {
    fontWeight: "700",
  },
  fullPrice: {
    color: "gray",
    opacity: "0.8",
  },
  sellingPrice: {
    fontWeight: "600",
  },
  btn: {
    marginTop: "0.5em",
    background: "red",
    color: "white",
    fontSize: "0.8em",
  },
}));

const Product = ({ img, name, fullPrice, sellingPrice, removeProduct }) => {
  const classes = useStyles();

  const formatCost = (cost) =>
    cost ? (cost / 100).toFixed(2).replace(".", ",") : 0;

  const callRemoveProduct = () => {
    removeProduct(name);
  };

  return (
    <div className={classes.root}>
      <img className={classes.img} src={img} alt="produto" />
      <div className={classes.info}>
        <Typography className={classes.name}>{name}</Typography>
        <Typography className={classes.fullPrice}>
          {`R$ `}
          {formatCost(fullPrice)}
        </Typography>
        <Typography className={classes.sellingPrice}>
          {`R$ `}
          {formatCost(sellingPrice)}
        </Typography>
        <Button className={classes.btn} onClick={callRemoveProduct}>
          Remover produto
        </Button>
      </div>
    </div>
  );
};

export default Product;
