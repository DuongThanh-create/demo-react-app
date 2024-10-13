import React from 'react';
import { Link, Outlet } from 'react-router-dom';
const Contact = () => {
    return <>
    "Contract --- Demo"
    <Link to="/contact/login">Login</Link>
    <Outlet />
    </>
}

export default Contact