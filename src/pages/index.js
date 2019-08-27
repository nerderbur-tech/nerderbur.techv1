import React, { Component } from "react"
import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"
import Modal from "react-modal"
import Typed from "react-typed"

import styled from "styled-components"
import { device } from "../devices"

import { DefaultBtn, DefaultBtnOutline } from "../components/default-button"

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
  overlay: {
    backgroundColor: "rgba(0,0,0,.50)",
  },
}

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

class HomePage extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isModalOpen: false,
    }
  }

  handleModalOpen = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: true })
  }

  handleModalClose = event => {
    // console.log('handleModalOpen: ', event);
    this.setState({ isModalOpen: false })
  }

  render() {
    return (
      <DefaultLayout>
        <SEO title="Home" />
        <Container>
          <div className="intro">
            <DeveloperName className="spaced-heading site-heading">
              Leon Wright
            </DeveloperName>
            <SubHeading className="sub-heading">
              I am{" "}
              <Typed
                className="font-accent"
                strings={["a Developer.", "a UI/UX Designer.", "a Nerd."]}
                typeSpeed={150}
                backSpeed={50}
                loop
              ></Typed>
            </SubHeading>
          </div>
          <div
            style={{
              marginTop: "2rem",
            }}
          >
            <DefaultBtn
              href="https://docs.google.com/document/d/e/2PACX-1vTeiMzaQi9Pm9BSqayiySFBxJAlYCdZVF6uP_lXZTpF5ENLRogdfBxSvgRFmbaTCrdL_PB0c3ljpjwa/pub"
              rel="noopener noreferrer"
              target="_blank"
            >
              Download Resume
            </DefaultBtn>
            <DefaultBtnOutline
              style={{ marginLeft: "1rem" }}
              onClick={this.handleModalOpen}
            >
              Contact Me
            </DefaultBtnOutline>
          </div>
        </Container>
        <Modal
          isOpen={this.state.isModalOpen}
          onRequestClose={this.handleModalClose}
          contentLabel="Example Modal In Gatsby"
          style={customStyles}
        >
          <h2 ref={subtitle => (this.subtitle = subtitle)}>Hello</h2>
          <button onClick={this.handleModalClose}>close</button>
          <div>I am a modal</div>
          <form>
            <input />
            <button>tab navigation</button>
            <button>stays</button>
            <button>inside</button>
            <button>the modal</button>
          </form>
        </Modal>
      </DefaultLayout>
    )
  }
}

export default HomePage
