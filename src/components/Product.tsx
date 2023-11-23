"use client";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import React from "react";
import { useState, useEffect } from "react";

const Product = () => {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    fetch("https://fakestoreapi.com/products")
      .then((data) => data.json())
      .then((result) => setProducts(result));
  }, []);

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
          <Button variant="primary">Add To Cart</Button>
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
