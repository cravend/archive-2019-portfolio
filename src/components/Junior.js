import React from 'react'
import { Layout, StyledOutboundLink, Highlight } from '../components/Theme'

export default () => (
  <Layout>
    <h3>Junior Year</h3>
    <p>
      The summer of my junior year, I{' '}
      <Highlight>directed Hack Camp 2017.</Highlight>{' '}
      <StyledOutboundLink href="https://2017.camp.masonhackclub.com">
        Hack Camp
      </StyledOutboundLink>{' '}
      is a summer camp designed to teach incoming 6th to 9th graders coding
      skills. We taught students basic{' '}
      <Highlight>HTML, CSS, and JavaScript.</Highlight> We consider Hack Camp to
      be our biggest success: <Highlight>100% of attending students</Highlight>{' '}
      said they were considering pursuing additional computer science classes or
      careers.
    </p>
    <p>
      I also had my second internship as a Web Design Intern at{' '}
      <StyledOutboundLink href="https://variousviews.com">
        Various Views Research
      </StyledOutboundLink>
      . At Various Views, I was put into a small team tasked with redoing the
      company website. We decided to{' '}
      <Highlight>migrate from DotNetNuke to WordPress.</Highlight> The majority
      of my time was spent creating custom code to let people register for the
      company’s database. In-school, I took Honors Computer Programming III,{' '}
      <Highlight>
        working with C++ and learning about object-oriented programming.
      </Highlight>{' '}
      In my third year of IMI, I began the planning process to completely
      refresh all of the school’s websites and the server that they were hosted
      on.
    </p>
    <p>
      Finally, I co-directed{' '}
      <StyledOutboundLink href="https://2017.cincyhacks.com">
        CincyHacks 2017
      </StyledOutboundLink>
      , Cincinnati’s first high-school hackathon. Students from around the
      tri-state area came to our event for a 24-hour coding marathon. My primary
      job in CincyHacks was managing our finances — the event was offered at no
      cost to our attendees, so we had to fundraise approximately{' '}
      <Highlight>$10,000 dollars worth of supplies.</Highlight> I worked closely
      with the logistics director to make sure that we were able to afford
      everything we needed. I also helped out where I was needed: I helped
      market our event, taught programming breakout sessions, and helped find
      tech sponsors. We ended up having{' '}
      <Highlight>over ninety people attend the event.</Highlight> Reaching so
      many students in my area definitely showed me what an impact the events I
      led could have.
    </p>
    <p>
      <StyledOutboundLink href="https://medium.com/@cravend/cincyhacks-a-hackathon-to-remember-f0a6232d2171">
        Read more about my experience at CincyHacks »
      </StyledOutboundLink>
    </p>
  </Layout>
)
