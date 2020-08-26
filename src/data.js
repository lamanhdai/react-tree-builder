export const initialData = JSON.parse(localStorage.getItem('localNode'))|| {
  node: {
    id: '0',
    name: 'root',
    path: 'root'
  },
  selectedNode: null
}