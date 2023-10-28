import React from 'react'
import styles from "./styles.module.css";
import { Link } from "react-router-dom";
import { Button } from '@chakra-ui/react'
import { useAuth } from '../../contexts/AuthContext';
import { useCart } from '../../contexts/CartContext';

function Navbar() {
    const { loggedIn, user } = useAuth();
    const { items } = useCart();

    console.log(loggedIn);

    return (
        <nav className={styles.nav}>
            <div className={styles.left}>
                <div className={styles.logo}>
                    <img src='https://images.unsplash.com/photo-1685062428503-e295f50850f6?auto=format&fit=crop&q=80&w=2958&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' alt="Logo" />
                    <Link to="/">e-Commerce </Link>
                </div>

                <ul className={styles.menu}>
                    <li>
                        <Link to="/">Products</Link>
                    </li>
                </ul>
            </div>
            <div className={styles.right}>
                {!loggedIn && (
                    <>
                        <Link to="/signin">
                            <Button colorScheme='purple'>Login</Button>
                        </Link>
                        <Link to="/signup">
                            <Button colorScheme='purple'>Register</Button>
                        </Link>
                    </>
                )}

                {user && user.role === 'admin' && (
                    <Link to="/admin">
                        <Button colorScheme='purple' variant={"ghost"} >Admin</Button>
                    </Link>
                )

                }


                {loggedIn && (
                    <>
                        {
                            items.length > 0 && (
                                <Link to="/cart">
                                    <Button colorScheme='purple' variant={"outline"}>
                                        Cart ({items.length})
                                    </Button>
                                </Link>
                            )
                        }

                        <Link to="/profile">
                            <Button colorScheme='purple'>Profile</Button>
                        </Link>
                    </>
                )
                }
            </div>
        </nav>
    );
}

export default Navbar
