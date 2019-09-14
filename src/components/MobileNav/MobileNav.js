import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

const MobileNavMenu = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  display: ${props => (props.isOpen ? "block" : "none")};
`

const MobileNavCloseBtn = styled.img`
  padding: 2rem;
`

const NavItems = styled.div`
  text-align: center;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`

const NavItem = styled(Link)`
  text-decoration: none;
  display: block;
  font-size: 3.5rem;
  color: var(--primary-color);

  &:not(:last-child) {
    margin-bottom: 15px;
  }
`

const MobileNav = ({ state, toggle }) => {
  return (
    <MobileNavMenu isOpen={state.isOpen}>
      <div style={{ textAlign: "end" }}>
        <MobileNavCloseBtn
          src={require("./../../images/close-btn.svg")}
          alt="close-btn"
          onClick={toggle}
        />
      </div>

      <NavItems>
        <NavItem to="/">Home</NavItem>
        <NavItem
          as="a"
          href="https://docs.google.com/document/d/e/2PACX-1vTeiMzaQi9Pm9BSqayiySFBxJAlYCdZVF6uP_lXZTpF5ENLRogdfBxSvgRFmbaTCrdL_PB0c3ljpjwa/pub"
          rel="noopener noreferrer"
          target="_blank"
        >
          My Resume
        </NavItem>
        <NavItem to="/contact">Contact</NavItem>
      </NavItems>
    </MobileNavMenu>
  )
}

export default MobileNav
