import React from 'react'

function CatButton(props){
    return (
      <button onClick={props.setCategory}>
        {props.name+' '} 
        <span>{props.count}</span>
      </button>)
  }


export default CatButton

  