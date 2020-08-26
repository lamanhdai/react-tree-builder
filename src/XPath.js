export const XPath = ({tree, data}) => {
  const newTree = JSON.parse(JSON.stringify(tree))
  const {selectedNode: {selectedNodePath}, name} = data
  const savedNode = selectedNodePath.split('/').reduce((accu, curr) => {
    const newAcc = curr==='root'?accu:accu[curr];
    return newAcc
  }, newTree);

  if(savedNode.data) {
    const length = savedNode.data.length
    savedNode.data = [...savedNode.data, {
      id: `${savedNode.id}${length+1}`,
      name: name,
      path: `${savedNode.path}/data/${length}`
    }]
  } else {
    savedNode.data = [{
      id: `${savedNode.id}0`,
      name: name,
      path: `${savedNode.path}/data/0`
    }]
  }
  localStorage.setItem('localNode', JSON.stringify({node: newTree, selectedNode: null}))
  return newTree
}