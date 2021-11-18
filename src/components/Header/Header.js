import React from 'react';
import styled from 'styled-components/macro';
import { Menu, Search, User } from 'react-feather';

import { QUERIES } from '../../constants';

import MaxWidthWrapper from '../MaxWidthWrapper';
import Logo from '../Logo';
import Button from '../Button';

const Header = () => {
  return (
    <>
      <MobileHeader>
        <SuperHeader>
          <Row>
            <ActionGroup>
              <button>
                <Search size={24} />
              </button>
              <button>
                <Menu size={24} />
              </button>
            </ActionGroup>
            <ActionGroup>
              <button>
                <User size={24} />
              </button>
            </ActionGroup>
          </Row>
        </SuperHeader>
        <MainHeader>
          <Logo />
        </MainHeader>
      </MobileHeader>
      <DesktopHeader>
        <Row>
          <ActionGroup>
            <button>
              <Search size={24} />
            </button>
            <button>
              <Menu size={24} />
            </button>
          </ActionGroup>
          <MainHeader>
            <Logo />
          </MainHeader>
          <Column>
            <Button>
              Subscribe
            </Button>
            <Link href="somewhere">
              Already a subscriber?
            </Link>
          </Column>
        </Row>
      </DesktopHeader>
    </>
  );
};

const MobileHeader = styled.header`
  @media ${QUERIES.laptopAndUp} {
    display: none;
  }
`;

const DesktopHeader = styled.header`
  display: none;
  
  @media ${QUERIES.laptopAndUp} {
    display: revert;
  }
`

const SuperHeader = styled.div`
  padding: 16px 0;
  background: var(--color-gray-900);
  color: white;
`;

const Row = styled(MaxWidthWrapper)`
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  
  @media ${QUERIES.laptopAndUp} {
    justify-content: revert;
  }
`;

const Column = styled.div`
  display: flex;
  gap: 8px;
  flex-direction: column;
  align-items: center;
`

const ActionGroup = styled.div`
  display: flex;
  gap: 24px;

  /*
    FIX: Remove the inline spacing that comes with
    react-feather icons.
  */
  svg {
    display: block;
  }
`;

const MainHeader = styled(MaxWidthWrapper)`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 32px;
  margin-bottom: 48px;
  
  @media ${QUERIES.tabletAndUp} {
    margin-top: 48px;
    margin-bottom: 72px;
  }
  
  @media ${QUERIES.laptopAndUp} {
    margin-right: auto;
    margin-left: auto;
  }
`;

const Link = styled.a`
  text-decoration: underline;
  font-style: italic;
  color: var(--color-gray-900);
`;

export default Header;
