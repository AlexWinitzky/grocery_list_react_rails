import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import GroceryForm from './components/GroceryForm'
import GroceryList from './components/GroceryList'

class App extends Component {
  state = { groceries: [] }

  componentDidMount() {
    fetch('/api/products')
      .then(res => res.json())
      .then(groceries => this.setState({ groceries }))
  }

  addProduct = (name) => {
    const product = { name };
    fetch('/api/products', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body: JSON.stringify(product)
    }).then(res => res.json())
      .then(grocery => {
        const { groceries } = this.state;
        this.setState({ groceries: [...groceries, grocery] });
      })
  }

  editGrocery = (id) => {
    fetch(`/api/products/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(product => {
        const groceries = this.state.groceries.map(t => {
          if (t.id === id)
            return product
          return t;
        });

        this.setState({ groceries });
      })
  }

  updateGrocery = (id) => {
    fetch(`/api/products/${id}`, { method: 'PUT' })
      .then(res => res.json())
      .then(product => {
        const groceries = this.state.groceries.map(t => {
          if (t.id === id)
            return product
          return t;
        });

        this.setState({ groceries });
      })
  }

  deleteGrocery = (id) => {
    fetch(`api/products/${id}`, { method: 'DELETE' })
      .then(() => {
        const { groceries } = this.state
        this.setState({ groceries: groceries.filter(a => a.id !== id) })
      })
  }

  render() {
    return (
      <div className="App">
        <header>
          <img src={'groceries.png'} className="App-logo" alt="logo" />
          <h1 className="App-title">Put Your Groceries in a List, Idiot</h1>
        </header>
        <div className="container">
          <GroceryForm addProduct={this.addProduct} />
          <GroceryList
            groceries={this.state.groceries}
            updateGrocery={this.updateGrocery}
            deleteGrocery={this.deleteGrocery}
            editGrocery={this.editGrocery}
          />
        </div>
      </div>
    );
  }
}

export default App;
