import React from 'react'
import styled from 'styled-components'

import Project from '../components/project-card'
import projects from '../project.json'

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
    <h2 style={{ textTransform: 'uppercase' }}>My Projects</h2>
    <Flex>
      {projects.map((item, index) => {
        return (
          <Project
            key={index}
            name={item['project']}
            description={item['description']}
            url={item['url']}
          />
        )
      })}
    </Flex>
  </div>
)
