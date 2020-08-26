import React from 'react';
import './LeafNode.css'

function LeafNode({path, dispatch}) {
  const addNewNode = () => {
    dispatch({type: 'newNode', payload: {
      selectedNodePath: path
    }})
  }
  return (
    <div className="leaf-node" onClick={addNewNode}>
      +
    </div>
  )
}

export default LeafNode