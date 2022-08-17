import React from 'react'
import Layout from '../components/Layout'

// gatsby

const About = () => {
  return (
    <Layout>
      <div>
        <h1>About page</h1>
        <p>My Journey through software development started back in 2021 when I enrolled in a Python Certificate Program. Python enchanted me because of its simplicity, versatility and user friendliness. Learning Python has been a delightful experience full of surprises and opened the door for more good stuff.</p>
        <p>Even though the Python stack is fabulous, the web runs on Javascript. So, I enrolled in a Full Stack Certificate Program. Coming from Python, Javascript became an acquired taste. The real magic happened when I came across React as it allowed me to build full blown web apps in a short period of time. Then came Node.js which tied everything together. Somewhere along the line came Unity and C#. The unity games I've included in this portfolio are just side projects to have a little fun.</p>
        <p>I have included projects of any size in this portfolio because I wanted to have a single source of truth for the apps I've worked on and avoid the pain of digging in the file system looking for folders. Also, I plan to keep populating the list as more ideas pop up.</p>
      </div>
    </Layout>
  );
}

export default About
