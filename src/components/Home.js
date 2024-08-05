import React from 'react';
import { FaBookOpen, FaMountain, FaRunning } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';


const Home = () => {
  const linkStyle = {
    color: '#0066cc',
    fontWeight: 'bold',
    textDecoration: 'none',
    borderBottom: '1px dotted #0066cc'
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-100 text-gray-800">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <img
            src="/sachin1.JPG"
            alt="Sachin Dharashivkar"
            className="w-64 h-64 rounded-full shadow-2xl mb-8 md:mb-0 md:mr-12 border-4 border-white animate-fade-in object-cover"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up text-gray-900">Sachin Dharashivkar</h1>
            <p className="text-xl md:text-2xl mb-6 animate-slide-up animation-delay-200 text-gray-700">
              Reinforcement Learning Engineer | AI Security Founder
            </p>
          </div>
        </div>
        <div className="mt-12 bg-white bg-opacity-60 backdrop-blur-md rounded-lg p-8 animate-fade-in animation-delay-600 shadow-lg">
          <h2 className="text-3xl font-bold mb-4 text-gray-800">About Me</h2>
          <div className="text-lg text-gray-700 space-y-4">
            <p>
              Hi, I'm Sachin - A Reinforcement Learning engineer building AI security company called <a href="https://trojanvectors.com" target="_blank" rel="noopener noreferrer" style={linkStyle}>TrojanVectors</a>. We are working on solving the problem of Indirect Prompt Injections, a critical issue for LLM application security.
            </p>
            <p>
              When I'm not coding or thinking about AI, I'm probably absorbed in a story. I love books, shows, movies, and podcasts. I'm also drawn to in-person storytelling - there's something special about hearing someone recount their experiences face-to-face.
            </p>
            <p>
              Debating is another passion of mine. I enjoy the back-and-forth of a good argument and the challenge of articulating ideas clearly.
            </p>
            <p>
              To stay active, I practice MMA. It's a great workout that keeps me on my toes, both physically and mentally. I also run and hike regularly. These activities help me clear my head and stay energized.
            </p>
            <p>
              I'm always eager to connect with like-minded individuals. Whether it's about AI security, a recent book, or your favorite hiking trail, feel free to reach out. I believe the best ideas often come from unexpected conversations.
            </p>
          </div>
        </div>
        <div className="mt-12 text-center">
          <a href="mailto:sachin.dharashivkar@gmail.com" className="inline-block px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300 shadow-md">
            Get in Touch
          </a>
        </div>
      </div>
    </div>
  );
};

const IconBox = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl mb-2 text-blue-600">{icon}</div>
    <div className="text-sm text-gray-700">{text}</div>
  </div>
);

export default Home;