import React from "react"

import { device } from "./../../devices"

import menuBtn from "./../../images/menu-btn.svg"
import styled from "styled-components"

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTimes } from "@fortawesome/free-solid-svg-icons"

const MobileMenuBtn = styled.img`
  padding: 25px;
  cursor: pointer;

  @media ${device.lg} {
    display: none;
  }
`

const MobileNavContainer = styled.div`
  background-color: #fff;
  position: absolute;
  z-index: 10000;
  height: 100vh;
  width: 100%;
  display: flex;
  flex-direction: column;
`

const CloseBtn = styled(FontAwesomeIcon)`
  color: var(--primary-color);
  font-size: 5rem;
  padding: 1.5rem;
  align-self: flex-end;
`

const NavItems = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
`

const NavItem = styled.span`
  font-size: 3.5rem;
  color: var(--primary-color);
`

export default () => {
  return (
    <>
      <MobileMenuBtn src={menuBtn} alt="menu-btn" />

      <MobileNavContainer>
        <CloseBtn icon={faTimes} />

        <NavItems>
          <NavItem>Home</NavItem>
          <NavItem>My Resume</NavItem>
          <NavItem>Contact</NavItem>
        </NavItems>
      </MobileNavContainer>
    </>
  )
}
