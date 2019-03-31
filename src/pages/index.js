import React from 'react'
import Layout from '../components/layout'

import About from '../components/About'
import Projects from '../components/Projects'
import Contact from '../components/Contact'
import Footer from '../components/Footer'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <About />
        <hr />
        <Contact />
        <hr />
        <Footer />
      </Layout>
    )
  }
}

export default Index
