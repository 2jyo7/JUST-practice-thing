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
  console.log(products);
  return (
    <>
      <h1 className="font-bold text-3xl flex justify-center">
        Product Dashboard
      </h1>
      <div className="rows">
        {products.map((p: any) => {
          <div className="col-md-3" key={p.id}>
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={p.image} />
              <Card.Body>
                <Card.Title>{p.title}</Card.Title>
                <Card.Text>{p.description}</Card.Text>
                <Button variant="primary">Go somewhere</Button>
              </Card.Body>
            </Card>
          </div>;
        })}
      </div>
    </>
  );
};

export default Product;
