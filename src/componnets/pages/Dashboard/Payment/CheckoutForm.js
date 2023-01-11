import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const CheckoutForm = ({ MyPayment }) => {
    const [Error, setError] = useState('')
    const [success, setSuccess] = useState('')
    const [clientSecret, setClientSecret] = useState("");
    const [Payment, setPayment] = useState({})
    const stripe = useStripe();
    const elements = useElements();
    const Navigate=useNavigate()
    useEffect((MyPayment) => {
        const price = 100;
        fetch(`https://manufacturer-website-server-production-2545.up.railway.app/create-payment-intent`, {
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
            const Payment = {
                id: paymentIntent?.id,
                Currency: paymentIntent?.currency,
                Amount: paymentIntent?.amount,
            }
            if (paymentIntent) {
                fetch(`https://manufacturer-website-server-production-2545.up.railway.app/service/success/payment/${MyPayment?._id}`, {
                    method: 'PATCH',
                    headers: {
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify(Payment)
                })
                    .then(res => res.json())
                    .then(data => {
                       if(data){
                        Navigate('/')
                       }
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
            <button className='btn btn-primary mt-5' type="submit" disabled={!stripe || !clientSecret}>
                Payment
            </button>
        </form>
    );
};

export default CheckoutForm;