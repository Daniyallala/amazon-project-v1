import React from 'react'
import './Payment.css'
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import { useState } from 'react';
import { getCardTotal } from './reducer';
import CurrencyFormat from 'react-currency-format';
import { useEffect } from 'react';
import axios from 'axios';
import { useHistory } from 'react-router';


function Payment() {
    const [{ cart, user }, dispatch] = useStateValue();
    const history=useHistory();
    const stripe = useStripe();
    const elements = useElements();
    const [error, setError] = useState(null);
    const [disabled, setDisabled] = useState(true);
    const [processing, setProcessing] = useState("");
    const [succeeded, setSucceeded] = useState(false);
    const [clientSecret, SetClientSecret] = useState(true);

    useEffect(() => {
        // generates the special stripe secret which will allows us to charge a customer
        const getClientSecret = async () => {
            const response = await axios({
                method: 'post',
                // stripe expect total amount in base currencies like Rupees to paise
                url: `/payments/create?total=${getCardTotal(cart) * 100}`
            });
            SetClientSecret(response.data.clientSecret)
        }

        getClientSecret();
    }, [cart])

    const handleSubmit = async (event) => {
        event.preventDefault();
        setProcessing(true);

        const payload = await stripe.confirmCardPayment(clientSecret, {
            payment_method: {
                card: elements.getElement(CardElement)
            }
        }).then(({ paymentIntent }) => {
            setSucceeded(true);
            setError(null);
            setProcessing(false);

            history.replace('/orders')
        })
    };
    const handleChange = event => {
        setDisabled(event.empty);
        setError(event.error ? event.error.message : "");
    };

    return (
        <div className='payment'>
            <div className='payment--container'>
                {/*Delivery Address*/}
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Delivery Address:</h3>
                    </div>
                    <div className='payment--address'>
                        <p>{user?.email}</p>
                        <p>Flat No. 301, Hiranandani</p>
                        <p>Andheri, India</p>
                    </div>
                </div>
                {/*Cart Review*/}
                <div className='payment--section'>
                    <div className='payment--title'>
                        <h3>Review Item In Cart:</h3>
                    </div>
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
                    <div className='payment--title'>
                        <h3>Payment Method:</h3>
                    </div>
                    <div className='payment--details'>
                        {/*Stripe Secret Code*/}
                        <form onSubmit={handleSubmit}>
                            <CardElement onChange={handleChange} />
                            <div className="payment--priceContainer">
                                <CurrencyFormat
                                    renderText={(value) => (
                                        <>
                                            <p> Subtotal ({cart.length} items):<strong>{value}</strong> </p>

                                        </>
                                    )}
                                    decimalScale={2}
                                    value={getCardTotal(cart)}
                                    displayType={"text"}
                                    thousandSeparator={true}
                                    prefix={"₹"}
                                />
                                <button disabled={processing || disabled || succeeded}>
                                    <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                                </button>
                            </div>
                            {/*Errors*/}
                            {error && <div>{error}</div>}
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Payment