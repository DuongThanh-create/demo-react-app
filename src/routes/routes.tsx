import {Navigate, Route, createBrowserRouter, createRoutesFromElements} from 'react-router-dom'
import HomeLayout from '../layout/HomeLayout';
import Dashboard from '../layout/Dashboard';
import AuthLayout from '../layout/AuthLayout';
import Login from '../layout/Login';
import Contact from '../layout/Contract';
import RootLayout from '../layout/RootLayout';



// Configure nested routes with JSX
const router = createBrowserRouter(
    createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route path='home' element={<HomeLayout />}></Route>
      <Route path="contact" element={<Contact />} >
        <Route path="login" element={<Login />} />
      </Route>
      <Route path="dashboard" element={<Dashboard />} />
    </Route>
    )
  );
  export default router






  
  