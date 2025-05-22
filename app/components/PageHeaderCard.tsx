'use client'
import { motion } from 'framer-motion';

interface PageHeaderCardProps {
  title: string;
  description: string;
}

export default function PageHeaderCard({ title, description }: PageHeaderCardProps) {
  return (
    <motion.section 
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="relative py-12 md:py-16 lg:py-20 bg-gray-50"
    >
      <div className="container mx-auto px-4 md:px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.5 }}
          className="max-w-4xl mx-auto"
        >
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#9B1B30] text-center md:text-left"
          >
            {title}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-base md:text-lg font-light text-gray-600 mb-0 text-center md:text-left"
          >
            {description}
          </motion.p>
        </motion.div>
      </div>
    </motion.section>
  );
}
