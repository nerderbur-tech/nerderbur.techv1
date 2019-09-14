import React from "react"
import styled from "styled-components"

const MobileNavMenu = styled.div`
  position: absolute;
  height: 100vh;
  width: 100%;
  z-index: 1000;
  background-color: #fff;
  display: flex;
`

const MobileNavCloseBtn = styled.img`
  align-self: end;
  margin-left: auto;
  padding: 2rem;
`

const MobileNav = () => {
  return (
    <MobileNavMenu>
      <MobileNavCloseBtn
        src={require("./../../images/close-btn.svg")}
        alt="close-btn"
      />
    </MobileNavMenu>
  )
}

export default MobileNav
