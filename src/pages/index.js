import React from "react"
import DefaultLayout from "../components/default-layout"
import SEO from "../components/seo"

const HomePage = () => {
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <div className="container">
        <div className="intro">
          <h1 className="font-primary-1 spaced-heading site-heading">
            Leon Wright
          </h1>
          <span className="sub-heading">
            I am <span className="font-accent">a Developer</span>
          </span>
        </div>
        <div className="cta">
          <button className="btn btn-default">Download Resume</button>
          <button className="btn btn-default-outline">Contact Me</button>
        </div>
      </div>
    </DefaultLayout>
  )
}

export default HomePage
