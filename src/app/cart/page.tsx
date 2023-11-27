"use client";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { remove } from "@/store/cartSlice";

const Cart = () => {
  const dispatch = useDispatch();
  const products: any = useSelector<any>((state) => state.cart);

  const removeItem = (id: any) => {
    dispatch(remove(id));
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
          <Button variant="danger" onClick={() => removeItem(product.id)}>
            Remove Item
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

export default Cart;
