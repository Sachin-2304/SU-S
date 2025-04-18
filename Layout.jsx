import React from 'react';
import styled from 'styled-components';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from '../common/ScrollToTop';

const Main = styled.main`
  min-height: 100vh;
  padding-top: 80px;
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  flex: 1;
  width: 100%;
  max-width: ${props => props.theme.breakpoints.wide};
  margin: 0 auto;
  padding: ${props => props.theme.spacing.lg};
`;

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      <Main>
        <Content>{children}</Content>
      </Main>
      <Footer />
      <ScrollToTop />
    </>
  );
};

export default Layout;
