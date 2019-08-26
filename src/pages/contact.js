import React, { Component } from "react"
import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"

import { device } from "./../devices"
import styled from "styled-components"
import { DefaultBtn } from "./../components/default-button"

const Container = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  text-align: center;
  width: 100%;
`

const PageHeading = styled.h1`
  text-transform: uppercase;
  font-weight: 300;
  font-size: 3rem;
  color: var(--primary-color);
`

const ContactForm = styled.form`
  display: flex;
  flex-direction: column;
`

const DefaultInput = styled.input`
  margin-bottom: 20px;
  background-color: var(--input-background);
  border: none;
  border-radius: 15px;
  padding: 15px 50px 15px 15px;
  font-size: 18px;
  color: var(--accent-color);

  @media ${device.md} {
    padding: 15px 200px 15px 15px;
  }
`

const DefaultTextarea = styled.textarea`
  margin-bottom: 20px;
  background-color: var(--input-background);
  border: none;
  border-radius: 15px;
  padding: 15px 50px 15px 15px;
  font-size: 18px;
  color: var(--accent-color);
`

const SendBtn = styled(DefaultBtn)`
  font-weight: 600;
`

const ContactFormText = styled.span`
  display: none;
  width: 350px;
  color: var(--accent-color);
  font-size: 18px;
  margin-bottom: 40px;

  @media ${device.lg} {
    display: block;
  }
`

class ContactPage extends Component {
  render() {
    return (
      <DefaultLayout>
        <SEO title="Contact" />
        <Container>
          <PageHeading>Contact Me</PageHeading>
          <ContactFormText>
            If you would like to know more about me, get some work done or just
            chat. Drop me a message below!
          </ContactFormText>
          <ContactForm>
            <DefaultInput placeholder="full name" />
            <DefaultInput placeholder="email" />
            <DefaultTextarea placeholder="your message" rows="5" />
            <SendBtn>Send</SendBtn>
          </ContactForm>
        </Container>
      </DefaultLayout>
    )
  }
}

export default ContactPage
