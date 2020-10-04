import React from "react";
import { ListGroup } from "react-bootstrap";
import { useDispatch } from "react-redux";
import { actionCreators } from "../store/actions";

function InBasketItem({ item, index }) {
  const dispatch = useDispatch();

  const removeItemFromList = index => {
    dispatch(actionCreators.removeItem(index));
  };

  return (
    <ListGroup.Item
      key={index}
      variant="dark"
      onClick={() => removeItemFromList(index)}
    >
      {item.value}
    </ListGroup.Item>
  );
}

export default InBasketItem;
