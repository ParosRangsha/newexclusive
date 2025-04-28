import React from 'react'
import Container from '../components/Container'

const About = () => {
  return (
    <div className="about">
      <Container>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-3xl">
            <h1 className="text-3xl font-bold mb-4 text-center">About Us</h1>
            <p className="text-gray-700 mb-6 text-center">
              Welcome to our website! We are passionate about building beautiful and functional
              web applications that solve real-world problems.
            </p>

            <div className="space-y-4">
              <div>
                <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
                <p className="text-gray-600">
                  Our mission is to deliver high-quality digital solutions that empower businesses and
                  individuals to achieve their goals. We believe in innovation, creativity, and
                  user-centered design.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Our Vision</h2>
                <p className="text-gray-600">
                  We aim to become a leading provider of innovative digital experiences by continually
                  adapting to the evolving tech landscape and maintaining our commitment to excellence.
                </p>
              </div>

              <div>
                <h2 className="text-xl font-semibold mb-2">Our Team</h2>
                <p className="text-gray-600">
                  Our team is made up of passionate developers, designers, and thinkers who collaborate
                  to create exceptional products. We value teamwork, integrity, and the drive to
                  constantly learn and grow.
                </p>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default About