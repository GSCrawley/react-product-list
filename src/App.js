import React, { Component } from 'react';
import './App.css';
import data, {categories, categoriesUnique, categoriesArray, categoriesCount} from './data'
import CatButton from './CatButton.js'
import AllButton from './AllButton.js'
import Products from './products.js'


console.log(categories)
console.log(categoriesUnique)
console.log(categoriesCount)
console.log('Array: ', categoriesArray)

class App extends Component {
  constructor(props){
    super(props)
    this.state={currentCategory:"All"}
  }
  render() {
    const dataFiltered = data.filter((item) => {
      //is current category equal to all, or is the category equal to the current category?
      //is this.state.currentCategory equal to "all", or is item.category equal to this.state.currentCategory?
      return item.category === this.state.currentCategory || this.state.currentCategory === "All"
    
    })

    return (
      <div className="App">
        <h1>{}</h1>
        <ul className="CategoryList">
          {categoriesUnique.map((cat) => {
            return (
              <li key={cat}> 
                <CatButton 
                  name={cat} 
                  count={categoriesCount[cat]} 
                  setCategory={() => {
                    console.log(cat)
                    this.setState({currentCategory: cat})
                  }}
                  />
                
              </li>)
             
          })}
          <CatButton
            name={"All"}
            count={data.length}
            setCategory={() => {
              console.log("All")
              this.setState({currentCategory: "All"})
            }}
            
            /> 
        </ul> 
      
        <div className="ProductsList"> 
         {
          <Products list={dataFiltered} />
         }
        </div>
         
      </div>
    );
  }
}
export default App
