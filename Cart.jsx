import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { useCart } from '../../hooks/useCart';
import Button from '../common/Button';

const CartContainer = styled.div`
  padding: ${props => props.theme.spacing.lg};
  background: white;
  border-radius: 8px;
  box-shadow: ${props => props.theme.shadows.medium};
`;

const CartItem = styled(motion.div)`
  display: grid;
  grid-template-columns: 100px 1fr auto;
  gap: ${props => props.theme.spacing.md};
  padding: ${props => props.theme.spacing.md};
  border-bottom: 1px solid ${props => props.theme.colors.secondary};
`;

const CartTotal = styled.div`
  margin-top: ${props => props.theme.spacing.lg};
  text-align: right;
  font-size: 1.2rem;
  font-weight: bold;
`;

const Cart = () => {
  const { cart, removeFromCart, updateQuantity } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  return (
    <CartContainer>
      {cart.map(item => (
        <CartItem
          key={item.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <img src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <p>${item.price}</p>
            <input
              type="number"
              min="1"
              value={item.quantity}
              onChange={(e) => updateQuantity(item.id, parseInt(e.target.value))}
            />
          </div>
          <Button onClick={() => removeFromCart(item.id)}>Remove</Button>
        </CartItem>
      ))}
      <CartTotal>Total: ${total.toFixed(2)}</CartTotal>
    </CartContainer>
  );
};

export default Cart;
