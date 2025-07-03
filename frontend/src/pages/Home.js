import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { useInView } from "react-intersection-observer";
import { 
  Globe, 
  TrendingUp, 
  Users, 
  Bot, 
  Search, 
  PenTool, 
  Star, 
  ArrowRight,
  CheckCircle,
  Play
} from "lucide-react";

const Home = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [servicesRef, servicesInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [portfolioRef, portfolioInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [testimonialsRef, testimonialsInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  const services = [
    {
      icon: Globe,
      title: "Premium Website Design",
      description: "Custom, responsive websites that captivate visitors and convert them into loyal customers, perfectly representing your brand.",
      features: ["Custom Design", "Mobile Responsive", "SEO Optimized", "Fast Loading"]
    },
    {
      icon: TrendingUp,
      title: "Strategic Digital Marketing",
      description: "Data-driven Meta and Google Ads campaigns that target your ideal audience and deliver exceptional ROI.",
      features: ["Google Ads", "Meta Ads", "Campaign Management", "ROI Tracking"]
    },
    {
      icon: Users,
      title: "Advanced Lead Generation",
      description: "Sophisticated systems to attract, nurture, and convert high-quality prospects into valuable customers.",
      features: ["Lead Funnels", "Email Marketing", "CRM Integration", "Analytics"]
    },
    {
      icon: Bot,
      title: "AI-Powered Automation",
      description: "Revolutionary AI solutions that streamline operations and eliminate repetitive tasks with intelligent automation.",
      features: ["Chatbots", "Workflow Automation", "AI Analytics", "Smart Integration"]
    },
    {
      icon: Search,
      title: "SEO Optimization",
      description: "Comprehensive search engine optimization strategies that improve website visibility and drive organic traffic.",
      features: ["Keyword Research", "On-Page SEO", "Technical SEO", "Link Building"]
    },
    {
      icon: PenTool,
      title: "Content Creation",
      description: "Engaging, high-quality content that resonates with target audiences and builds brand authority.",
      features: ["Content Strategy", "Blog Writing", "Social Media", "Visual Content"]
    }
  ];

  const testimonials = [
    {
      name: "Sarah Johnson",
      company: "TechStart Solutions",
      text: "Matrixx Agency transformed our online presence completely. Our website now converts 3x better than before!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1494790108755-2616b612b550?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Michael Chen",
      company: "GrowthLab Marketing",
      text: "The lead generation system they built for us has been a game-changer. We're getting qualified leads daily.",
      rating: 5,
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop&crop=face"
    },
    {
      name: "Emily Rodriguez",
      company: "Creative Studio Inc",
      text: "Professional, creative, and results-driven. Their AI automation saved us 20 hours per week!",
      rating: 5,
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop&crop=face"
    }
  ];

  const stats = [
    { number: "200+", label: "Websites Created" },
    { number: "98%", label: "Client Satisfaction" },
    { number: "5M+", label: "Leads Generated" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a')`,
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
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              Transform Your 
              <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent"> Digital Presence</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              We create stunning websites and powerful digital marketing strategies that turn your vision into results. 
              Your success is our obsession.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Started Today
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Floating Elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-2 h-2 bg-purple-400 rounded-full opacity-20"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -100, 0],
                opacity: [0.2, 0.5, 0.2],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-slate-800/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent mb-2">
                  {stat.number}
                </div>
                <div className="text-gray-300">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section ref={servicesRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={servicesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Services</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Comprehensive digital solutions designed to elevate your business and drive real results
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={servicesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-purple-500 group"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <service.icon className="text-white" size={32} />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
                <p className="text-gray-300 mb-6">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center text-gray-300">
                      <CheckCircle className="text-purple-400 mr-2" size={16} />
                      {feature}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Section */}
      <section ref={portfolioRef} className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Our <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Portfolio</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Explore our latest projects and see how we've transformed businesses across industries
            </p>
          </motion.div>

          {/* Portfolio Grid - Ready for content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 20 }}
                animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: item * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-purple-500 group"
              >
                <div className="h-48 bg-gradient-to-br from-purple-500/20 to-pink-600/20 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-6xl text-purple-400 mb-4">🚀</div>
                    <p className="text-gray-300">Project Coming Soon</p>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-2">Amazing Project {item}</h3>
                  <p className="text-gray-300 mb-4">Custom website design that increased conversions by 300%</p>
                  <div className="flex items-center text-purple-400 hover:text-purple-300 cursor-pointer">
                    <span>View Details</span>
                    <ArrowRight className="ml-2" size={16} />
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section ref={testimonialsRef} className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              What Our <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Clients Say</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Don't just take our word for it - hear from businesses we've helped transform
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={testimonialsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 border border-slate-700 hover:border-purple-500 transition-all duration-300"
              >
                <div className="flex items-center mb-6">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full mr-4 object-cover"
                  />
                  <div>
                    <h4 className="text-lg font-semibold text-white">{testimonial.name}</h4>
                    <p className="text-gray-400">{testimonial.company}</p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="text-yellow-400" size={20} fill="currentColor" />
                  ))}
                </div>
                <p className="text-gray-300">{testimonial.text}</p>
              </motion.div>
            ))}
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
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
              Ready to Start Your Digital Transformation?
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Join hundreds of businesses that have already transformed their digital presence with Matrixx Agency
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-white text-purple-600 px-8 py-4 rounded-full font-semibold hover:bg-gray-100 transition-all duration-200 transform hover:scale-105"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border-2 border-white text-white px-8 py-4 rounded-full font-semibold hover:bg-white hover:text-purple-600 transition-all duration-200"
              >
                Explore Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;