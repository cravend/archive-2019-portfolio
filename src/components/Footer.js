import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const StyledOutboundLink = styled(OutboundLink)`
  position: relative;
  font-weight: 600;
  text-decoration: none;
  color: #000;

  :hover {
    color: #000;
  }

  :before {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: 0;
    left: 0;
    background-color: #a8dcd9;
    visibility: hidden;
    -webkit-transform: scaleX(0);
    transform: scaleX(0);
    -webkit-transition: all 0.3s ease-in-out 0s;
    transition: all 0.3s ease-in-out 0s;
  }

  :hover:before {
    visibility: visible;
    -webkit-transform: scaleX(1);
    transform: scaleX(1);
  }
`

const First = styled.p`
  margin-bottom: 0;
  @media (min-width: 500px) {
    float: left;
    display: block;
  }
`
const Second = styled.p`
  @media (min-width: 500px) {
    float: right;
    display: block;
    /* float: left; */
  }
`

export default () => (
  <div>
    <First>&copy; 2019 Dalton Craven</First>
    <Second>
      <StyledOutboundLink href="https://github.com/cravend/site">
        View Source on GitHub
      </StyledOutboundLink>
    </Second>
  </div>
)
