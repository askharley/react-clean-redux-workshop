import React from 'react';
import { useDispatch } from 'react-redux';
import { ListGroup } from 'react-bootstrap';
import { actionCreators } from '../store/actions';

function InListItem({ item, index }) {
  const dispatch = useDispatch();

  const addItemToBasket = (index) => {
    dispatch(actionCreators.addToBasket(index));
  };

  return (
    <ListGroup.Item
      key={index}
      variant="danger"
      onClick={() => addItemToBasket(index)}
    >
      {item.value}
    </ListGroup.Item>
  );
}

export default InListItem;