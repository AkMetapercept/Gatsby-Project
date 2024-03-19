import * as React from "react"
import Layout from '../components/Layout'
import * as styles from '../style/home.module.css'
import { Link, graphql } from "gatsby"
import Img from "gatsby-image"

export default function Home({data}) {

  console.log(data)
  return (

    <Layout>
    <section className={styles.header}> 

      <div>
      <h2>Design</h2>
      <h3>Develop</h3>
      <p> React & Node js Developer</p>
      <Link className={styles.btn} to="/projects"> My Portfolio Project</Link>
      </div>
      <Img fluid={data.file.childImageSharp.fluid} />
    </section>
    </Layout>
  )
}


export const query=graphql`

query Banner {
  file(relativePath: {eq: "banner.png"}) {
    childImageSharp {
      fluid {
       ...GatsbyImageSharpFluid
      }
    }
  }
}
`
