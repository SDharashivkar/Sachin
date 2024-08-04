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
  shortDesc: 'Built semantic search engine to improve legal research.',
  fullDesc: "Launched in September 2022, IntelLawyer introduced advanced semantic search for legal judgments from key Indian courts. The system utilized web crawling, custom PDF parsing, and advanced NLP techniques including sentence BERT models for embeddings and cross-encoder for re-ranking. Despite serverless deployment challenges, the project achieved 500 weekly active users. Insights revealed semantic search excelled in niche cases, while keyword-based search with manual ranking sufficed for most scenarios. The project concluded after ChatGPT's release, as new AI opportunities emerged, prompting a decision to build something new.",
  achievements: [
    'Developed a semantic search engine for legal documents using state-of-the-art NLP techniques',
    'Overcame technical challenges in serverless infrastructure deployment',
    'Gained insights into user acquisition strategies, particularly through direct engagement with lawyers'
  ]
},
    {
      id: 'aivetaal',
      title: 'AIVetaal.com',
      role: 'Founder',
      date: 'December 2021- June 2022',
      icon: <FaGraduationCap className="text-3xl text-green-500" />,
      shortDesc: 'Personalized learning chatbots using Large Language Models.',
      fullDesc: `AIVetaal, launched in December 2021, aimed to personalize learning using Large Language Models. Inspired by GPT-3 and BlenderBot2, we developed an AI-powered chatbot for competitive exam preparation. We utilized the T5 model with Dense Passage Retrieval for question and answer generation. Facing data limitations, we pivoted to fine-tuning T5 for solving quantitative aptitude questions in GRE and CAT exams. Despite initial success, the project was halted due to the high costs of data acquisition needed for a reliable model.`,
      achievements: [
        'Successfully fine-tuned T5 model for solving quantitative aptitude questions',
        'Recognized the critical importance of data quality and quantity in model development',
        'Learned to balance ambitious goals with market realities and resource constraints'
      ]
    },
    {
      id: 'jpmorgan',
      title: 'Equity Trading Agents',
      role: 'Primary Developer',
      date: '2019-2020',
      icon: <FaChartLine className="text-3xl text-purple-500" />,
      shortDesc: 'Developed sophisticated AI agents for minimizing market impact in stock trading.',
      fullDesc: `At JP Morgan Chase's AI acceleration group, we developed a sophisticated simulation platform and AI agents to minimize market impact in large-scale stock trades. We created deep learning models to analyze complex stock price patterns and multi-agent systems operating across various timescales. The project involved implementing advanced algorithms including DDPG, A2C, and PPO. These agents made informed trading decisions based on order book analysis and custom reward functions, effectively navigating the challenges of continuous control.`,
      achievements: [
        'Developed deep learning models for analyzing intricate stock price patterns',
        'Engineered a reward function within the simulator to guide market impact minimization',
        'Created multi-agent systems capable of operating across different trading timescales'
      ]
    },
    {
      id: 'overcooked',
      title: 'Overcooked Game playing Agent',
      role: 'Developer',
      date: '2018',
      icon: <FaRobot className="text-3xl text-red-500" />,
      shortDesc: 'Trained an AI agent mastering the cooperative cooking game Overcooked.',
      fullDesc: `At Unity, we developed a Reinforcement Learning agent for the cooperative cooking game Overcooked, aiming to advance game testing and NPC development. We represented the game state using natural language and employed Trial-based Heuristic Tree Search to generate a comprehensive action-value dataset. This data trained a neural network to predict optimal game actions, achieving over 90% test accuracy. The resulting agent successfully navigated the complex, cooperative gameplay of Overcooked, demonstrating the potential of agents in understanding and mastering intricate game environments.`,
      achievements: [
        'Trained RL agents for game testing and intelligent NPC development',
        'Implemented natural language representation of complex game states',
        'Achieved high accuracy in predicting optimal game actions through neural network training'
      ]
    },
    {
      id: 'doom',
      title: 'Agents to play Doom Game',
      role: 'Developer',
      date: '2016',
      icon: <FaGamepad className="text-3xl text-yellow-500" />,
      shortDesc: 'Trained one of the early Deep RL agents for playing Doom.',
      fullDesc: "In 2016, I tackled the cutting-edge challenge of training a Deep Reinforcement Learning Agent for the Doom game, a feat achieved by only a few teams globally at that time. The project involved navigating a complex 3D environment with sparse rewards, making it particularly challenging for Reinforcement Learning Agents. I implemented DQN (Deep Q-Network) and A3C (Asynchronous Advantage Actor-Critic) algorithms using Lua Torch. Despite the difficult learning conditions, the agent developed remarkable emergent behaviors, including strategic corner-hiding and precise enemy attacks. This project pushed the boundaries of RL agents in gaming, demonstrating the potential of deep reinforcement learning in complex, dynamic environments.",
      achievements: [
        'Implemented advanced RL algorithms (DQN, A3C) from scratch using Lua Torch',
        'Overcame challenges of training agents in complex 3D environments with sparse rewards',
        'Observed and analyzed sophisticated emergent agent behaviors in game environments'
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
            Curious about Generative AI Applications or AI Security? Let's talk!
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