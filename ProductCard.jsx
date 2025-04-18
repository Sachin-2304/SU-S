import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import Button from '../common/Button';

const Card = styled(motion.div)`
  background: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: ${props => props.theme.shadows.small};
`;

const ImageContainer = styled.div`
  position: relative;
  padding-top: 125%;
  overflow: hidden;
`;

const Image = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
`;

const ProductInfo = styled.div`
  padding: ${props => props.theme.spacing.md};
`;

const ProductCard = ({ product }) => {
  return (
    <Card
      whileHover={{ y: -5 }}
      transition={{ duration: 0.2 }}
    >
      <Link to={`/product/${product.id}`}>
        <ImageContainer>
          <Image src={product.image} alt={product.name} />
        </ImageContainer>
        <ProductInfo>
          <h3>{product.name}</h3>
          <p>${product.price}</p>
          <Button variant="primary">View Details</Button>
        </ProductInfo>
      </Link>
    </Card>
  );
};

export default ProductCard;
