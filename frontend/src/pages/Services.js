import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import ServiceCard from "../components/ServiceCard";
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Bot, 
  Search, 
  PenTool, 
  ArrowRight,
  CheckCircle2,
  Zap,
  Target,
  Palette,
  BarChart3
} from "lucide-react";

const Services = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [processRef, processInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: "Premium Website Design",
      description: "Custom, responsive websites that captivate visitors and convert them into loyal customers, perfectly representing your brand and driving measurable results.",
      features: [
        "Custom responsive design",
        "Mobile-first approach",
        "SEO optimization",
        "Fast loading speed",
        "E-commerce integration",
        "Content management system",
        "Analytics setup",
        "Ongoing support"
      ],
      price: "Starting at $2,997",
      priceNote: "Complete website package"
    },
    {
      icon: TrendingUp,
      title: "Strategic Digital Marketing",
      description: "Data-driven Meta and Google Ads campaigns that target your ideal audience and deliver exceptional ROI, optimizing every dollar spent.",
      features: [
        "Google Ads management",
        "Meta advertising",
        "Campaign optimization",
        "Audience targeting",
        "A/B testing",
        "Performance tracking",
        "Monthly reporting",
        "Strategy consultation"
      ],
      price: "Starting at $1,497",
      priceNote: "Monthly management + ad spend"
    },
    {
      icon: Users,
      title: "Advanced Lead Generation",
      description: "Sophisticated systems to attract, nurture, and convert high-quality prospects into valuable customers, consistently delivering qualified leads.",
      features: [
        "Lead funnel creation",
        "Landing page optimization",
        "Email marketing automation",
        "CRM integration",
        "Lead scoring",
        "Nurture campaigns",
        "Conversion tracking",
        "Monthly optimization"
      ],
      price: "Starting at $997",
      priceNote: "Monthly lead generation"
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Revolutionary AI solutions that streamline operations, enhance productivity, and eliminate repetitive tasks with intelligent automation technology.",
      features: [
        "AI chatbot development",
        "Workflow automation",
        "Customer service AI",
        "Data processing automation",
        "Integration setup",
        "Custom AI solutions",
        "Training & support",
        "Performance monitoring"
      ],
      price: "Starting at $1,997",
      priceNote: "Custom AI implementation"
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization strategies that improve website visibility, drive organic traffic, and establish industry authority.",
      features: [
        "Technical SEO audit",
        "Keyword research",
        "On-page optimization",
        "Content strategy",
        "Link building",
        "Local SEO",
        "Performance tracking",
        "Monthly reports"
      ],
      price: "Starting at $797",
      priceNote: "Monthly SEO services"
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging, high-quality content that resonates with target audiences, builds brand authority, and drives meaningful engagement.",
      features: [
        "Content strategy development",
        "Blog writing",
        "Social media content",
        "Email marketing copy",
        "Video scripts",
        "Graphic design",
        "Content calendar",
        "Performance analysis"
      ],
      price: "Starting at $697",
      priceNote: "Monthly content package"
    }
  ];

  const process = [
    {
      icon: Target,
      title: "Discovery & Strategy",
      description: "We dive deep into your business, understand your goals, and create a customized strategy that aligns with your vision."
    },
    {
      icon: Palette,
      title: "Design & Development",
      description: "Our team creates stunning designs and develops robust solutions that captivate your audience and drive results."
    },
    {
      icon: Zap,
      title: "Launch & Optimize",
      description: "We launch your project with precision and continuously optimize performance to ensure maximum ROI."
    },
    {
      icon: BarChart3,
      title: "Monitor & Scale",
      description: "We provide ongoing support, monitor performance, and scale your digital presence as your business grows."
    }
  ];

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1523961131990-5ea7c61b2107')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-purple-900/40 to-pink-900/40" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto"
          >
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to transform your business and drive exceptional results
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
            >
              Get Custom Quote
              <ArrowRight className="ml-2" size={20} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Choose the Perfect Solution for Your Business
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              From stunning websites to powerful marketing automation, we have everything you need to succeed online
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard
                key={index}
                service={service}
                index={index}
                inView={servicesInView}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section ref={processRef} className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Our Proven <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Process</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              We follow a systematic approach to ensure every project delivers exceptional results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={processInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                  <step.icon className="text-white" size={32} />
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Why Choose <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Matrixx Agency?</span>
              </h2>
              <p className="text-lg text-gray-300 mb-8">
                We're not just another agency. We're your dedicated partners in digital success, committed to delivering results that matter.
              </p>
              <div className="space-y-4">
                {[
                  "Proven track record with 200+ successful projects",
                  "Custom solutions tailored to your specific needs",
                  "Transparent communication and regular updates",
                  "Dedicated account manager for every project",
                  "Results-driven approach with measurable outcomes",
                  "Ongoing support and optimization"
                ].map((item, index) => (
                  <div key={index} className="flex items-center">
                    <CheckCircle2 className="text-purple-400 mr-3 flex-shrink-0" size={20} />
                    <span className="text-gray-300">{item}</span>
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <img
                src="https://images.pexels.com/photos/3194519/pexels-photo-3194519.jpeg"
                alt="Team collaboration"
                className="rounded-2xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-purple-600/20 to-pink-600/20 rounded-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Let's discuss how our services can help you achieve your business goals and drive exceptional results
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/about"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Learn About Us
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Services;