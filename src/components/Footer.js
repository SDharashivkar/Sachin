import React from 'react';
import { FaPhoneAlt, FaEnvelope, FaTwitter, FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-blue-600 to-purple-600 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <h2 className="text-2xl font-bold mb-2">Sachin Dharashivkar</h2>
            <p>Reinforcement Learning Engineer & AI Security Founder</p>
          </div>
          <div className="flex space-x-4">
            <SocialLink href="tel:+91-9420377689" icon={<FaPhoneAlt />} label="Phone" />
            <SocialLink href="mailto:sachin.dharashivkar@gmail.com" icon={<FaEnvelope />} label="Email" />
            <SocialLink href="https://twitter.com/s16r442" icon={<FaTwitter />} label="Twitter" />
            <SocialLink href="https://www.linkedin.com/in/sachin-dharashivkar/" icon={<FaLinkedin />} label="LinkedIn" />
            <SocialLink href="https://github.com/your-github-username" icon={<FaGithub />} label="GitHub" />
          </div>
        </div>
        <div className="mt-8 text-center text-sm opacity-75">
          © {new Date().getFullYear()} Sachin Dharashivkar. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

const SocialLink = ({ href, icon, label }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="hover:text-blue-200 transition duration-300"
    aria-label={label}
  >
    {icon}
  </a>
);

export default Footer;