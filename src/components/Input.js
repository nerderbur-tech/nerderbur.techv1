import React from "react"
import styled from "styled-components"

const DefaultInput = styled.input(props => ({
  display: "block",
  "margin-bottom": "10px",
  "background-color": "var(--input-background)",
  border: props.invalid && props.touched ? "1px solid red" : "none",
  "border-radius": "15px",
  fontSize: "18px",
  color: "var(--accent-color)",
  "&::placeholder": {
    color: "var(--accent-color)",
    fontWeight: 300,
    opacity: "0.5",
  },
  padding: "15px",
  "@media (min-width: 768px)": {
    width: "400px",
  },

  "-webkit-animation-name": props.invalid && props.touched ? "shake" : "none",
  "animation-name": props.invalid && props.touched ? "shake" : "none",
  "-webkit-animation-duration": "0.7s",
  "animation-duration": "0.7s",
  "-webkit-animation-fill-mode": "both",
  "animation-fill-mode": "both",
}))

const DefaultTextarea = styled.textarea(props => ({
  display: "block",
  "margin-bottom": "10px",
  "background-color": "var(--input-background)",
  border: props.invalid && props.touched ? "1px solid red" : "none",
  "border-radius": "15px",
  "font-size": "18px",
  color: "var(--accent-color)",
  padding: "15px",
  "max-width": "400px",
  "min-width": "400px",

  "-webkit-animation-name": props.invalid && props.touched ? "shake" : "none",
  "animation-name": props.invalid && props.touched ? "shake" : "none",
  "-webkit-animation-duration": "0.7s",
  "animation-duration": "0.7s",
  "-webkit-animation-fill-mode": "both",
  "animation-fill-mode": "both",

  "&:: placeholder": {
    color: "var(--accent-color)",
    opacity: "0.5",
    "font-weight": "300",
  },
}))

const ErrorMessage = styled.span`
  color: red;
  margin-left: 15px;
  text-align: start;
  display: block;
  margin-bottom: 5px;
`

const Input = props => {
  let inputElement = null

  switch (props.elementType) {
    case "input":
      inputElement = (
        <DefaultInput
          {...props.elementConfig}
          value={props.value}
          invalid={props.invalid}
          touched={props.touched}
          onChange={props.changed}
        />
      )
      break
    case "textarea":
      inputElement = (
        <DefaultTextarea
          {...props.elementConfig}
          value={props.value}
          invalid={props.invalid}
          touched={props.touched}
          onChange={props.changed}
        />
      )
      break
    case "select":
      inputElement = (
        <select
          {...props.elementConfig}
          value={props.value}
          invalid={props.invalid}
          touched={props.touched}
          onChange={props.changed}
        >
          {props.elementConfig.options.map(option => (
            <option key={option.value} value={option.value}>
              {option.displayValue}
            </option>
          ))}
        </select>
      )
      break
    default:
      inputElement = (
        <DefaultInput
          {...props.elementConfig}
          value={props.value}
          invalid={props.invalid}
          touched={props.touched}
          onChange={props.changed}
        />
      )
  }

  let errors = null

  if (props.errors) {
    errors = props.errors.map(err => (
      <ErrorMessage key={err}>{err}</ErrorMessage>
    ))
  }

  return (
    <div>
      {props.label ? <label>{props.label}</label> : null}
      {inputElement}
      {errors}
    </div>
  )
}

export default Input
