import React from "react";
import { ListGroup } from "react-bootstrap";
import { useSelector } from "react-redux";
import { InListItem, InBasketItem } from ".";

function ShoppingList() {
  const items = useSelector(state => state.items);

  return (
    <ListGroup className="m-4" variant="flush">
      {items.map((item, index) => {
        return item.inBasket ? (
          <InBasketItem item={item} index={index} />
        ) : (
          <InListItem item={item} index={index} />
        );
      })}
    </ListGroup>
  );
}

export default ShoppingList;
