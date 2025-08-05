'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Shield, Users, Target, CheckCircle, ArrowRight, Menu, X ,Zap} from 'lucide-react';
import { motion, useAnimation } from 'framer-motion';
import Image from 'next/image';

// Mock image imports (replace with actual paths or CDN URLs in production)
const LOGO = '/icons/Logo2.png'; // Single logo for consistency
const skillIcons = {
  Python: '/icons/python.png',
  JavaScript: '/icons/javascript.png',
  React: '/icons/react.png',
  Nextjs: '/icons/nextjs.png',
  FastAPI: '/icons/fastapi.png',
  Nodejs: '/icons/nodejs.png',
  Docker: '/icons/docker.png',
  MySQL: '/icons/mysql.png',
  MongoDB: '/icons/mongodb.png',
  Streamlit: '/icons/streamlit.png',
  LangChain: '/icons/langchain.png',
  LangGraph: '/icons/langgraph.png',
  Llama: '/icons/llama.png',
  Anthropic: '/icons/anthropic.png',
  Mistral: '/icons/mistral.png',
  OpenAI: '/icons/openai.png',
  Gemini: '/icons/gemini.png',
  Qwen: '/icons/qwen.png',
  Claude: '/icons/claude.png',
  Deepseek: '/icons/deepseek.png',
  GoogleCloud: '/icons/googlecloud.png',
  AWS: '/icons/aws.png',
};

const pods = {
  mvp: {
    title: 'MVP Pod',
    subtitle: '3-Person Launch Team',
    description: 'Ship a working GenAI POC in under 30 days.',
    roles: ['Prompt Engineer', 'Data Engineer', 'GenAI PM'],
    icon: '📦',
  },
  production: {
    title: 'Production Pod',
    subtitle: '5-6 Person Team',
    description: 'Integrate robust GenAI solutions into your main app or workflow.',
    roles: ['ML Engineer', 'Backend Developer', 'Eval QA', 'PM'],
    icon: '🚀',
  },
  evaluation: {
    title: 'Evaluation Pod',
    subtitle: '3-4 Person Team',
    description: 'Build reliable evaluation infrastructure to minimize errors.',
    roles: ['QA Specialist', 'Prompt Debugger', 'Eval Architect'],
    icon: '🧪',
  },
};

const skillItems = [
  { name: 'Python', sub: ['numpy', 'pandas', 'scikit-learn'], Icon: skillIcons.Python },
  { name: 'JavaScript', sub: ['ES6+', 'async/await'], Icon: skillIcons.JavaScript },
  { name: 'React', sub: ['hooks', 'SSR'], Icon: skillIcons.React },
  { name: 'Next.js', sub: ['App Router', 'ISR'], Icon: skillIcons.Nextjs },
  { name: 'FastAPI', sub: ['async', 'OpenAPI'], Icon: skillIcons.FastAPI },
  { name: 'Node.js', sub: ['runtime', 'npm'], Icon: skillIcons.Nodejs },
  { name: 'Docker', sub: ['containers', 'images'], Icon: skillIcons.Docker },
  { name: 'MySQL', sub: ['relational', 'queries'], Icon: skillIcons.MySQL },
  { name: 'MongoDB', sub: ['NoSQL', 'document'], Icon: skillIcons.MongoDB },
  { name: 'Streamlit', sub: ['apps', 'data UI'], Icon: skillIcons.Streamlit },
  { name: 'LangChain', sub: ['chains', 'agents'], Icon: skillIcons.LangChain },
  { name: 'LangGraph', sub: ['graph', 'context'], Icon: skillIcons.LangGraph },
  { name: 'Llama 3.2', sub: ['open weights'], Icon: skillIcons.Llama },
  { name: 'Anthropic', sub: ['Claude', 'safety'], Icon: skillIcons.Anthropic },
  { name: 'Mistral AI', sub: ['lightweight'], Icon: skillIcons.Mistral },
  { name: 'OpenAI', sub: ['GPT-4'], Icon: skillIcons.OpenAI },
  { name: 'Gemini', sub: ['Pro', 'Ultra'], Icon: skillIcons.Gemini },
  { name: 'Qwen', sub: ['large model'], Icon: skillIcons.Qwen },
  { name: 'Claude', sub: ['assistant'], Icon: skillIcons.Claude },
  { name: 'Deepseek', sub: ['search', 'retrieval'], Icon: skillIcons.Deepseek },
  { name: 'Google Cloud', sub: ['GCP'], Icon: skillIcons.GoogleCloud },
  { name: 'AWS', sub: ['compute'], Icon: skillIcons.AWS },
];

