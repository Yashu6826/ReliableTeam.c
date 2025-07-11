import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import {
  Brain,
  Shield,
  Zap,
  Database,
  CheckCircle,
  ArrowRight,
  Cpu,
  Lock,
  Globe,
  Building2,
  Leaf,
  Heart,
  Code,
  Settings,
  Target,
} from "lucide-react"

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center space-x-2">
              <Brain className="h-8 w-8 text-emerald-600" />
              <span className="text-xl font-bold text-slate-900">QuantLabs</span>
            </div>
            <Button className="bg-emerald-600 hover:bg-emerald-700">Contact Us</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 leading-tight mb-8">
              We help engineer the <span className="text-emerald-600">architecture</span> of{" "}
              <span className="text-emerald-600">tomorrow's intelligence</span>
            </h1>
            <p className="text-xl text-slate-600 mb-12 leading-relaxed">
              From deep learning architectures to billion-parameter foundation models to goal-driven agentic systems, we
              help you engineer the core technologies of modern AI — not just the interfaces.
            </p>
            <Button size="lg" className="bg-emerald-600 hover:bg-emerald-700 text-lg px-8 py-4">
              Contact Us
              <ArrowRight className="ml-2 h-5 w-5" />
            </Button>
          </div>
        </div>
      </section>

      {/* Why QuantLabs */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">🧬 Why QuantLabs</h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Code className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">💻 Strong engineering DNA</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Machine learning scientists & deep learning architects at the core. We design from first principles —
                  not prompt hacks or prebuilt chains. From time-series & multi-modal models to advanced transformers,
                  we solve with rigorous ML science.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Shield className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">🔐 Built for trust, privacy & compliance</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Secure data flows, encryption end-to-end. Enterprise IAM, audit trails, granular access controls.
                  Ready for GDPR, DPDP, HIPAA, SOC2 — and your auditors. AI that's transparent, defensible, and safe to
                  trust.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Zap className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">⚡ Scale from pilot to planet</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Architectures for thousands of users & billions of data points. Dynamic GPU/TPU scaling, smart
                  caching, sharding, low-latency failover. Smooth performance as you grow.
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg hover:shadow-xl transition-shadow">
              <CardContent className="p-8">
                <div className="mb-6">
                  <Database className="h-12 w-12 text-emerald-600 mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">🧬 Data mastery is our edge</h3>
                </div>
                <p className="text-slate-600 leading-relaxed">
                  Turning messy enterprise data into AI's strongest foundation. Connect anything, clean & standardize,
                  build ML features, compliance-ready by default. Real intelligence comes from mastering your data.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* How We Stack Up */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">🔬 How we stack up</h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="grid md:grid-cols-2 gap-8">
              <Card className="border-2 border-slate-200">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-slate-900 mb-6 text-center">Most AI agencies</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">🎭 Build demos or PoCs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">🗣 Only focus on GenAI or LLMs</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">🚫 Ignore scale</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <div className="w-2 h-2 bg-red-500 rounded-full"></div>
                      <span className="text-slate-600">🚧 Skip messy data problems</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card className="border-2 border-emerald-500 bg-emerald-50">
                <CardContent className="p-8">
                  <h3 className="text-2xl font-bold text-emerald-900 mb-6 text-center">QuantLabs</h3>
                  <div className="space-y-4">
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800">🔐 Build privacy-compliant, secure systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800">🧠 ML, DL, multi-modal + agentic systems</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800">⚡ Architect for millions of users & data points</span>
                    </div>
                    <div className="flex items-center space-x-3">
                      <CheckCircle className="w-5 h-5 text-emerald-600" />
                      <span className="text-emerald-800">🧬 Integrate & clean your enterprise data</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* About Team */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">👥 About Team</h2>
            <p className="text-xl text-slate-600 mb-8">The minds behind QuantLabs</p>
          </div>

          {/* Company Logos */}
          <div className="mb-16">
            <p className="text-center text-slate-600 mb-8">Trusted by teams from leading organizations</p>
            <div className="flex flex-wrap justify-center items-center gap-8 opacity-60">
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <span className="text-lg font-bold text-slate-700">Fidelity Investments</span>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <span className="text-lg font-bold text-slate-700">JP Morgan</span>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <span className="text-lg font-bold text-slate-700">Near.org</span>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <span className="text-lg font-bold text-slate-700">TCS</span>
              </div>
              <div className="bg-white px-6 py-4 rounded-lg shadow-sm">
                <span className="text-lg font-bold text-slate-700">Claude</span>
              </div>
            </div>
          </div>

          <div className="max-w-4xl mx-auto text-center mb-12">
            <p className="text-lg text-slate-600 leading-relaxed mb-8">
              QuantLabs is led by machine learning scientists, deep learning architects, and data infrastructure
              engineers who have designed and deployed some of the most advanced AI systems in the world.
            </p>
          </div>

          {/* Team Members */}
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {/* Team Member 1 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Brain className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">25 Years</div>
                <div className="text-sm text-slate-500 mb-4">Experience</div>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Building knowledge graphs</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Recommender systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Enterprise grade AI solutions</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Multi-criteria decision making systems</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 2 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Settings className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">10 Years</div>
                <div className="text-sm text-slate-500 mb-2">Experience</div>
                <div className="text-lg font-semibold text-slate-900 mb-4">5 Patents</div>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Conversational engines for regulated industries</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Multi-agentic solutions for Fintech & Health</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Workflow automation in VC industry</span>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Team Member 3 */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8 text-center">
                <div className="bg-emerald-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                  <Target className="h-10 w-10 text-emerald-600" />
                </div>
                <div className="text-2xl font-bold text-emerald-600 mb-2">12 Years</div>
                <div className="text-sm text-slate-500 mb-4">Experience</div>
                <div className="space-y-2 text-left">
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Building decision models</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Advanced analytics systems</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-2 h-2 bg-emerald-500 rounded-full"></div>
                    <span className="text-sm text-slate-600">Data-driven optimization</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Brain className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-slate-600">Early Contributors of MCP Protocol</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Target className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-slate-600">10+ patents across ML optimization</p>
            </div>
            <div className="text-center">
              <div className="bg-emerald-100 rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Building2 className="h-8 w-8 text-emerald-600" />
              </div>
              <p className="text-slate-600">Multi-billion parameter deployments</p>
            </div>
          </div>

          <p className="text-xl font-semibold text-slate-900 text-center">
            We're not just developers, we're the engineers shaping tomorrow's intelligence.
          </p>
        </div>
      </section>

      {/* Numbers */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">📊 Track Record</h2>
            <p className="text-xl text-slate-600">What sets us apart in scale & expertise</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10+</div>
              <p className="text-slate-600">Bespoke ML & AI systems delivered across regulated industries</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">10+ TB</div>
              <p className="text-slate-600">Enterprise data transformed into structured ML pipelines</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">99.99%</div>
              <p className="text-slate-600">Uptime AI infrastructures, built for billions of data points</p>
            </div>
            <div className="text-center">
              <div className="text-4xl font-bold text-emerald-600 mb-2">100%</div>
              <p className="text-slate-600">Compliance audit pass rate on all deployments</p>
            </div>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">📈 Case Studies</h2>
          </div>

          <div className="grid lg:grid-cols-3 gap-8">
            {/* Healthcare Case Study */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Heart className="h-6 w-6 text-red-500" />
                  <Badge variant="outline" className="text-red-600 border-red-200">
                    HEALTHCARE
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  Standardized & Structured Healthcare Data Platform
                </h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">CHALLENGE</h4>
                    <p className="text-sm text-slate-600">
                      Fragmented patient data scattered across unstructured PDFs, handwritten forms, disparate EHRs
                      making it impossible to extract insights.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">SOLUTION</h4>
                    <p className="text-sm text-slate-600">
                      Built a secure platform that extracts & normalizes multi-source healthcare data, maps to
                      international standards like ICD, SNOMED, LOINC, FHIR.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">99%</div>
                    <div className="text-xs text-slate-600">Data standardization</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">100%</div>
                    <div className="text-xs text-slate-600">Compliance standards</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">70%</div>
                    <div className="text-xs text-slate-600">Reduction in manual work</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Fintech Case Study */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Building2 className="h-6 w-6 text-blue-500" />
                  <Badge variant="outline" className="text-blue-600 border-blue-200">
                    FINTECH
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Automated Investment Memo Engine</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">CHALLENGE</h4>
                    <p className="text-sm text-slate-600">
                      Manual generation of investment memos required analysts to consolidate data from unstructured
                      sources, consuming days per deal.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">SOLUTION</h4>
                    <p className="text-sm text-slate-600">
                      Deployed a secure agentic system that ingests, normalizes, and unifies data from diverse financial
                      sources to auto-generate investment memos.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">80%</div>
                    <div className="text-xs text-slate-600">Faster memo creation</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">100%</div>
                    <div className="text-xs text-slate-600">Source traceability</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">Multi</div>
                    <div className="text-xs text-slate-600">Source integration</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* ESG Case Study */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-8">
                <div className="flex items-center space-x-2 mb-6">
                  <Leaf className="h-6 w-6 text-green-500" />
                  <Badge variant="outline" className="text-green-600 border-green-200">
                    ESG
                  </Badge>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">Personalized ESG Compliance Co-Pilot</h3>

                <div className="space-y-4 mb-6">
                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">CHALLENGE</h4>
                    <p className="text-sm text-slate-600">
                      Enterprises needed to navigate rapidly changing ESG regulations across countries and industries
                      with scattered compliance documents.
                    </p>
                  </div>

                  <div>
                    <h4 className="font-semibold text-slate-900 mb-2">SOLUTION</h4>
                    <p className="text-sm text-slate-600">
                      Built a personalized ESG Co-Pilot that integrates regulatory data from global frameworks and
                      provides real-time, company-specific compliance advice.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-4 text-center">
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">90%</div>
                    <div className="text-xs text-slate-600">Less manual effort</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">Custom</div>
                    <div className="text-xs text-slate-600">Tailored roadmaps</div>
                  </div>
                  <div>
                    <div className="text-2xl font-bold text-emerald-600">Global</div>
                    <div className="text-xs text-slate-600">Multi-framework</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Capabilities */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">🚀 Our Capabilities</h2>
            <p className="text-xl text-slate-600">Core technologies we master</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <div className="text-center">
              <Brain className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Deep Learning Architectures</h3>
              <p className="text-slate-600 text-sm">
                CNNs, RNNs, transformers, diffusion models, custom loss engineering
              </p>
            </div>

            <div className="text-center">
              <Cpu className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">LLM-Oriented Workflows</h3>
              <p className="text-slate-600 text-sm">Custom instruction-tuned models, RAG pipelines, memory graphs</p>
            </div>

            <div className="text-center">
              <Globe className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Foundation & Multi-Modal Models</h3>
              <p className="text-slate-600 text-sm">Language, vision, and tabular systems tailored to your domain</p>
            </div>

            <div className="text-center">
              <Settings className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Agentic Systems</h3>
              <p className="text-slate-600 text-sm">Autonomous pipelines that learn, plan, reason and execute</p>
            </div>

            <div className="text-center">
              <Lock className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Trusted Execution & Privacy</h3>
              <p className="text-slate-600 text-sm">TEE-backed inference, secure enclaves, privacy-preserving AI</p>
            </div>

            <div className="text-center">
              <Database className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
              <h3 className="text-lg font-semibold text-slate-900 mb-2">Data Engineering</h3>
              <p className="text-slate-600 text-sm">
                From PDFs to handwritten logs, building robust structured data streams
              </p>
            </div>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 font-medium">
              We build core technologies of modern intelligence, agentic, autonomous — beyond interfaces and wrappers.
            </p>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4">🛠 Our Services</h2>
            <p className="text-xl text-slate-600">Bespoke AI development, end-to-end</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Custom ML & DL systems</h3>
                <p className="text-slate-600 text-sm">
                  Architected from scratch for your data, objectives, and regulatory needs
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Enterprise AI audits & advisory</h3>
                <p className="text-slate-600 text-sm">Evaluate your landscape, data, and readiness</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">PoC & MVP builds</h3>
                <p className="text-slate-600 text-sm">Rapid validation with the same compliance rigor as production</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Foundation model fine-tuning</h3>
                <p className="text-slate-600 text-sm">Specialized LLMs or multi-modal models trained on your context</p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Long-term scaling</h3>
                <p className="text-slate-600 text-sm">
                  Continuous learning pipelines, robust monitoring, retraining, global deployments
                </p>
              </CardContent>
            </Card>

            <Card className="border-0 shadow-lg">
              <CardContent className="p-6">
                <h3 className="text-lg font-semibold text-slate-900 mb-3">Secure ML Ops</h3>
                <p className="text-slate-600 text-sm">IAM, RBAC, encryption, audit logs, compliance frameworks</p>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-600 font-medium">
              No off-the-shelf templates. Bespoke intelligent systems, engineered exclusively for Enterprises and
              start-ups.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-emerald-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">Ready to engineer tomorrow's intelligence?</h2>
          <p className="text-xl text-emerald-100 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build production-grade AI systems that scale, comply, and deliver real
            business value.
          </p>
          <Button size="lg" variant="secondary" className="text-lg px-8 py-4">
            Contact Us Today
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-slate-900 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center space-x-2 mb-8">
            <Brain className="h-8 w-8 text-emerald-400" />
            <span className="text-2xl font-bold">QuantLabs</span>
          </div>
          <div className="text-center text-slate-400">
            <p>&copy; 2024 QuantLabs. Engineering the architecture of tomorrow's intelligence.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
