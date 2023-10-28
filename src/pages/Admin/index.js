import React from 'react'
import {
    Link, Navigate, Outlet
} from "react-router-dom";
import "./styles.css"
import { useAuth } from '../../contexts/AuthContext';

function Admin() {
    const { user } = useAuth();
    return (<>
        {user?.role !== "admin" && <Navigate to="/" replace />}< div >
            <nav>
                <ul className='admin-menu'>
                    <li>
                        <Link to="/admin/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin/product">Products</Link>
                    </li>
                </ul>
            </nav>
            <Outlet />
        </div ></>

    )
}

export default Admin
