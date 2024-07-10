import React, { FC, useState } from 'react';
import './Header.scss';
import {
  MDBNavbar,
  MDBNavbarNav,
  MDBNavbarItem,
  MDBNavbarLink,
  MDBNavbarToggler,
  MDBContainer,
  MDBIcon,
  MDBCollapse,
  MDBBtn
} from 'mdb-react-ui-kit';

interface HeaderProps {}

const Header: FC<HeaderProps> = () => {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showRegisterModal, setShowRegisterModal] = useState(false);
  const [showBasic, setShowBasic] = useState(false);

  return (
    <>
      <header>
        <MDBNavbar expand='lg' light bgColor='white' fixed='top'>
          <MDBContainer fluid>
            <MDBNavbarToggler
              aria-controls='navbarExample01'
              aria-expanded='false'
              aria-label='Toggle navigation'
              onClick={() => setShowBasic(!showBasic)}
            >
              <MDBIcon fas icon='bars' />
            </MDBNavbarToggler>

            <MDBCollapse navbar open={showBasic}>
              <MDBNavbarNav right className='mb-2 mb-lg-0' dir="rtl">
                <MDBNavbarItem active>
                  <MDBNavbarLink aria-current='page' href='/'>
                    בית
                  </MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/about'>אודות</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/PhotographySubjectList'>כל התמונות</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/TaskList'>עבודות</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Contact'>צור קשר</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/PostList'>כל המשתמשים</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/LogIn'>התחברות</MDBNavbarLink>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBNavbarLink href='/Register'>הרשמה</MDBNavbarLink>
                </MDBNavbarItem>
              </MDBNavbarNav>
            </MDBCollapse>
          </MDBContainer>
        </MDBNavbar>

        <div className='p-5 text-center bg-light'>
          <h1 className='mb-3'>מיכל גולומבק</h1>
          <h4 className='mb-3'>צילומי משפחה-חלאקה-ילדים-סמאשקייק-גיל שנה-ניו בורן-בר מצווה-בת מצווה-ועוד</h4>
        </div>
      </header>

      
    </>
  );
}

export default Header;

/*
             <MDBNavbarItem>
                  <MDBBtn onClick={() => setShowLoginModal(true)}>כניסה</MDBBtn>
                </MDBNavbarItem>
                <MDBNavbarItem>
                  <MDBBtn onClick={() => setShowRegisterModal(true)}>הרשמה</MDBBtn>
                </MDBNavbarItem>
                */