const roles = [
  { category: 'Prompting & Logic', roles: ['Prompt Engineer', 'Instruction Tuner', 'Prompt Debugger'] },
  { category: 'RAG & Retrieval', roles: ['LangChain Developer', 'Vector DB Specialist', 'Retrieval Optimizer'] },
  { category: 'LLM Evaluation', roles: ['Hallucination Tester', 'Eval Framework Builder', 'QA Analyst'] },
  { category: 'Integration & Infra', roles: ['GenAI Backend Developer', 'Deployment Engineer', 'MLOps Specialist'] },
  { category: 'Model Optimization', roles: ['Fine-Tuner', 'Embedding Architect', 'Token Cost Optimizer'] },
  { category: 'Data Pipelines', roles: ['Data Engineer', 'Annotator', 'RLHF Labeler'] },
];

const stats = [
  { number: '50+', label: 'Contractors placed across AI startups and agencies' },
  { number: '5000+', label: 'Profiles vetted by our AI-driven engine' },
  { number: '5-7', label: 'Days to deploy specialized GenAI talent' },
];

const MarqueeItem = ({ name, sub, Icon }) => (
  <div className="flex flex-col items-center justify-center p-4 m-2 bg-white rounded-lg shadow-sm border border-gray-100 min-w-[180px]">
    <Image src={Icon} alt={name} width={64} height={64} className="mb-2" />
    <div className="font-medium text-sm text-gray-900">{name}</div>
    <div className="text-xs text-gray-500 flex flex-wrap gap-1 justify-center">
      {sub.map((s) => (
        <span key={s} className="px-2 py-0.5 rounded bg-gray-100">{s}</span>
      ))}
    </div>
  </div>
);

