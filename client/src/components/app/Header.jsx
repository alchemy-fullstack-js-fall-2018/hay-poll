import React from 'react';
import styled from 'styled-components';
import LinkButton from '../lib/LinkButton.jsx';

const StyledHeader = styled.header`
  background-color: ${ ({ theme }) => theme.primary };
  color: ${ ({ theme }) => theme.secondary };

  h1 {
    font-family: BOMBARD, "Avenir Next", sans-serif;
    font-weight: bolder;
    letter-spacing: 2px;
    font-size: 36px;
  }
`;

const StyledNav = styled.nav`
  margin: 0px 0px 15px 0px;
`;

const Header = () => {

  const links = [
    { label: 'About', path: '/about' },
    { label: 'Home', path: '/home' },
  ];
  const LinkComponents = links.map(link => {
    return <LinkButton key={link.label} path={link.path} label={link.label}/>;
  });

  return (
    <StyledHeader>
      <h1>Redux Blogging</h1>
      <StyledNav>
        {LinkComponents}
      </StyledNav>
    </StyledHeader>
  );
};

export default Header;
