import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { isNil } from "lodash";
import Product from "./Product";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(1),
    height: '30vh',
    overflow: "scroll",
    [theme.breakpoints.up("md")]: {
      height: "50vh",
      
    },
  },
}));

const ProductList = ({ products, removeProduct }) => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {!isNil(products)
        ? products.map((i, index) => (
            <Product
              img={i.imageUrl}
              name={i.name}
              fullPrice={i.price}
              sellingPrice={i.sellingPrice}
              key={index}
              removeProduct={removeProduct}
            />
          ))
        : null}
    </div>
  );
};

export default ProductList;
