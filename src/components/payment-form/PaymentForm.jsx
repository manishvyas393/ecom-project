import React,{useState} from 'react'
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js'
import { PaymentButton, PaymentFormContainer, FormContainer } from "./payment.form.styles"
import Button from '../button/button'
import { BUTTON_TYPE_CLASSES } from '../button/button'
import { useSelector } from 'react-redux'
import { selectCurrentUser } from '../../store/user/user.selector'
import { selectCartTotal } from '../../store/cart/cart.selectors'
const PaymentForm = () => {
      const stripe = useStripe()
      const elements = useElements()
      const amount = useSelector(selectCartTotal);
      const currentUser = useSelector(selectCurrentUser);
      const [isProcessingPayment, setIsProcessingPayment] = useState(false);
      const paymentHandler = async (e) => {
            e.preventDefault()
            if (!stripe || !elements) {
                  return
            }
            const response = await fetch("/.netlify/functions/create-payment-intent", {
                  method: "post",
                  headers: {
                        "Content-type": "application/json"
                  },
                  body: JSON.stringify({
                        amount: amount,
                        description: 'Crown-cloth',
                  })
            }).then(res => res.json())
            const clientSecret = response.paymentIntent.client_secret;
            const paymentResult = await stripe.confirmCardPayment(clientSecret, {
                  payment_method: {
                        card: elements.getElement(CardElement),
                        billing_details: {
                              name: currentUser ? currentUser.displayName : 'Yihua Zhang',
                              address:"india"
                        },
                  },
            });

            setIsProcessingPayment(false);

            if (paymentResult.error) {
                  alert(paymentResult.error.message);
            } else {
                  if (paymentResult.paymentIntent.status === 'succeeded') {
                        alert('Payment Successful!');
                  }
            }
      }
      return (
            <PaymentFormContainer>
                  <FormContainer onSubmit={paymentHandler}>
                        <h2>Credit Card Payment:</h2>
                        <CardElement />
                        <PaymentButton
                              buttonType={BUTTON_TYPE_CLASSES.inverted}
                              isLoading={isProcessingPayment}
                        >
                              Pay Now
                        </PaymentButton>
                  </FormContainer>
            </PaymentFormContainer>
      )
}

export default PaymentForm