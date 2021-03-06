import React from "react"

import { Container, Row, Col } from "reactstrap"
import Link from "../components/link"
import Button from "../components/btn"
import Layout from "../components/layout"
import SEO from "../components/seo"
import { FaGithub, FaBolt, FaHome, FaWrench } from "react-icons/fa"
import Form from "../components/form"
import Slider from "../components/slider"
import Box from "../components/box"
import Hr from "../components/hr"
import styled from "styled-components"
import HomeFeatures from "../components/homeFeatures"

let StyledBackground = styled.div`
  background: linear-gradient(to bottom, #f9fbfd 0, #fff 100%);
`

let Service = ({ title, Icon = FaHome }) => (
  <Col xs={12} md={4} className="mb-3">
    <Link to="/">
      <Box>
        <Icon size={30} />
        <h4 className="mt-3">{title}</h4>
      </Box>
    </Link>
  </Col>
)

let Index = () => (
  <Layout>
    <SEO title="Home" />
    <Slider />
    <Container className="pt-4">
      <div className="text-center">
        <h4>A slightly opinionated programmer.</h4>
        <p className="text-muted">I'll help you get it done</p>
      </div>
    </Container>
    <Container className="py-5">
      <h2 className="text-center mb-4">My Projects</h2>
      <HomeFeatures />
    </Container>
  </Layout>
)

export default Index
