import React, {useReducer, useState} from 'react'
import TreeNode from './components/TreeNode'
import './App.css'
import {initialData} from './data'
import {XPath} from './XPath'

const reducer = function(state, action) {
  switch(action.type) {
    case 'newNode': return {...state, selectedNode: action.payload};
    case 'saveNode': const newTree = XPath({tree: state.node, data: action.payload}); return {...state, node: {...state.node, ...newTree}};
    default: return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialData)
  const [inputName, setInputName] = useState('')

  const {selectedNode} = state

  // form save event
  const saveNode = (evt) => {
    evt.preventDefault();
    if(!inputName.length) return
    setInputName('')
    dispatch({
      type: 'saveNode',
      payload: {
        name: inputName,
        selectedNode
      }
    })
  }

  // set name of input
  const getInput = (evt) => {
    setInputName(evt.target.value)
  }
  return (
    <div className='App'>
      <div className='tree'>
        <TreeNode node={state.node} dispatch={dispatch}/>
      </div>
      <form onSubmit={saveNode}>
        <div className='input-zone'>
            <label>Name</label>
            <input disabled={!selectedNode} placeholder='Node Name' onChange={getInput} required value={inputName}/>
            <button disabled={!selectedNode}>Save</button>
        </div>
      </form>
    </div>
  )
}

export default App
