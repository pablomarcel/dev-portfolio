import React from "react"
import { Link, graphql } from 'gatsby'
import Layout from "../components/Layout"
import styles from '../styles/home.module.css'
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)

  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>Full Stack</h2>
          <h3>Python & Javascript</h3>
          <p>Software Developer based in the PNW.</p>
          <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
        </div>
        <Img fluid={data.file.childImageSharp.fluid} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: {eq: "tech-stack.png"}) {
      childImageSharp {
        fluid(quality: 1000, maxWidth: 1000) {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
