import React, { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const FormContainer = styled.div`
  display: grid;
  gap: ${props => props.theme.spacing.md};
`;

const InputGroup = styled.div`
  display: flex;
  flex-direction: column;
  gap: ${props => props.theme.spacing.sm};
`;

const Input = styled.input`
  padding: ${props => props.theme.spacing.sm};
  border: 1px solid ${props => props.theme.colors.secondary};
  border-radius: 4px;
  font-size: 1rem;
`;

const PaymentForm = ({ onPaymentComplete }) => {
  const [cardData, setCardData] = useState({
    number: '',
    expiry: '',
    cvc: ''
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Handle payment processing
    onPaymentComplete(cardData);
  };

  return (
    <FormContainer>
      <form onSubmit={handleSubmit}>
        <InputGroup>
          <label>Card Number</label>
          <Input
            type="text"
            value={cardData.number}
            onChange={(e) => setCardData({...cardData, number: e.target.value})}
            placeholder="1234 5678 9012 3456"
          />
        </InputGroup>
        
        <InputGroup>
          <label>Expiry Date</label>
          <Input
            type="text"
            value={cardData.expiry}
            onChange={(e) => setCardData({...cardData, expiry: e.target.value})}
            placeholder="MM/YY"
          />
        </InputGroup>

        <InputGroup>
          <label>CVC</label>
          <Input
            type="text"
            value={cardData.cvc}
            onChange={(e) => setCardData({...cardData, cvc: e.target.value})}
            placeholder="123"
          />
        </InputGroup>
      </form>
    </FormContainer>
  );
};

export default PaymentForm;
