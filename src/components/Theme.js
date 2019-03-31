import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

export const Layout = styled.div`
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: inherit;
  }
`

export const Highlight = styled.span`
  background-image: linear-gradient(
    -100deg,
    rgba(168, 220, 217, 0),
    rgba(168, 220, 217, 0.33) 10%,
    rgba(168, 220, 217, 0.66) 85%,
    rgba(168, 220, 217, 0)
  );
`

export const StyledOutboundLink = styled(OutboundLink).attrs(() => ({
  target: '_blank'
}))`
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
