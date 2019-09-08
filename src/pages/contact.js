import React, { Component } from "react"
import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"
import { DefaultBtn } from "./../components/default-button"

import { device } from "./../devices"
import styled from "styled-components"

import Input from "./../components/Input"

import { Requester } from "./../lib"

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

const SendBtn = styled(DefaultBtn)`
  font-weight: 600;

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }
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
  constructor(props) {
    super(props)
    this.state = {
      contactForm: {
        displayName: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "name",
          },
          value: "",
          validation: {
            required: true,
            minLength: 3,
          },
          valid: false,
          errors: null,
          touched: false,
        },
        email: {
          elementType: "input",
          elementConfig: {
            type: "text",
            placeholder: "email",
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          errors: null,
          touched: false,
        },
        message: {
          elementType: "textarea",
          elementConfig: {
            placeholder: "message",
            rows: 7,
          },
          value: "",
          validation: {
            required: true,
          },
          valid: false,
          errors: null,
          touched: false,
        },
      },
      formValid: false,
    }
  }

  checkValidity = (value, rules) => {
    let isValid = true
    let errors = []

    if (rules.required) {
      let resp = value.trim() !== "" && isValid
      isValid = resp
      if (!resp) {
        errors.push("This field is required.")
      }
    }

    if (rules.minLength) {
      let resp = value.length >= rules.minLength && isValid
      isValid = resp
      if (!resp) {
        errors.push(`The minimum length is ${rules.minLength}`)
      }
    }

    if (rules.maxLength) {
      let resp = value.length <= rules.maxLength && isValid
      isValid = resp
      if (!resp) {
        errors.push(`The minimum length is ${rules.maxLength}`)
      }
    }

    return { isValid, errors }
  }

  inputChangedHandler = (event, inputId) => {
    const updatedContactForm = {
      ...this.state.contactForm,
    }
    const updatedFormElement = {
      ...updatedContactForm[inputId],
    }

    updatedFormElement.value = event.target.value
    let { isValid, errors } = this.checkValidity(
      updatedFormElement.value,
      updatedFormElement.validation
    )
    updatedFormElement.valid = isValid
    updatedFormElement.errors = errors
    updatedFormElement.touched = true
    updatedContactForm[inputId] = updatedFormElement

    let formValid = true
    for (let inputId in updatedContactForm) {
      formValid = updatedContactForm[inputId].valid && formValid
    }

    this.setState({ contactForm: updatedContactForm, formValid: formValid })
  }

  formHandler = event => {
    event.preventDefault()
    const formData = {}
    for (let formElId in this.state.contactForm) {
      formData[formElId] = this.state.contactForm[formElId].value
    }

    if (this.state.formValid) {
      console.log(formData)
      const requester = new Requester()
      requester
        .callMarketingService("POST", "leads/", {
          ...formData,
          leadType: "contact-form",
        })
        .then(() => {
          alert(
            "Message successfully sent!\nLook out for a reply from me very soon."
          )
        })
        .catch(e => {
          alert(
            "There was an error sending your message!\nPlease try again later."
          )
        })
    }
  }

  render() {
    const formElementsArray = []
    for (let key in this.state.contactForm) {
      formElementsArray.push({
        id: key,
        config: this.state.contactForm[key],
      })
    }

    let form = (
      <ContactForm onSubmit={this.formHandler}>
        {formElementsArray.map(formElement => (
          <Input
            key={formElement.id}
            elementType={formElement.config.elementType}
            elementConfig={formElement.config.elementConfig}
            value={formElement.config.value}
            invalid={!formElement.config.valid}
            errors={formElement.config.errors}
            touched={formElement.config.touched}
            changed={event => this.inputChangedHandler(event, formElement.id)}
          />
        ))}
        <SendBtn type="submit" as="button" disabled={!this.state.formValid}>
          Send
        </SendBtn>
      </ContactForm>
    )
    return (
      <DefaultLayout>
        <SEO title="Contact" />
        <Container>
          <PageHeading>Contact Me</PageHeading>
          <ContactFormText>
            If you would like to know more about me, get some work done or just
            chat. Drop me a message below!
          </ContactFormText>
          {form}
        </Container>
      </DefaultLayout>
    )
  }
}

export default ContactPage
