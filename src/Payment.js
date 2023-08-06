import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';

function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    return (
        <div className='payment'>
            <div className='payment--container'>
                {/*Delivery Address*/}
                <h3>Delivery Address:</h3>
                <div className='payment--address'>
                    <p>{user?.email}</p>
                    <p>Flat No. 301, Hiranandani</p>
                    <p>Andheri, India</p>
                </div>
                <div className='payment--section'>

                </div>
                {/*Cart Review*/}
                <div className='payment--section'>
                    <h3>Review Item In Cart:</h3>
                    <div className='payment--item'>
                        {cart.map(item => (
                            <CheckoutProduct
                                id={item.id}
                                title={item.title}
                                image={item.image}
                                price={item.price}
                            />
                        ))}
                    </div>
                </div>
                {/*Payment Gateway*/}
                <div className='payment--section'>
                    <h3>Payment Method:</h3>
                    <div className='payment--details'>
                            {/*Stripe Secret Code*/}
                    </div>
                </div>

            </div>

        </div>
    )
}

export default Payment