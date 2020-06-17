import React from 'react'

function CatButton(props){
    return (
      <button onClick={props.setCategory}>
        {props.name+' '} 
        <span>{props.count}</span>
      </button>)
  }

function AllButton(props){
  return (
    <button onClick={}
  )
}
export default CatButton
  