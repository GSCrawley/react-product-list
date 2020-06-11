import React, { Component } from 'react';
import './App.css';
import data, {categories, categoriesUnique, categoriesArray, categoriesCount} from './data'

console.log(categories)
console.log(categoriesUnique)
console.log(categoriesCount)
console.log('Array: ', categoriesArray)

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>{}</h1>
        <ul>
          {categoriesUnique.map((cat) => {
            return (<li key={cat}>{cat} {categoriesCount[cat]}</li>)
          })}
        
        </ul>

      </div>
    );
  }
}

export default App;
