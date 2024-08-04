import React, { useState } from 'react';
import { FaSearch, FaRobot, FaChartLine, FaGamepad, FaGraduationCap } from 'react-icons/fa';

const Projects = () => {
  const [expandedProject, setExpandedProject] = useState(null);

  const projects = [
{
  id: 'intellawyer',
  title: 'IntelLawyer.com',
  role: 'Founder',
  date: 'September 2022 - April 2023',
  icon: <FaSearch className="text-3xl text-blue-500" />,
  shortDesc: 'Built an AI-powered semantic search engine to improve legal research.',
  fullDesc: `Seeing how outdated keyword-based legal search engines were, I created IntelLawyer, a smart semantic search platform for legal judgments. I focused on cases from the Supreme Court, Bombay High Court, and Bangalore High Court. The system I built had for that time state-of-the-art retrieval components, like Sentence Transformers encoders and cross-encoders. To put this in context, this is Retrival component of RAG system; deployed before chatGPT was released.

  I faced some tough challenges, like dealing with the cold start problem on serverless infrastructure. Despite this, I successfully launched a working version that attracted 500 initial users. This experience taught me a lot about how users engage with legal tech and what they really need from it.`,
  achievements: [
    'Developed a new kind of search engine that makes legal research easier and more effective',
    'Solved tricky technical problems in serverless deployment',
    'Learned valuable lessons about what legal professionals want from tech tools and how to keep users coming back'
  ]
},
    {
      id: 'aivetaal',
      title: 'AIVetaal.com',
      role: 'Founder',
      date: 'December 2021',
      icon: <FaGraduationCap className="text-3xl text-green-500" />,
      shortDesc: 'Pioneered personalized learning using Large Language Models.',
      fullDesc: `AIVetaal was born from the vision of personalizing learning through Large Language Models. Inspired by advancements in models like GPT-3 and BlenderBot2, I set out to create an AI-powered chatbot for competitive exam preparation.

      Utilizing the T5 model and Dense Passage Retrieval, we built a system capable of generating questions and answers. While we faced challenges in developing a closed-domain chatbot due to data limitations, this project led us to explore innovative applications in quantitative aptitude question-solving, pushing the boundaries of AI in education.`,
      achievements: [
        'Developed an AI system for question and answer generation',
        'Successfully fine-tuned T5 model for solving quantitative aptitude questions',
        'Gained crucial insights into the challenges of AI in education and the importance of data curation'
      ]
    },
    {
      id: 'jpmorgan',
      title: 'AI-Powered Equity Trading Agents',
      role: 'Developer',
      date: '2020',
      icon: <FaChartLine className="text-3xl text-purple-500" />,
      shortDesc: 'Engineered sophisticated AI agents for minimizing market impact in stock trading.',
      fullDesc: `At JP Morgan Chase's AI acceleration group, I took on the challenge of developing a simulation platform and specialized agents for stock trading, aimed at minimizing market impact during large-scale trades.

      This project involved creating deep learning models to analyze complex stock price patterns and developing multi-agent systems operating across various timescales. We implemented advanced algorithms like DDPG, A2C, and PPO, enabling our agents to make informed trading decisions based on order book analysis and custom reward functions.`,
      achievements: [
        'Developed a sophisticated simulation platform for stock trading',
        'Implemented multiple RL algorithms (DDPG, A2C, PPO) for trading agents',
        'Created agents capable of minimizing market impact in large-scale stock trades'
      ]
    },
    {
      id: 'overcooked',
      title: 'Overcooked Game AI Agent',
      role: 'Primary Developer',
      date: '2019',
      icon: <FaRobot className="text-3xl text-red-500" />,
      shortDesc: 'Crafted an AI agent mastering the cooperative cooking game Overcooked.',
      fullDesc: `At Unity, I spearheaded a project to showcase Reinforcement Learning capabilities by integrating AI agents into the cooperative cooking game, Overcooked. This initiative aimed to revolutionize game testing and enhance non-playing character development.

      Leveraging natural language to represent the game state, we employed Trial-based Heuristic Tree Search to generate a comprehensive action-value dataset. This data trained a neural network achieving over 90% test accuracy, resulting in an agent that could successfully navigate the complexities of Overcooked gameplay.`,
      achievements: [
        'Developed an RL agent for the complex, cooperative game Overcooked',
        'Implemented Trial-based Heuristic Tree Search for action-value generation',
        'Achieved over 90% test accuracy in predicting optimal game actions'
      ]
    },
    {
      id: 'doom',
      title: 'Doom Game AI Agent',
      role: 'Primary Developer',
      date: '2016',
      icon: <FaGamepad className="text-3xl text-yellow-500" />,
      shortDesc: 'Pioneered one of the early Deep RL agents for playing Doom.',
      fullDesc: `In the early days of deep learning, I embarked on an ambitious project to train a Deep Reinforcement Learning Agent for the Doom game, a feat accomplished by only a few teams at the time.

      I implemented DQN (Deep Q-Network) and A3C (Asynchronous Advantage Actor-Critic) algorithms using Lua Torch. The agent displayed fascinating emergent behaviors, such as strategic corner-hiding and precise enemy attacks, showcasing the potential of deep reinforcement learning in gaming environments.`,
      achievements: [
        'Developed one of the early successful Deep RL agents for Doom',
        'Implemented DQN and A3C algorithms from scratch',
        'Observed and analyzed complex emergent behaviors in the trained agent'
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 py-20">
      <div className="container mx-auto px-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">My Project Portfolio</h1>
        <p className="text-xl text-center mb-12 text-gray-600">
          A collection of RL and LLM projects that showcase my AI expertise
        </p>
        <div className="space-y-12">
          {projects.map((project) => (
            <div key={project.id} className="bg-white rounded-lg shadow-lg p-6 transition-all duration-300 hover:shadow-xl">
              <div className="flex items-center mb-4">
                <div className="mr-4">{project.icon}</div>
                <div>
                  <h2 className="text-2xl font-semibold">{project.title}</h2>
                  <p className="text-gray-600">{project.role} | {project.date}</p>
                </div>
              </div>
              <p className="text-gray-800 mb-4">{project.shortDesc}</p>
              {expandedProject === project.id ? (
                <>
                  <p className="text-gray-700 mb-4">{project.fullDesc}</p>
                  <h3 className="font-semibold mb-2">Key Achievements:</h3>
                  <ul className="list-disc pl-5 mb-4">
                    {project.achievements.map((achievement, index) => (
                      <li key={index} className="text-gray-700">{achievement}</li>
                    ))}
                  </ul>
                  <button
                    onClick={() => setExpandedProject(null)}
                    className="text-blue-500 hover:text-blue-700 transition duration-300"
                  >
                    Read Less
                  </button>
                </>
              ) : (
                <button
                  onClick={() => setExpandedProject(project.id)}
                  className="text-blue-500 hover:text-blue-700 transition duration-300"
                >
                  Read More
                </button>
              )}
            </div>
          ))}
        </div>
        <div className="mt-16 text-center">
          <p className="text-xl text-gray-700">
            Intrigued by the possibilities of AI? Let's connect and explore groundbreaking ideas together!
          </p>
          <a href="mailto:sachin.dharashivkar@gmail.com" className="inline-block mt-4 px-6 py-3 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition duration-300">
            Reach Out
          </a>
        </div>
      </div>
    </div>
  );
};

export default Projects;