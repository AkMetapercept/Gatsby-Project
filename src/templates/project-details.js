import React from "react"
import Img from "gatsby-image"
import Layout from "../components/Layout"
import  * as styles from "../style/project-details.module.css"
import { graphql } from "gatsby"

export default function ProjectDetails  ({data})  {

    const {html}=data.markdownRemark
    const {title,stack,feature}=data.markdownRemark.frontmatter
    return (
        <Layout>
          <div className={styles.details}>
            <h2>{title}</h2>
            <h3>{stack}</h3>
            <div className={styles.featured}>
              <Img fluid={feature.childImageSharp.fluid} />
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{__html:html}} />
          </div>
        </Layout>
      )
  }


  export const query=graphql`
  
  query projectDetails($slug:String){
    markdownRemark(frontmatter:{slug:{eq:$slug}})
    {
      html
      frontmatter{
        stack
        title
        feature{
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
  `