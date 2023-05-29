import ItemList from './ItemList';
import ItemDetails from './ItemDetails';
const routes = [
    { path: '/', element:<ItemList /> },
    { path: 'products', element:<ItemList /> },
    { path: 'products/:id', state: true, element: <ItemDetails /> },

]


export default routes;
