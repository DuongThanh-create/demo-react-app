import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Link, Outlet, Route, Router, RouterProvider, Routes } from 'react-router-dom';
import router from './routes/routes';

// Các component cho các trang
// const Home = () => <h2>Home Page</h2>;
// const Team = () => <h3>Our Team</h3>;
// const Company = () => <h3>About the Company</h3>;
// const Contact = () => <h2>Contact Page</h2>;

// const About = () => (
//   <div>
//     <h2>About Page</h2>
//     <nav>
//       <ul>
//         <li><Link to="team">Team</Link></li>
//         <li><Link to="company">Company</Link></li>
//       </ul>
//     </nav>
//     <Outlet /> {/* Nơi các route con sẽ được render */}
//   </div>
// );

const App = () => {
  return (
  //  <h1>Hello World</h1>
  <RouterProvider router={router}></RouterProvider>
  );
};

export default App;



