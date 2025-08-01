'use client';
import React, { useState, useEffect } from 'react';
import { ChevronRight, Clock, Shield, Zap, Users, Target, CheckCircle, Star, ArrowRight, Menu, X } from 'lucide-react';

export default function ReliableTeamLanding() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('mvp');
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pods = {
    mvp: {
      title: "MVP Pod",
      subtitle: "3-person launch team",
      description: "Ship a working GenAI POC in <30 days",
      roles: ["Prompt Engineer", "Data Engineer", "GenAI PM"],
      icon: "📦"
    },
    production: {
      title: "Production Pod",
      subtitle: "5-6 person team",
      description: "Robustify + integrate into your main app/workflow",
      roles: ["ML Engineer", "Backend Dev", "Eval QA", "PM"],
      icon: "🚀"
    },
    evaluation: {
      title: "Evaluation Pod",
      subtitle: "3-4 person team",
      description: "Build reliable eval infra to reduce garbage outputs",
      roles: ["2x QA", "Prompt Debugger", "Eval Architect"],
      icon: "🧪"
    }
  };

  const roles = [
    { category: "Prompting & Prompt Logic", roles: ["Prompt Engineer", "Instruction Tuner", "Prompt Debugger"] },
    { category: "RAG & Retrieval Engineering", roles: ["LangChain Dev", "Vector DB Specialist", "Retrieval Optimizer"] },
    { category: "LLM Evaluation & QA", roles: ["Hallucination Tester", "Eval Framework Builder", "LLM QA Analyst"] },
    { category: "Integration & Infra", roles: ["GenAI Backend Dev", "Deployment Engineer", "MLOps for LLMs"] },
    { category: "Model Tuning & Optimization", roles: ["Fine-Tuner", "Embedding Architect", "Token Cost Optimizer"] },
    { category: "Data & Feedback Pipelines", roles: ["Data Engineer", "Annotator", "RLHF Labeler"] }
  ];

  const stats = [
    { number: "50+", label: "Contractors placed across AI startups, GCCs, and boutique agencies" },
    { number: "5000+", label: "Profiles mapped by our simulation-first engine" },
    { number: "5-7", label: "Days to deploy vetted GenAI talent" }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-gray-900 overflow-hidden">
      {/* Background Animation */}
     

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${scrollY > 100 ? 'bg-slate-50/90 backdrop-blur-lg border-b border-gray-200' : ''}`}>
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="text-2xl font-bold text-black bg-clip-text text-transparent">
              ReliableTeam.ai
            </div>
            <div className="hidden md:flex items-center space-x-8">
              <a href="#how-it-works" className="hover:text-emerald-600 transition-colors">How It Works</a>
              <a href="#roles" className="hover:text-emerald-600 transition-colors">Roles</a>
              <a href="#pods" className="hover:text-emerald-600 transition-colors">Pods</a>
              <a href="#contact" className=" px-6 py-2 rounded-full hover:shadow-lg hover:shadow-emerald-300/10 transition-all">
                Get Started
              </a>
            </div>
            <button className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </nav>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="fixed inset-0 bg-slate-50/95 z-40 md:hidden">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-xl">
            <a href="#how-it-works" onClick={() => setIsMenuOpen(false)}>How It Works</a>
            <a href="#roles" onClick={() => setIsMenuOpen(false)}>Roles</a>
            <a href="#pods" onClick={() => setIsMenuOpen(false)}>Pods</a>
            <a href="#contact" onClick={() => setIsMenuOpen(false)} className=" px-8 py-3 rounded-full">
              Get Started
            </a>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <div className="inline-flex items-center bg-gray-100/50 border border-gray-200 rounded-full px-6 py-2 mb-6 backdrop-blur-sm">
              <Zap className="w-4 h-4 mr-2 text-emerald-600" />
              <span className="text-sm text-emerald-400">Deployed in 5-7 Days</span>
            </div>
            <h1 className="text-5xl md:text-7xl font-bold mb-6  bg-clip-text text-transparent leading-tight">
              Vetted GenAI Talent.
              <br />
              <span className="text-4xl md:text-6xl text-gray-800">Vetted GenAI talent</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 max-w-4xl mx-auto leading-relaxed">
              The trusted staffing layer for AI-native teams. From prompt engineers to RAG developers to LLM QA pods — we deliver SME-vetted, project-ready specialists on contract.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="px-8 py-4 rounded-full bg-gradient-to-r from-emerald-700/80 to-emerald-500/50 text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center group">
                Schedule a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
                talent@reliableteam.ai
              </button>
            </div>
          </div>

          {/* Stats */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-20">
            {stats.map((stat, index) => (
              <div key={index} className="text-center group">
                <div className="bg-white border border-gray-200 rounded-2xl p-8 backdrop-blur-sm hover:bg-gray-100/70 transition-all duration-300 group-hover:border-emerald-500/50">
                  <div className="text-4xl font-bold text-emerald-600 mb-2">{stat.number}</div>
                  <div className="text-gray-600">{stat.label}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-20 px-6 bg-gray-100/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Hiring Bottleneck is Killing
              <span className="text-emerald-600"> GenAI Momentum</span>
            </h2>
            <div className="text-2xl text-emerald-600 mb-8 font-semibold">
              ⚠ "We don't have the team for this right now."
            </div>
            <p className="text-xl text-gray-600 mb-8">
              You shouldn't be saying this in 2025.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="bg-gray-100/50 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <Clock className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Time Wasted</h3>
              <p className="text-gray-600">Senior teams spend 3–5 weeks chasing prompt engineers, RAG devs, or hallucination testers while product deadlines slip.</p>
            </div>
            <div className="bg-gray-100/50 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <Target className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Wrong Talent</h3>
              <p className="text-gray-600">Traditional recruiters can't evaluate AI workflows. Freelance marketplaces flood you with irrelevant profiles.</p>
            </div>
            <div className="bg-gray-100/50 border border-emerald-500/30 rounded-2xl p-8 backdrop-blur-sm">
              <Users className="w-12 h-12 text-emerald-600 mb-4" />
              <h3 className="text-xl font-semibold mb-4">Team Burnout</h3>
              <p className="text-gray-600">Internal teams are burned out interviewing while confidence erodes and momentum dies.</p>
            </div>
          </div>
          <div className="text-center mt-12">
            <p className="text-2xl font-semibold text-gray-500">
              The truth: You don't need more resumes. You need project-ready AI builders — already vetted for your stack and use-case.
            </p>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Don't "Staff" AI Roles.
              <br />
              <span className="text-emerald-600">We Enable GenAI Delivery.</span>
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-gray-100/50 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Specialized Talent</h3>
              <p className="text-gray-600">Only GenAI-native roles (no full-stack devs, no IT generalists)</p>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Target className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Outcome-First Vetting</h3>
              <p className="text-gray-600">Talent vetted for role → stack → task → job outcome</p>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Users className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Pods, Not Just People</h3>
              <p className="text-gray-600">Pre-scoped pods for MVPs, eval cycles, or production builds</p>
            </div>
            <div className="bg-gray-100/50 border border-gray-200 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all group">
              <div className="w-12 h-12  rounded-full flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold mb-3">Speed with Safety</h3>
              <p className="text-gray-600">Vetted profiles in 5–7 business days, NDA/IP compliant, optional trial week</p>
            </div>
          </div>
          <div className="text-center mt-12 p-8 border border-emerald-500/30 rounded-2xl backdrop-blur-sm">
            <p className="text-xl text-emerald-600">
              💡 You get engineers who know what "RAG latency tuning via Weaviate" actually means — and have done it.
            </p>
          </div>
        </div>
      </section>

      {/* Roles Section */}
      <section id="roles" className="py-20 px-6 bg-gray-100/30">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Sample Role Clusters
              <br />
              <span className="text-emerald-600">We Specialize In</span>
            </h2>
            <p className="text-xl text-gray-600">Not just titles. Each role is designed around specific job-to-be-done outcomes.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {roles.map((roleCluster, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-2xl p-6 backdrop-blur-sm hover:border-emerald-500/50 transition-all group">
                <h3 className="text-xl font-semibold mb-4 text-gray-800">{roleCluster.category}</h3>
                <div className="space-y-2">
                  {roleCluster.roles.map((role, roleIndex) => (
                    <div key={roleIndex} className="flex items-center text-gray-600 group-hover:text-gray-900 transition-colors">
                      <CheckCircle className="w-4 h-4 mr-2 text-emerald-600 flex-shrink-0" />
                      <span>{role}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
          <div className="text-center mt-12 p-6 bg-gray-100/50 border border-gray-200 rounded-2xl backdrop-blur-sm">
            <p className="text-lg text-gray-600">
              All roles are mapped to <span className="text-emerald-600 font-semibold">skill-task-tool combinations</span> — not resume keywords.
            </p>
          </div>
        </div>
      </section>

      {/* Pods Section */}
      <section id="pods" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              We Assemble Pods Based on
              <br />
              <span className="text-emerald-600">Your Build Stage</span>
            </h2>
            <p className="text-xl text-gray-600">Our delivery model is built around how GenAI teams actually scale.</p>
          </div>
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {Object.keys(pods).map((key) => (
              <button
                key={key}
                onClick={() => setActiveTab(key)}
                className={`px-6 py-3 rounded-full font-semibold transition-all ${
                  activeTab === key
                    ? ' text-gray-900 bg-gray-100'
                    : ' text-gray-600 hover:bg-gray-200'
                }`}
              >
                {pods[key].icon} {pods[key].title}
              </button>
            ))}
          </div>
          <div className="bg-gray-100/50 border border-gray-200 rounded-3xl p-8 backdrop-blur-sm">
            <div className="text-center mb-8">
              <div className="text-6xl mb-4">{pods[activeTab].icon}</div>
              <h3 className="text-3xl font-bold mb-2">{pods[activeTab].title}</h3>
              <p className="text-xl text-emerald-600 mb-4">{pods[activeTab].subtitle}</p>
              <p className="text-lg text-gray-600 mb-6">{pods[activeTab].description}</p>
            </div>
            <div className="flex justify-center align-center gap-4">
              {pods[activeTab].roles.map((role, index) => (
                <div key={index} className="bg-gray-100/50 border border-gray-300 rounded-lg p-4 text-center">
                  <div className="font-semibold text-gray-900">{role}</div>
                </div>
              ))}
            </div>
          </div>
          <div className="text-center mt-12 p-6  to-emerald-400/30 border border-emerald-500/30 rounded-2xl backdrop-blur-sm">
            <p className="text-lg">
              Each pod comes with optional <span className="text-emerald-600 font-semibold">project oversight</span>,
              <span className="text-emerald-600 font-semibold"> milestone planning</span>, and
              <span className="text-emerald-600 font-semibold"> weekly QA</span>.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 px-6 ">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Let's Unblock Your
            <br />
            <span className="text-emerald-600">GenAI Roadmap</span>
          </h2>
          <p className="text-xl text-gray-600 mb-8">
            The right engineer in 5 days is worth more than 50 resumes in your inbox.
          </p>
          <div className="bg-gray-100/50 border border-gray-200 rounded-3xl p-8 backdrop-blur-sm mb-8">
            <h3 className="text-2xl font-bold mb-4 text-emerald-600">👋 Want to test us?</h3>
            <p className="text-lg text-gray-600 mb-6">
              Share your hardest AI role today — and we'll show you 2 vetted profiles by Friday.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className=" px-8 py-4 rounded-full text-lg font-semibold hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 transform hover:scale-105 flex items-center justify-center group">
                Schedule a Call
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </button>
              <button className="border border-gray-300 px-8 py-4 rounded-full text-lg font-semibold hover:bg-gray-100 transition-all">
                talent@reliableteam.ai
              </button>
            </div>
          </div>
          <div className="text-gray-600">
            <p>Visit <span className="text-emerald-600">reliableteam.ai</span></p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-6 bg-slate-50 border-t border-gray-200">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="text-2xl font-bold  bg-clip-text text-transparent mb-4 md:mb-0">
              ReliableTeam.ai
            </div>
            <div className="text-gray-600">
              © 2025 ReliableTeam.ai. The trusted staffing layer for AI-native teams.
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

