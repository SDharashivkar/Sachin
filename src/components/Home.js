import React from 'react';
import { FaRunning, FaMountain, FaBook, FaCode } from 'react-icons/fa';
import { GiBoxingGlove } from 'react-icons/gi';

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-500 to-purple-600 text-white">
      <div className="container mx-auto px-6 py-20">
        <div className="flex flex-col md:flex-row items-center justify-center mb-12">
          <img
            src="/sachin1.JPG"
            alt="Sachin Dharashivkar"
            className="w-64 h-64 rounded-full shadow-2xl mb-8 md:mb-0 md:mr-12 border-4 border-white animate-fade-in"
          />
          <div className="text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-slide-up">Sachin Dharashivkar</h1>
            <p className="text-xl md:text-2xl mb-6 animate-slide-up animation-delay-200">
              Reinforcement Learning Engineer | AI Security Founder
            </p>
            <div className="flex justify-center md:justify-start space-x-4 animate-slide-up animation-delay-400">
              <IconBox icon={<FaCode />} text="RL Engineer" />
              <IconBox icon={<GiBoxingGlove />} text="MMA Fan" />
              <IconBox icon={<FaRunning />} text="Runner" />
              <IconBox icon={<FaMountain />} text="Hiker" />
              <IconBox icon={<FaBook />} text="Reader" />
            </div>
          </div>
        </div>
        <div className="mt-12 bg-white bg-opacity-10 backdrop-blur-md rounded-lg p-8 animate-fade-in animation-delay-600">
          <h2 className="text-3xl font-bold mb-4">About Me</h2>
          <p className="text-lg">
            I'm passionate about pushing the boundaries of AI through Reinforcement Learning. From training agents to master complex games to developing stock trading algorithms, I've explored diverse applications of RL. Currently, I'm channeling my expertise into AI security, building innovative solutions to protect against emerging threats in the AI landscape through my startup, TrojanVectors.
          </p>
        </div>
      </div>
    </div>
  );
};

const IconBox = ({ icon, text }) => (
  <div className="flex flex-col items-center">
    <div className="text-3xl mb-2">{icon}</div>
    <div className="text-sm">{text}</div>
  </div>
);

export default Home;