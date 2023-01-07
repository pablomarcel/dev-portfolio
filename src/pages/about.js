import React from 'react'
import Layout from '../components/Layout'

// gatsby

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About page</h1>
        <p>I began my journey in software development in 2021 when I enrolled in a Python Certificate Program. I was immediately drawn to Python for its simplicity, versatility, and user-friendliness. Learning Python has been a wonderful experience full of surprises and has opened the door for more great opportunities.</p>
        <p>Although the Python stack is excellent, the web relies on Javascript. So, I enrolled in a Full Stack Certificate Program to learn more about this language. Coming from Python, Javascript was an acquired taste, but I really found my stride when I discovered React. This technology allowed me to build full-fledged web apps quickly and efficiently. I also learned about Node.js, which tied everything together. Along the way, I also discovered Unity and C#, and the unity games in my portfolio are just fun side projects.</p>
        <p>I have included projects of all sizes in my portfolio because I wanted to have a single source of truth for the apps I have worked on and to avoid the hassle of searching through my file system for specific folders. I also plan to continue adding to this list as new ideas come to me.</p>
      </div>
    </Layout>
  );
}

export default About
