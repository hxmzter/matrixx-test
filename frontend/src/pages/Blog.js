import React from "react";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { 
  Calendar, 
  User, 
  ArrowRight, 
  TrendingUp, 
  Globe, 
  Bot, 
  Target,
  Clock,
  Search,
  Users
} from "lucide-react";

const Blog = () => {
  const [heroRef, heroInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [postsRef, postsInView] = useInView({ triggerOnce: true, threshold: 0.1 });
  const [categoriesRef, categoriesInView] = useInView({ triggerOnce: true, threshold: 0.1 });

  // Blog posts data (ready for CMS integration)
  const blogPosts = [
    {
      id: 1,
      title: "The Ultimate Guide to High-Converting Website Design in 2025",
      excerpt: "Discover the latest trends and strategies that are driving conversions for service-based businesses. Learn how to create websites that not only look stunning but also generate leads.",
      author: "Alex Rodriguez",
      date: "2025-01-15",
      category: "Website Design",
      readTime: "8 min read",
      image: "https://images.unsplash.com/photo-1680016661694-1cd3faf31c3a",
      featured: true
    },
    {
      id: 2,
      title: "AI-Powered Lead Generation: How to Automate Your Sales Pipeline",
      excerpt: "Learn how artificial intelligence is revolutionizing lead generation and how you can implement AI tools to dramatically increase your conversion rates.",
      author: "Emma Wilson",
      date: "2025-01-12",
      category: "AI & Automation",
      readTime: "6 min read",
      image: "https://images.pexels.com/photos/6153354/pexels-photo-6153354.jpeg",
      featured: false
    },
    {
      id: 3,
      title: "Google Ads vs Meta Ads: Which Platform Delivers Better ROI?",
      excerpt: "A comprehensive comparison of Google Ads and Meta advertising platforms, including when to use each and how to maximize your ad spend.",
      author: "Michael Thompson",
      date: "2025-01-10",
      category: "Digital Marketing",
      readTime: "7 min read",
      image: "https://images.unsplash.com/photo-1557838923-2985c318be48",
      featured: false
    },
    {
      id: 4,
      title: "SEO Strategies That Actually Work for Service-Based Businesses",
      excerpt: "Cut through the noise with proven SEO strategies specifically designed for service-based businesses. Get more organic traffic and qualified leads.",
      author: "Sarah Chen",
      date: "2025-01-08",
      category: "SEO",
      readTime: "9 min read",
      image: "https://images.unsplash.com/photo-1519217651866-847339e674d4",
      featured: false
    },
    {
      id: 5,
      title: "The Psychology of Color in Website Design: A Complete Guide",
      excerpt: "Understanding how color psychology impacts user behavior and conversion rates. Learn which colors drive action and which ones to avoid.",
      author: "Alex Rodriguez",
      date: "2025-01-05",
      category: "Website Design",
      readTime: "5 min read",
      image: "https://images.pexels.com/photos/1779487/pexels-photo-1779487.jpeg",
      featured: false
    },
    {
      id: 6,
      title: "Building Trust Online: Essential Elements for Service Businesses",
      excerpt: "Discover the key trust signals that convert visitors into customers. Learn how to build credibility and authority in your industry.",
      author: "Michael Thompson",
      date: "2025-01-03",
      category: "Business Strategy",
      readTime: "6 min read",
      image: "https://images.unsplash.com/photo-1531482615713-2afd69097998",
      featured: false
    }
  ];

  const categories = [
    {
      name: "Website Design",
      icon: Globe,
      count: 12,
      color: "from-purple-500 to-pink-500"
    },
    {
      name: "Digital Marketing",
      icon: TrendingUp,
      count: 8,
      color: "from-blue-500 to-purple-500"
    },
    {
      name: "AI & Automation",
      icon: Bot,
      count: 6,
      color: "from-green-500 to-blue-500"
    },
    {
      name: "SEO",
      icon: Search,
      count: 10,
      color: "from-orange-500 to-red-500"
    },
    {
      name: "Lead Generation",
      icon: Target,
      count: 7,
      color: "from-pink-500 to-purple-500"
    },
    {
      name: "Business Strategy",
      icon: Users,
      count: 5,
      color: "from-teal-500 to-green-500"
    }
  ];

  const featuredPost = blogPosts.find(post => post.featured);
  const regularPosts = blogPosts.filter(post => !post.featured);

  return (
    <div className="min-h-screen pt-20">
      {/* Hero Section */}
      <section 
        ref={heroRef}
        className="relative py-20 overflow-hidden"
        style={{
          backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('https://images.pexels.com/photos/17714158/pexels-photo-17714158.jpeg')`,
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
              Digital Marketing <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Insights</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-300 mb-8 max-w-3xl mx-auto">
              Expert strategies, actionable tips, and industry insights to help your business dominate the digital landscape
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories */}
      <section ref={categoriesRef} className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Explore by <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Category</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Find the content that's most relevant to your business needs
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((category, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={categoriesInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-6 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-purple-500 cursor-pointer group"
              >
                <div className={`bg-gradient-to-r ${category.color} w-12 h-12 rounded-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <category.icon className="text-white" size={24} />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{category.name}</h3>
                <p className="text-gray-300">{category.count} articles</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Post */}
      {featuredPost && (
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Featured <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Article</span>
              </h2>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700 hover:border-purple-500 transition-all duration-300"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="relative h-64 lg:h-auto">
                  <img
                    src={featuredPost.image}
                    alt={featuredPost.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                </div>
                <div className="p-8">
                  <div className="flex items-center mb-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {featuredPost.category}
                    </span>
                    <span className="text-purple-400 ml-4 text-sm">Featured</span>
                  </div>
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                    {featuredPost.title}
                  </h3>
                  <p className="text-gray-300 mb-6 line-clamp-3">
                    {featuredPost.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User size={16} className="mr-1" />
                        {featuredPost.author}
                      </div>
                      <div className="flex items-center">
                        <Calendar size={16} className="mr-1" />
                        {new Date(featuredPost.date).toLocaleDateString()}
                      </div>
                      <div className="flex items-center">
                        <Clock size={16} className="mr-1" />
                        {featuredPost.readTime}
                      </div>
                    </div>
                    <button className="inline-flex items-center text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      Read More
                      <ArrowRight className="ml-1" size={16} />
                    </button>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* Blog Posts Grid */}
      <section ref={postsRef} className="py-20 bg-slate-800/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={postsInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Latest <span className="bg-gradient-to-r from-purple-400 to-pink-600 bg-clip-text text-transparent">Articles</span>
            </h2>
            <p className="text-xl text-gray-300 max-w-3xl mx-auto">
              Stay ahead of the curve with our latest insights and strategies
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {regularPosts.map((post, index) => (
              <motion.article
                key={post.id}
                initial={{ opacity: 0, y: 20 }}
                animate={postsInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-purple-500 cursor-pointer group"
              >
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
                  <div className="absolute top-4 left-4">
                    <span className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-3 py-1 rounded-full text-sm font-semibold">
                      {post.category}
                    </span>
                  </div>
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-white mb-3 line-clamp-2">
                    {post.title}
                  </h3>
                  <p className="text-gray-300 mb-4 line-clamp-3">
                    {post.excerpt}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-3 text-sm text-gray-400">
                      <div className="flex items-center">
                        <User size={14} className="mr-1" />
                        {post.author}
                      </div>
                      <div className="flex items-center">
                        <Clock size={14} className="mr-1" />
                        {post.readTime}
                      </div>
                    </div>
                    <button className="text-purple-400 hover:text-purple-300 transition-colors duration-200">
                      <ArrowRight size={16} />
                    </button>
                  </div>
                </div>
              </motion.article>
            ))}
          </div>

          {/* Load More Button */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center mt-16"
          >
            <button className="bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105">
              Load More Articles
            </button>
          </motion.div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-20 bg-gradient-to-r from-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated with Our Latest Insights
            </h2>
            <p className="text-xl text-purple-100 mb-8">
              Get weekly tips and strategies delivered straight to your inbox
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-6 py-3 rounded-full text-gray-800 focus:outline-none focus:ring-2 focus:ring-white"
              />
              <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold hover:bg-gray-100 transition-colors duration-200">
                Subscribe
              </button>
            </div>
            <p className="text-purple-100 text-sm mt-4">
              No spam, unsubscribe anytime. Your privacy is protected.
            </p>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to Implement These Strategies?
            </h2>
            <p className="text-xl text-gray-300 mb-8">
              Don't just read about success - achieve it. Let's transform your digital presence together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to="/contact"
                className="inline-flex items-center bg-gradient-to-r from-purple-500 to-pink-600 text-white px-8 py-4 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105"
              >
                Get Your Free Consultation
                <ArrowRight className="ml-2" size={20} />
              </Link>
              <Link
                to="/services"
                className="inline-flex items-center border-2 border-purple-500 text-purple-400 px-8 py-4 rounded-full font-semibold hover:bg-purple-500 hover:text-white transition-all duration-200"
              >
                View Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Blog;