export default function ReliableTeamLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('mvp');
  const [scrollY, setScrollY] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    controls.start({
      x: [0, -window.innerWidth],
      transition: { repeat: Infinity, ease: 'linear', duration: 20 },
    });
  }, [controls]);

  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-inter">
      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 bg-white shadow-sm transition-all duration-300 ${scrollY > 50 ? 'border-b border-gray-200' : ''}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Image src={LOGO} alt="ReliableTeam.ai" width={40} height={40} />
              <div className="text-2xl font-semibold text-gray-900">ReliableTeam.ai</div>
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="text-gray-600 hover:text-emerald-600 transition-colors">How It Works</a>
              <a href="#roles" className="text-gray-600 hover:text-emerald-600 transition-colors">Roles</a>
              <a href="#pods" className="text-gray-600 hover:text-emerald-600 transition-colors">Pods</a>
              <a href="#contact" className="bg-emerald-600 text-white px-6 py-2 rounded-full hover:bg-emerald-700 transition-colors">Get Started</a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
        {isMenuOpen && (
          <div className="md:hidden bg-white shadow-lg">
            <div className="flex flex-col items-center py-6 space-y-4">
              <a href="#how-it-works" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-emerald-600">How It Works</a>
              <a href="#roles" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-emerald-600">Roles</a>
              <a href="#pods" onClick={() => setIsMenuOpen(false)} className="text-gray-600 hover:text-emerald-600">Pods</a>
              <a href="#contact" onClick={() => setIsMenuOpen(false)} className="bg-emerald-600 text-white px-6 py-2 rounded-full">Get Started</a>
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="pt-40 pb-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-6">
            Your Partner for Embedded AI Talent
          </h1>
          <p className="text-lg sm:text-xl text-gray-600 mb-8 max-w-3xl mx-auto">
            We deliver vetted GenAI specialists—prompt engineers, retrieval experts, and eval architects—ready to ship production-ready solutions tailored to your stack.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all flex items-center">
              Contact Us <ArrowRight className="ml-2 w-5 h-5" />
            </a>
            <a href="mailto:talent@reliableteam.club" className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
              talent@reliableteam.club
            </a>
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-12 max-w-5xl mx-auto">
          {stats.map((stat, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 text-center">
              <div className="text-3xl font-bold text-emerald-600 mb-2">{stat.number}</div>
              <div className="text-gray-600">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Overcome GenAI Hiring Challenges
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Clock className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Save Time</h3>
              <p className="text-gray-600">Avoid weeks of recruiting. We deliver vetted talent in 5–7 days.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Target className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Stay Current</h3>
              <p className="text-gray-600">Our experts are skilled in the latest GenAI tools and techniques.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Users className="w-10 h-10 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Access Expertise</h3>
              <p className="text-gray-600">Tap into a curated pool of production-ready GenAI professionals.</p>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Enabling Seamless GenAI Delivery
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Zap className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Specialized Talent</h3>
              <p className="text-gray-600">GenAI-native experts, no generalists.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Target className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Outcome-Driven</h3>
              <p className="text-gray-600">Vetted for your specific stack and goals.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Users className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Team Pods</h3>
              <p className="text-gray-600">Pre-scoped teams for MVPs or production.</p>
            </div>
            <div className="bg-white rounded-lg shadow-sm p-6">
              <Shield className="w-8 h-8 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">Fast & Secure</h3>
              <p className="text-gray-600">Deployed in 5–7 days, NDA-compliant.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Specialized GenAI Roles
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Roles tailored to specific GenAI outcomes and workflows.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {roles.map((roleCluster, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm p-6">
                <h3 className="text-xl font-semibold mb-4">{roleCluster.category}</h3>
                {roleCluster.roles.map((role, roleIndex) => (
                  <div key={roleIndex} className="flex items-center text-gray-600 mb-2">
                    <CheckCircle className="w-4 h-4 text-emerald-600 mr-2" />
                    <span>{role}</span>
                  </div>
                ))}
              </div>
            ))}
          </div>
          <div className="relative overflow-hidden mt-8">
            <motion.div
              className="flex gap-4"
              animate={controls}
              onHoverStart={() => controls.stop()}
              onHoverEnd={() => controls.start({
                x: [0, -window.innerWidth],
                transition: { repeat: Infinity, ease: 'linear', duration: 20 },
              })}
            >
              {[...skillItems, ...skillItems].map((item, idx) => (
                <MarqueeItem key={idx + item.name} name={item.name} sub={item.sub} Icon={item.Icon} />
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pods Section */}
      <section id="pods" className="py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-gray-900 mb-6">
            Pods Tailored to Your Build Stage
          </h2>
          <p className="text-lg text-gray-600 text-center mb-8">
            Pre-configured teams to accelerate your GenAI projects.
          </p>
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {Object.keys(pods).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-2 rounded-full font-medium transition-all ${
                  activeTab === key ? 'bg-emerald-600 text-white' : 'bg-gray-200 text-gray-600 hover:bg-gray-300'
                }`}
              >
                {pods[key].icon} {pods[key].title}
              </button>
            ))}
          </div>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <div className="text-center mb-6">
              <div className="text-5xl mb-4">{pods[activeTab].icon}</div>
              <h3 className="text-2xl font-semibold mb-2">{pods[activeTab].title}</h3>
              <p className="text-lg text-emerald-600 mb-2">{pods[activeTab].subtitle}</p>
              <p className="text-gray-600">{pods[activeTab].description}</p>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              {pods[activeTab].roles.map((role, index) => (
                <div key={index} className="bg-gray-100 rounded-md p-4 text-gray-900 font-medium">
                  {role}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-16 px-4 sm:px-6 lg:px-8 bg-gray-100">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-6">
            Accelerate Your GenAI Roadmap
          </h2>
          <p className="text-lg text-gray-600 mb-8">
            Connect with vetted GenAI talent to ship faster and smarter.
          </p>
          <div className="bg-white rounded-lg shadow-sm p-8">
            <h3 className="text-xl font-semibold text-emerald-600 mb-4">Ready to Get Started?</h3>
            <p className="text-gray-600 mb-6">
              Share your needs, and we’ll match you with top-tier talent in days.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#contact" className="bg-emerald-600 text-white px-8 py-3 rounded-full font-medium hover:bg-emerald-700 transition-all flex items-center">
                Contact Us <ArrowRight className="ml-2 w-5 h-5" />
              </a>
              <a href="mailto:talent@reliableteam.club" className="border border-gray-300 px-8 py-3 rounded-full font-medium hover:bg-gray-100 transition-all">
                talent@reliableteam.club
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 bg-white border-t border-gray-200">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
            <div>
              <div className="flex items-center gap-3 mb-4">
                <Image src={LOGO} alt="ReliableTeam.ai" width={40} height={40} />
                <div className="text-xl font-semibold text-gray-900">ReliableTeam.ai</div>
              </div>
              <p className="text-gray-600 text-sm">Your trusted partner for GenAI talent solutions.</p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Links</h3>
              <div className="space-y-2 text-gray-600">
                <a href="#how-it-works" className="block hover:text-emerald-600">How It Works</a>
                <a href="#roles" className="block hover:text-emerald-600">Roles</a>
                <a href="#pods" className="block hover:text-emerald-600">Pods</a>
              </div>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Contact</h3>
              <div className="space-y-2 text-gray-600 text-sm">
                <p>169 Madison Avenue, STE 11133</p>
                <p>New York, NY 10016, USA</p>
                <p>Phone: +1 (857) 654-2544</p>
                <p>Email: talent@reliableteam.club</p>
              </div>
            </div>
          </div>
          <div className="mt-8 text-center text-gray-600 text-sm">
            © 2025 ReliableTeam.ai. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}