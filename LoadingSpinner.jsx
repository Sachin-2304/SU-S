import styled, { keyframes } from 'styled-components';

const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

const SpinnerWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: ${props => props.fullScreen ? '100vh' : '100%'};
`;

const Spinner = styled.div`
  width: 40px;
  height: 40px;
  border: 3px solid ${props => props.theme.colors.secondary};
  border-top: 3px solid ${props => props.theme.colors.accent};
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
`;

const LoadingSpinner = ({ fullScreen }) => (
  <SpinnerWrapper fullScreen={fullScreen}>
    <Spinner />
  </SpinnerWrapper>
);

export default LoadingSpinner;
