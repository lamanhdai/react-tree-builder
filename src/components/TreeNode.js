import React from 'react';
import BaseNode from './BaseNode'
import LeafNode from './LeafNode'
import './TreeNode.css'

function renderChildNode(data, dispatch) {
  return (
    <>
      {data&&data.map(nodeElement => (
        <div className="tree-node-item" key={nodeElement.id}>
          <BaseNode name={nodeElement.name}/>
          {nodeElement.data&&renderChildNode(nodeElement.data, dispatch)}
          <div className="tree-node-item">
            <LeafNode path={nodeElement.path} dispatch={dispatch}/>
          </div>
        </div>
      ))}
    </>
  )
}

function TreeNode({node, dispatch}) {
  return (
    <div className="tree-node">
      <BaseNode name={node.name}/>
      {renderChildNode(node.data, dispatch)}
      <div className="tree-node-item">
        <LeafNode dispatch={dispatch} path={node.path}/>
      </div>
    </div>
  )
}

export default TreeNode