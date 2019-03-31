import React from 'react'
import { Layout, StyledOutboundLink, Highlight } from '../components/Theme'

export default () => (
  <Layout>
    <h3>Senior Year</h3>
    <p>
      Most recently, I had a summer internship interned with{' '}
      <StyledOutboundLink href="https://abre.io">Abre</StyledOutboundLink>. Abre
      is an <Highlight>online learning management system,</Highlight> created
      and published as an open-source project. My biggest project was creating
      an app built on their platform that would{' '}
      <Highlight>
        help students manage clubs that they were the leaders of.
      </Highlight>{' '}
      I also directed the second year of{' '}
      <StyledOutboundLink href="https://camp.masonhackclub.com">
        Hack Camp
      </StyledOutboundLink>
      . At Hack Camp 2018, we had two sessions: a session for students new to
      programming (where they learned the basics taught in 2017) and an advanced
      session for returning students,{' '}
      <Highlight>
        where they learned more in-depth web development concepts using
        React.js.
      </Highlight>
    </p>
    <p>
      In school, I was invited to be a part of the school’s Advanced Production
      Lab because of my time in IMI. This class is similar to IMI, but is
      reserved only for students who have{' '}
      <Highlight>
        shown dedication and talent to the work that they’ve done with IMI.
      </Highlight>{' '}
      I am currently taking AP Computer Science, working with Java to explore
      in-depth programming concepts and algorithms. Finally, I’m advising{' '}
      <StyledOutboundLink href="https://hackcincinnati.io">
        Hack Cincinnati
      </StyledOutboundLink>
      , the largest high-school hackathon in the Midwest.
    </p>
    <p>
      <StyledOutboundLink href="https://hackcincinnati.io">
        Read more about Hack Cincinnati »
      </StyledOutboundLink>
    </p>
  </Layout>
)
