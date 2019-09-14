/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import styled from "styled-components"
import { Link } from "gatsby"
import { device } from "../devices"
import "./../animate.css"
import "./../normalize.css"
import "./../typography.css"
import "./../theme.css"

import menuBtn from "./../images/menu-btn.svg"
import profilePhto from "./../images/leonwright.png"

// Custom Components
import MobileNavigation from "./MobileNav"

const Container = styled.div`
  height: 100vh;

  @media ${device.lg} {
    height: 100vh;
    display: grid;
    grid-template-rows: auto;
    grid-template-columns: 25% auto;
  }
`

const NavbarContainer = styled.div`
  @media ${device.lg} {
    width: 100%;
    overflow: hidden;
  }
`

const SiteNav = styled.nav`
  display: flex;
  justify-content: flex-end;
  position: fixed;
  z-index: 999;
  width: 100%;

  @media ${device.lg} {
    overflow-y: scroll;
    overflow-x: hidden;
    display: inline-block;
    height: 100vh;
    background: linear-gradient(
      to bottom,
      rgba(39, 174, 96, 0.57),
      rgba(32, 186, 183, 0.57)
    );
    z-index: unset;
    position: relative;
    -ms-overflow-style: none;
    scrollbar-width: none;
    &::-webkit-scrollbar {
      display: none;
    }
  }
`

const MobileMenuBtn = styled.img`
  padding: 25px;
  cursor: pointer;

  @media ${device.lg} {
    display: none;
  }
`

const Navigation = styled.div`
  display: none;

  @media ${device.lg} {
    display: block;
    margin-bottom: 80px;
  }
`

const NavigationHeader = styled.div`
  display: flex;
  flex-direction: column;
  margin: 80px 0;
  align-items: center;
`

const ProfilePhoto = styled.img`
  border-radius: 370px;
  border: 5px solid white;
  width: 50%;
`

const ProfileName = styled.span`
  margin-top: 30px;
  color: #fff;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: 700;
`

const NavigationItems = styled.ul`
  margin: 0;
  font-family: "Roboto", sans-serif;
  font-size: 3rem;
  font-weight: 300;
  text-transform: uppercase;
  list-style: none;
  text-align: center;
  padding: 0;
  color: #fff;
  letter-spacing: 3px;
`

const NavigationItem = styled.li`
  background-image: linear-gradient(
    120deg,
    transparent,
    0%,
    transparent 50%,
    #fff 50%
  );
  padding: 1rem 0;
  background-size: 220%;
  transition: all 0.4s;

  &:hover,
  &:active {
    background-position: 100%;

    & > * {
      color: #27ae60;
    }

    transform: translateX(1rem);
  }

  &:not(:last-child) {
    margin-bottom: 20px;
  }
`

const NavigationLink = styled(Link)`
  text-decoration: none;
  color: #fff;
`

const DefaultLayout = ({ children }) => {
  return (
    <Container>
      <NavbarContainer>
        <SiteNav>
          <MobileNavigation />

          <Navigation>
            <NavigationHeader>
              <ProfilePhoto src={profilePhto} alt="" />
              <ProfileName>Leon Wright</ProfileName>
            </NavigationHeader>
            <div className="navigation__body">
              <NavigationItems>
                <NavigationItem>
                  <NavigationLink to="/">Home</NavigationLink>
                </NavigationItem>
                {/* <NavigationItem>
                  <NavigationLink to="/about">About Me</NavigationLink>
                </NavigationItem> */}
                <NavigationItem>
                  <NavigationLink
                    as="a"
                    href="https://docs.google.com/document/d/e/2PACX-1vTeiMzaQi9Pm9BSqayiySFBxJAlYCdZVF6uP_lXZTpF5ENLRogdfBxSvgRFmbaTCrdL_PB0c3ljpjwa/pub"
                    rel="noopener noreferrer"
                    target="_blank"
                  >
                    My Resume
                  </NavigationLink>
                </NavigationItem>
                {/* <NavigationItem>
                  <NavigationLink to="/portfolio">Portfolio</NavigationLink>
                </NavigationItem>
                <NavigationItem>
                  <NavigationLink to="/blog">Blog</NavigationLink>
                </NavigationItem> */}
                <NavigationItem>
                  <NavigationLink to="/contact">Contact</NavigationLink>
                </NavigationItem>
              </NavigationItems>
            </div>
          </Navigation>
        </SiteNav>
      </NavbarContainer>
      <div
        style={{
          height: "100%",
        }}
      >
        {children}
      </div>
    </Container>
  )
}

DefaultLayout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default DefaultLayout
