import React, { useState } from 'react';
import styled from 'styled-components';

const ZoomContainer = styled.div`
  position: relative;
  width: 100%;
  overflow: hidden;
`;

const ZoomImage = styled.div`
  width: 100%;
  height: 600px;
  background-image: url(${props => props.src});
  background-position: ${props => props.position};
  background-size: ${props => props.zoomed ? '200%' : '100%'};
  background-repeat: no-repeat;
  transition: background-size 0.3s ease;
`;

const ProductZoom = ({ imageUrl }) => {
  const [zoomed, setZoomed] = useState(false);
  const [position, setPosition] = useState('50% 50%');

  const handleMouseMove = (e) => {
    if (!zoomed) return;
    
    const { left, top, width, height } = e.target.getBoundingClientRect();
    const x = ((e.pageX - left) / width) * 100;
    const y = ((e.pageY - top) / height) * 100;
    setPosition(`${x}% ${y}%`);
  };

  return (
    <ZoomContainer>
      <ZoomImage
        src={imageUrl}
        zoomed={zoomed}
        position={position}
        onMouseEnter={() => setZoomed(true)}
        onMouseLeave={() => setZoomed(false)}
        onMouseMove={handleMouseMove}
      />
    </ZoomContainer>
  );
};

export default ProductZoom;
