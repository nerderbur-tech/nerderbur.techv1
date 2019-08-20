import React from "react"
import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"

import styled from "styled-components"
import { device } from "../devices"

import { DefaultBtn, DefaultBtnOutline } from "../components/default-button"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;

  margin-bottom: 1.5rem;
  animation-name: moveInLeft;
  animation-duration: 1s;
  animation-timing-function: ease-out;
`

const DeveloperName = styled.h1`
  color: var(--primary-color-1);
`

const SubHeading = styled.span`
  display: block;
  font-size: 2.2rem;
  animation-name: moveInRight;
  animation-duration: 1s;
  animation-timing-function: ease-out;

  @media ${device.md} {
    font-size: 3.6rem;
  }
`

const HomePage = () => {
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <Container>
        <div className="intro">
          <DeveloperName className="spaced-heading site-heading">
            Leon Wright
          </DeveloperName>
          <SubHeading className="sub-heading">
            I am <span className="font-accent">a Developer</span>
          </SubHeading>
        </div>
        <div
          style={{
            marginTop: "2rem",
          }}
        >
          <DefaultBtn>Download Resume</DefaultBtn>
          <DefaultBtnOutline style={{ marginLeft: "1rem" }}>
            Contact Me
          </DefaultBtnOutline>
        </div>
      </Container>
    </DefaultLayout>
  )
}

export default HomePage
