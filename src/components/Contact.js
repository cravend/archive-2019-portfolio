import React from 'react'
import styled from 'styled-components'

import Contact from '../components/contact-card'
import contacts from '../contact.json'

const Flex = styled.div`
  display: flex;
  align-items: center;
  flex-wrap: wrap;
  width: 100%;
  max-width: 100vw;
  margin: 0 auto;
`

export default () => (
  <div>
    <h2>Contact Me</h2>
    <Flex>
      {contacts.map((item, index) => {
        return <Contact key={index} name={item['contact']} url={item['url']} />
      })}
    </Flex>
  </div>
)
