import styled from 'styled-components';
import { motion } from 'framer-motion';

const Button = styled(motion.button)`
  padding: ${props => props.theme.spacing.sm} ${props => props.theme.spacing.md};
  background: ${props => props.variant === 'primary' ? props.theme.colors.accent : 'transparent'};
  color: ${props => props.variant === 'primary' ? '#fff' : props.theme.colors.accent};
  border: 2px solid ${props => props.theme.colors.accent};
  border-radius: 4px;
  font-size: 1rem;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: ${props => props.theme.shadows.small};
  }
  
  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

export default Button;
