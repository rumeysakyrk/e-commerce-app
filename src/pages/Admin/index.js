import React from 'react'
import {
    Link
} from "react-router-dom";
import "./styles.css"

function Admin() {
    return (

        <div>
            <nav>
                <ul className='admin-menu'>
                    <li>
                        <Link to="/admin">Admin</Link>
                    </li>
                    <li>
                        <Link to="/admin/orders">Orders</Link>
                    </li>
                    <li>
                        <Link to="/admin/product">Products</Link>
                    </li>
                </ul>
            </nav>
        </div>
    )
}

export default Admin
