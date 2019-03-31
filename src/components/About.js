import React from 'react'
import styled from 'styled-components'
import { OutboundLink } from 'gatsby-plugin-google-analytics'

const Layout = styled.div`
  margin-top: 20px;

  @media (max-width: 600px) {
    margin-top: inherit;
  }
`

const Highlight = styled.span`
  background-image: linear-gradient(
    -100deg,
    rgba(168, 220, 217, 0),
    rgba(168, 220, 217, 0.33) 20%,
    rgba(168, 220, 217, 0.66) 75%,
    rgba(168, 220, 217, 0)
  );
`

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

export default () => (
  <Layout>
    <h3>
      Hi! My name is Dalton Craven &amp; I’m in 12th grade at Mason High School.
    </h3>
    <p>
      Freshman year, I decided to take an introduction to programming class. The
      class sparked my passion &mdash; I immediately got involved in coding. I
      joined{' '}
      <StyledOutboundLink
        href="https://masonhackclub.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Mason Hack Club
      </StyledOutboundLink>{' '}
      (not knowing much about website development), then became the{' '}
      <Highlight>webmaster and finance director</Highlight>.
    </p>
    <p>
      Along with that, I have become increasingly involved with the Integrated
      Media/Advanced Production Lab at my school, which centers around a
      freeform media production “agency.” Freshman year, I took on the role of{' '}
      <Highlight>managing the school website’s content.</Highlight> I then began
      to do more maintenance, until I eventually ended up managing all aspects
      of the high school websites, including{' '}
      <StyledOutboundLink
        href="https://masoncomets.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        masoncomets.org
      </StyledOutboundLink>
      ,{' '}
      <StyledOutboundLink
        href="https://gomasoncomets.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        gomasoncomets.com
      </StyledOutboundLink>
      ,{' '}
      <StyledOutboundLink
        href="https://masondrama.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        masondrama.com
      </StyledOutboundLink>
      , and various other sites. We have an estimated reach of 1,000,000 views
      per year.{' '}
      <Highlight>
        I recently transferred all of our website data over to a completely new
        server
      </Highlight>{' '}
      &mdash; with no downtime. I’m additionally leading a team that to create a
      brand-new, modern website that will be the face of Mason High School for
      years to come.
    </p>
    <p>
      I’ve also tried to get some real-world experience. This past summer, I
      also held an internship with{' '}
      <StyledOutboundLink
        href="https://abre.io"
        target="_blank"
        rel="noopener noreferrer"
      >
        Abre.io, Inc.
      </StyledOutboundLink>{' '}
      Abre is an online educational platform: it provides a way for schools to
      manage classes, grades, and more, all in one dashboard. As an intern,{' '}
      <Highlight>I developed an Abre app</Highlight> that would let students and
      advisors manage clubs through Abre. The summer before, I interned with{' '}
      <StyledOutboundLink
        href="https://variousviews.com"
        target="_blank"
        rel="noopener noreferrer"
      >
        Various Views Research.
      </StyledOutboundLink>{' '}
      I worked with a team to <Highlight>update and modernize</Highlight> their
      website. I also interned with the{' '}
      <StyledOutboundLink
        href="https://www.imaginemason.org"
        target="_blank"
        rel="noopener noreferrer"
      >
        City of Mason's
      </StyledOutboundLink>{' '}
      IT department, working on their governmental intranet site.
    </p>
    <p>
      Additionally, I love to read. I volunteer at the Public Library of
      Cincinnati and Hamilton County weekly (
      <Highlight>with over 250 hours logged!</Highlight>), assisting patrons
      with their various questions about library technology, finding books, or
      just general knowledge. I’ve worked at Kings Island since 2016 as a food
      and beverage associate. Finally, I love maintaining my 
      <StyledOutboundLink
        href="https://photos.app.goo.gl/eL3Xi6jXbr40xKJ62"
        target="_blank"
        rel="noopener noreferrer"
      >
        1963 Mercury Comet.
      </StyledOutboundLink>
    </p>
  </Layout>
)
