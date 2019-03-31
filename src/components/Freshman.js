import React from 'react'
import { Layout, StyledOutboundLink, Highlight } from '../components/Theme'

export default () => (
  <Layout>
    <h3>Freshman Year</h3>
    <p>
      My freshman year, I entered high school clueless about my future. However,
      I immediately enrolled in the Integrated Media Internship (IMI) program at
      my school. IMI is a four-year class{' '}
      <Highlight>focused on web- and video-based content production.</Highlight>{' '}
      During my freshman year IMI class, I began working on the school’s
      websites (
      <StyledOutboundLink href="https://masoncomets.org">
        masoncomets.org
      </StyledOutboundLink>{' '}
      and{' '}
      <StyledOutboundLink href="gomasoncomets.com">
        gomasoncomets.com
      </StyledOutboundLink>
      ).
    </p>
    <p>
      I also enrolled in <Highlight>Computer Programming I,</Highlight> learning
      Visual Basic 6 and basic programming concepts. Finally, I started a
      position as a <Highlight>Branch Computer Assistant</Highlight> at the{' '}
      <StyledOutboundLink href="https://cincinnatilibrary.org">
        Public Library of Cincinnati and Hamilton County
      </StyledOutboundLink>
      . This volunteer position is one that I have held for four years, with
      approximately 280 hours.
    </p>
    <p>
      <StyledOutboundLink href="https://masoncomets.org">
        Read more about masoncomets.org »
      </StyledOutboundLink>
    </p>
  </Layout>
)
