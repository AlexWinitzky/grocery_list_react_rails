import React from 'react';
import Grocery from './Grocery';

const GroceryList = ({ groceries, updateGrocery, deleteGrocery, editGrocery }) => (
  <div className="row">
    { groceries.map( grocery => 
        <Grocery
          key={grocery.id}
          {...grocery}
          updateGrocery={updateGrocery}
          deleteGrocery={deleteGrocery}
          editGrocery={editGrocery}
        />
      )
    }
  </div>
)

export default GroceryList;