import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom';
import routes from './Routes/routes';
import AuthProvider from './Components/AuthProvider/AuthProvider';

ReactDOM.createRoot(document.getElementById('root')).render(

   <AuthProvider>
   <RouterProvider router={routes}></RouterProvider>
   </AuthProvider>

)
