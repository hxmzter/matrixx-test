import React from "react";
import { motion } from "framer-motion";
import { CheckCircle, ArrowRight } from "lucide-react";

const ServiceCard = ({ service, index, inView }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className="bg-slate-800/50 backdrop-blur-sm rounded-2xl p-8 hover:bg-slate-800/70 transition-all duration-300 border border-slate-700 hover:border-purple-500 group"
    >
      <div className="bg-gradient-to-r from-purple-500 to-pink-600 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
        <service.icon className="text-white" size={32} />
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-4">{service.title}</h3>
      <p className="text-gray-300 mb-6">{service.description}</p>
      
      <ul className="space-y-3 mb-8">
        {service.features.map((feature, featureIndex) => (
          <li key={featureIndex} className="flex items-center text-gray-300">
            <CheckCircle className="text-purple-400 mr-3 flex-shrink-0" size={16} />
            {feature}
          </li>
        ))}
      </ul>
      
      {service.price && (
        <div className="mb-6">
          <div className="text-3xl font-bold text-white mb-2">
            {service.price}
            <span className="text-lg text-gray-400 font-normal">/project</span>
          </div>
          <p className="text-gray-400 text-sm">{service.priceNote}</p>
        </div>
      )}
      
      <button className="w-full bg-gradient-to-r from-purple-500 to-pink-600 text-white py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-700 transition-all duration-200 transform hover:scale-105 flex items-center justify-center">
        Get Started
        <ArrowRight className="ml-2" size={16} />
      </button>
    </motion.div>
  );
};

export default ServiceCard;