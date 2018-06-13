import React from 'react';

const styles = {
  purchased: {
    textDecoration: 'line-through',
    color: 'grey'
  },
  pointer: { cursor: 'pointer' }
}

const Grocery = ({ id, purchased, name, updateGrocery, deleteGrocery }) => (
  <div className="col s12">
    <div className="col m8">
      <div style={ purchased ? styles.purchased : {} } className="center">
        {name}
      </div>
    </div>
    <div className="col m2">
      <input
        id={`product-${id}`}
        type="checkbox"
        defaultChecked={purchased}
        onClick={() => updateGrocery(id)}
      />
      <label htmlFor={`product-${id}`}>Buy It Yet?</label>
    </div>
    <div style={ styles.pointer } className="col m1" onClick={() => deleteGrocery(id)}>
      Remove
    </div>
  </div>
)

export default Grocery;