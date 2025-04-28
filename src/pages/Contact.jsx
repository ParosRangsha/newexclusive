import React, { useState } from 'react'
import Container from '../components/Container';

const Contact = () => {

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    // Add your form submission logic here
  };
  return (
    <div className="contact">
      <Container>
        <div className="min-h-screen flex items-center justify-center bg-gray-100 p-6">
          <div className="bg-white p-8 rounded-2xl shadow-lg w-full max-w-lg">
            <h1 className="text-3xl font-bold mb-6 text-center">Contact Us</h1>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="name">Name</label>
              <input type="text" id="name" name="name" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div className="mb-4">
              <label className="block text-gray-700 mb-2" htmlFor="email">Email</label>
              <input type="email" id="email" name="email" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"/>
            </div>
            <div className="mb-6">
              <label className="block text-gray-700 mb-2" htmlFor="message">Message</label>
              <textarea id="message" name="message" rows="5" className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400"></textarea>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded-lg hover:bg-blue-600 transition-colors">Send Message</button>
          </div>
        </div>
      </Container>
    </div>
  )
}

export default Contact