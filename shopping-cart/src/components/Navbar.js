import {Navbar, Modal, Button, Container, NavbarBrand} from 'react-bootstrap'
import NavbarCollapse from 'react-bootstrap/esm/NavbarCollapse';
import NavbarToggle from 'react-bootstrap/esm/NavbarToggle';
import { useState, useContext } from 'react';
import { CartContext } from '../CartContext';
import CartProduct from './CartProduct';


function NavbarComponent(){
    const cart = useContext(CartContext);

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    
    const checkout = async () => {
        await fetch('https://fashion-bros-api.onrender.com/checkout', {
            method: "POST",
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({items: cart.items})
        }).then((response) => {
            return response.json();
        }).then((response) => {
            if(response.url) {
                window.location.assign(response.url); // Forwarding user to Stripe
            }
        });
    }


    const productsCount = cart.items.reduce((sum, product) => sum + product.quantity, 0);

    return (
        <>
            <Navbar expand='sm' > 
                <NavbarBrand href='/'>Ornaments Store</NavbarBrand>
                <NavbarToggle/>
                <NavbarCollapse className='justify-content-end'>
                    <Button onClick={handleShow}>Cart ({productsCount} Items)</Button>
                </NavbarCollapse>
            </Navbar>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    {productsCount > 0 ?
                        <>
                            <p>Items in your cart: </p>
                            {cart.items.map((currentProduct, idx) =>(
                                <CartProduct key={idx} id={currentProduct.id} quantity={currentProduct.quantity} ></CartProduct>
        
                            ))}
                            
                            <h1>Total: {cart.getTotalCost().toFixed(2)}</h1>

                            <Button variant='success' onClick={checkout}>Purchase Items!</Button>
                        </>
                    :
                        
                    <h1>There are no items in your cart</h1>
                            }
                </Modal.Body>

            </Modal>
        </>
    )
}

export default NavbarComponent;