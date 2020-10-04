import React from 'react';
import { AddItemInput, ShoppingList } from '.';

export default function Home() {
  return (
    <div>
      <h1 className="mt-3">My Shop Drop</h1>
      <AddItemInput />
      <ShoppingList />
    </div>
  );
}
