import React, { useState } from 'react';
import styled from 'styled-components';
import PaymentForm from './PaymentForm';
import Button from '../common/Button';

const CheckoutContainer = styled.div`
  max-width: 800px;
  margin: 0 auto;
  padding: ${props => props.theme.spacing.xl};
`;

const CheckoutForm = styled.form`
  display: grid;
  gap: ${props => props.theme.spacing.lg};
`;

const FormSection = styled.div`
  background: white;
  padding: ${props => props.theme.spacing.lg};
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.small};
`;

const Checkout = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    shipping: {},
    billing: {},
    payment: {}
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle checkout logic
  };

  return (
    <CheckoutContainer>
      <CheckoutForm onSubmit={handleSubmit}>
        <FormSection>
          <h2>Shipping Information</h2>
          {/* Shipping form fields */}
        </FormSection>

        <FormSection>
          <h2>Payment</h2>
          <PaymentForm 
            onPaymentComplete={(paymentData) => {
              setFormData(prev => ({...prev, payment: paymentData}));
              setStep(3);
            }}
          />
        </FormSection>

        <Button type="submit" variant="primary">
          Complete Order
        </Button>
      </CheckoutForm>
    </CheckoutContainer>
  );
};

export default Checkout;
