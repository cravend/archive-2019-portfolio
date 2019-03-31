import React from 'react'
import styled from 'styled-components'

import { Github } from 'styled-icons/fa-brands/Github'
import { LinkedinIn } from 'styled-icons/fa-brands/LinkedinIn'
import { Phone } from 'styled-icons/fa-solid/Phone'
import { Question } from 'styled-icons/fa-solid/Question'
import { Envelope } from 'styled-icons/fa-solid/Envelope'

const Card = styled.a`
  display: block;
  width: 23%;
  margin: 1%;
  padding: 10px;
  border-radius: 10px;
  color: inherit;
  text-decoration: none;
  background-color: #eaf8f7;
  background: linear-gradient(300deg, #c0e6e4 0%, #eaf8f7 100%);
  text-align: center;

  @media (max-width: 600px) {
    width: 48%;
    margin: 5px 1%;
  }
`

const Icon = ({ iconName = 'default', ...props }) => {
  const Component = {
    Email: Envelope,
    Phone: Phone,
    GitHub: Github,
    LinkedIn: LinkedinIn,
    default: Question
  }[iconName]
  return <Component {...props} />
}
Icon.defaultProps = { size: 50 }

export default ({ name, url }) => (
  <Card href={url}>
    <Icon iconName={name} />
    <p style={{ margin: 0 }}>{name}</p>
  </Card>
)
