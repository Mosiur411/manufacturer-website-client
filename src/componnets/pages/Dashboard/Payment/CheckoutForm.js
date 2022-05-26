import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';

const CheckoutForm = ({ MyPayment }) => {
    const [Error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [Payment, setPayment] = useState({})
    const stripe = useStripe();
    const elements = useElements();
    useEffect(() => {
        const price = MyPayment?.OrderPrice;
        if (!price) {
            return
        }
        fetch(`http://localhost:5000/create-payment-intent`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ price })
        })
            .then(res => res.json())
            .then(data => {
                if (data?.clientSecret) {
                    setClientSecret(data?.clientSecret)

                }
            })
    }, [MyPayment?.OrderPrice])
    const handleSubmit = async (event) => {
        // Block native form submission.
        event.preventDefault();

        if (!stripe || !elements) {
            return;
        }
        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });
        setError(error?.message || ' ');


        const { paymentIntent, error: IntentError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: MyPayment?.OrderPrice,
                        email: MyPayment?.email,
                    },
                },
            },
        );
        if (IntentError) {
            setError(IntentError?.message);
            setSuccess('')

        } else {
            setSuccess("Your payment success fully")
            setError('')
            const Payment={
                id:paymentIntent?.id,
                Currency:paymentIntent?.currency,
                Amount:paymentIntent?.amount,
            }
            if (paymentIntent) {
                fetch(`http://localhost:5000/service/success/payment/${MyPayment?._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Payment)
                })
                    .then(res => res.json())
                    .then(data => {
                       console.log(data)
                    })
            }

        }

    }
    return (
        <form onSubmit={handleSubmit}>
            <CardElement
                options={{
                    style: {
                        base: {
                            fontSize: '16px',
                            color: '#424770',
                            '::placeholder': {
                                color: '#aab7c4',
                            },
                        },
                        invalid: {
                            color: '#9e2146',
                        },
                    },
                }}
            />
            {
                Error && <p className='text-red-700'>{Error}</p>
            }
            {
                success && <p className='text-green-700'>{success}</p>
            }
            {
                Payment && <p>{Payment.id}</p>
            }
            <button className='btn' type="submit" disabled={!stripe || !clientSecret}>
                Pay
            </button>
        </form>
    );
};

export default CheckoutForm;