import React from 'react'
import Layout from '../components/layout'

import About from '../components/About'
import Freshman from '../components/Freshman'
import Sophomore from '../components/Sophomore'
import Junior from '../components/Junior'
import Senior from '../components/Senior'
import Finish from '../components/Finish'
import Footer from '../components/Footer'

class Index extends React.Component {
  render() {
    return (
      <Layout>
        <About />
        <hr />
        <Freshman />
        <hr />
        <Sophomore />
        <hr />
        <Junior />
        <hr />
        <Senior />
        <hr />
        <Finish />
        <hr />
        <Footer />
      </Layout>
    )
  }
}

export default Index
