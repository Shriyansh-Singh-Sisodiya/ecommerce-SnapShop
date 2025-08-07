import { useEffect } from "react"
import React from 'react'

function About() {
  useEffect(() => {
    document.title = "About | Snap-Shop"
  })
  return (
    <div className="about">
      <h2>About Us</h2>
      <p>We are a modern e-commerce site built with React 💻.</p>
    </div>
  );
}

export default About