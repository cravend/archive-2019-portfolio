import React from 'react'
import { Layout, StyledOutboundLink, Highlight } from '../components/Theme'

export default () => (
  <Layout>
    <h3>Sophomore Year</h3>
    <p>
      My sophomore year, I continued to explore the various aspects of computer
      science. I took another semester of IMI, beginning to work on server
      management for the websites we managed. I took{' '}
      <Highlight>Honors Computer Programming II,</Highlight> learning Visual
      Basic .NET. I also had my first internship, working for{' '}
      <Highlight>
        the{' '}
        <StyledOutboundLink href="https://www.imaginemason.org">
          City of Mason's
        </StyledOutboundLink>{' '}
        IT department
      </Highlight>
      . This internship lasted for approximately 60 hours, from November 2016 to
      February 2017. During my internship, I{' '}
      <Highlight>worked on their governmental intranet site.</Highlight> I also
      helped complete IT helpdesk tickets & did some basic networking.
    </p>
    <p>
      Finally, I joined{' '}
      <StyledOutboundLink href="https://masonhackclub.com">
        Mason Hack Club
      </StyledOutboundLink>{' '}
      as <Highlight>the finance director and webmaster.</Highlight> Mason Hack
      Club is a programming club dedicated to increasing computer science
      education in students.
    </p>
    <p>
      <StyledOutboundLink href="https://medium.com/@cravend/mason-hack-club-81145fca23b1">
        Read more about my experience in Mason Hack Club »
      </StyledOutboundLink>
    </p>
  </Layout>
)
