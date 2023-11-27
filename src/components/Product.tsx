"use client";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { add } from "@/store/cartSlice";
import { getProducts } from "@/store/productSlice";
import { Alert } from "react-bootstrap";

const Product = () => {
  const dispatch = useDispatch<any>();
  const { data: products, status } = useSelector<any>((state) => state.product);
  useEffect(() => {
    //fetch("https://fakestoreapi.com/products")
    //.then((data) => data.json())
    // .then((result) => setProducts(result));
    dispatch(getProducts());
  }, []);

  if (status === "loading") {
    return <p>Loading...</p>;
  }
  if (status === "error") {
    return (
      <Alert key="danger" variant="danger">
        Something went wrong! Try again later
      </Alert>
    );
  }

  const addToCart = (product: any) => {
    dispatch(add(product));
  };

  const cards = products.map((product: any) => (
    <div className="col-md-3 mb-3 mx-auto px-6 py-3" key={product.id}>
      <Card className=" h-100">
        <div className=" text-center">
          <Card.Img
            variant="top"
            src={product.image}
            style={{ width: "100px", height: "130px" }}
          />
        </div>
        <Card.Body>
          <Card.Title>{product.title}</Card.Title>
          <Card.Text>Rs-{product.price}</Card.Text>
        </Card.Body>
        <Card.Footer>
          <Button variant="primary" onClick={() => addToCart(product)}>
            Add To Cart
          </Button>
        </Card.Footer>
      </Card>
    </div>
  ));
  return (
    <div>
      <div className="row">{cards}</div>
    </div>
  );
};

export default Product;
