import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Card = styled(OutboundLink)`
  padding: 10px;
  border-radius: 20px;
  color: inherit;
  text-decoration: none;
  display: block;
  background-color: #eaf8f7;
  background: linear-gradient(300deg, #c0e6e4 0%, #eaf8f7 100%);
  width: 48%;
  margin: 1%;
  height: 125px;

  @media (max-width: 600px) {
    width: 100%;
    margin: 5px 0;
  }
`

export default ({ name, description, url }) => (
  <Card href={url}>
    <h3>{name}</h3>
    <p>{description}</p>
  </Card>
)
