import React from 'react'
import Layout from '../../components/Layout'

import * as styles from '../../style/project.module.css'
import { Link, graphql } from 'gatsby'
import Img from "gatsby-image"

export default function Projects({data})  {
  
  console.log(data)
  const projects=data.allMarkdownRemark.nodes

  return (

    
    <Layout>
    <div className={styles.portfolio}>
      <h2>Portfolio</h2>
       <h3>This is the my first portfolio....</h3>
    </div>

    <div className={styles.projects}>
      {projects.map(project=>(

        <Link to={"/projects/" + project.frontmatter.slug} key={project.id} >

          <div>

          <Img fluid={project.frontmatter.thumb.childImageSharp.fluid}/>
            <h3>{project.frontmatter.title}</h3>
            <p>{project.frontmatter.stack}</p>
          </div>
        </Link>


      ))}
    </div>
    </Layout>
  )
}


export const  query=graphql`

query projectPage
{
  allMarkdownRemark(sort: {frontmatter: {date: DESC}}) {
    nodes {
      frontmatter {
        stack
        title
        slug
        date
        thumb{
          childImageSharp{
            fluid{
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
      id
    }
  }
}
`


