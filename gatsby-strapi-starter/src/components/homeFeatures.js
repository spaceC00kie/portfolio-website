import React from "react"
import { Container, Col, Row } from "reactstrap"
import styled from "styled-components"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"


let StyledFeature = styled.div`
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.15);
  transition-duration: 0.25s;
  &:hover {
    box-shadow: 0 5px 25px rgba(0, 0, 0, 0.2);
  }
`

let Feature = ({ title, description, img, url }) => (
  <Col md={4} className="mb-3">
    <a href={url} >
      <StyledFeature>
        <Img fluid={img} />
        <div className="p-3">
          <h5>{title}</h5>
          <p>{description}</p>
        </div>
      </StyledFeature>
    </a>
  </Col>
)

let HomeFeatures = () => {
  const data = useStaticQuery(graphql`
    fragment defaultImage on File {
      childImageSharp {
        fluid(maxWidth: 400, maxHeight: 250) {
          ...GatsbyImageSharpFluid
        }
      }
    }
    query featuresQuery {
      slide1: file(relativePath: { eq: "slide1.jpg" }) {
        ...defaultImage
      }
      slide2: file(relativePath: { eq: "slide2.jpg" }) {
        ...defaultImage
      }
      slide3: file(relativePath: { eq: "slide3.jpg" }) {
        ...defaultImage
      }
    }
  `)
  return (
    <Container className="py-5">
      <Row>
        <Feature
          title="Task Manager"
          description="This woman is surprised by my task manager. I don't know why, but she is."
          img={data.slide1.childImageSharp.fluid}
          url="https://github.com/spaceC00kie/react-to-do-list"
        />
        <Feature
          title="Soil Sensor"
          description="This guy thinks my soil sensor project is really neat."
          img={data.slide2.childImageSharp.fluid}
          url="https://github.com/spaceC00kie/keep-my-plants-alive"
        />
        <Feature
          title="TBD"
          description="This dead phone is so cool! ...What are my headphones connected to?"
          img={data.slide3.childImageSharp.fluid}
        />
      </Row>
    </Container>
  )
}

export default HomeFeatures
