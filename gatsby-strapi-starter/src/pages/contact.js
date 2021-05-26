import React from "react"
import { Row, Col, Container } from "reactstrap"
import Link from "../components/link"
import Layout from "../components/layout"
import { FaPhone, FaEnvelope } from "react-icons/fa"
import Styled from "styled-components"
import PageTitle from "../components/page-title"
import { graphql } from "gatsby"

let Cirle = Styled.div`
  height: 4rem;
  width: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
`

let ContactItem = ({ text, type, Icon, href }) => (
  <Col
    xs={6}
    lg={3}
    className="d-flex flex-column align-items-center"
    style={{ wordBreak: "break-word" }}
  >
    <Cirle className="h-4-rem w-4-rem bg-primary-faded my-3 absolute-center rounded-circle">
      <Icon size={30} />
    </Cirle>
    <div className="text-center">
      <h6>{type}</h6>
      <span className="text-secondary">
        {href ? (
          <Link to={href} className="reset">
            {text}
          </Link>
        ) : (
          text
        )}
      </span>
    </div>
  </Col>
)

let Contact = ({ data }) => {
  let { email, phone } = data.site.siteMetadata
  return (
    <Layout>
      <PageTitle title="Contact Me" />
      <Container>
        <Row className="py-5">
          <ContactItem
            text={email}
            href={`mailto:${email}`}
            type="Email"
            Icon={FaEnvelope}
          />
          <ContactItem
            text={phone}
            href={`tel:${phone}`}
            type="Phone"
            Icon={FaPhone}
          />
        </Row>
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query Contact {
    site {
      siteMetadata {
        email
        phone
      }
    }
  }
`

export default Contact
