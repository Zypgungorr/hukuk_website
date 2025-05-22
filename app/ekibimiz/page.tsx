'use client'
import TeamMemberCard from '../components/TeamMemberCard';
import { motion } from 'framer-motion';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const team = [
    {
        name: "Aslı Erdem",
        title: "Avukat",
        imageSrc: "/images/law.png",
        linkedinUrl: "https://linkedin.com/in/surakaraali"
    },
    {
        name: 'Oktay Şener',
        title: 'Yönetici Ortak',
        imageSrc: '/team/oktay.jpg',
        linkedinUrl: 'https://linkedin.com/in/oktaysener'
    },
    // Diğer üyeler buraya !!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!
];

export default function EkibimizPage() {
    return (
      <div className="min-h-screen bg-white">
        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
          className="relative py-12 md:py-16 lg:py-20 bg-gray-50"
        >
          <div className="container mx-auto px-4 md:px-6">
            <motion.div 
              variants={fadeInUp}
              className="max-w-4xl mx-auto"
            >
              <motion.h1 
                variants={fadeInUp}
                className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-[#9B1B30] text-center md:text-left"
              >
                Ekibimiz
              </motion.h1>
              <motion.p 
                variants={fadeInUp}
                className="text-base md:text-lg font-light text-gray-600 mb-0 text-center md:text-left"
              >
                Ekip olarak dinamik ve yenilikçi bir ruhla çalışıyoruz. İşimize olan sevgimiz ve birliğimizle güçleniyoruz.
              </motion.p>
            </motion.div>
          </div>
        </motion.section>

        <motion.section 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          variants={staggerContainer}
          className="py-20 bg-white"
        >
          <motion.div 
            variants={staggerContainer}
            className="container mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8"
          >
            {team.map((member, index) => (
              <motion.div
                key={index}
                variants={fadeInUp}
              >
                <TeamMemberCard {...member} />
              </motion.div>
            ))}
          </motion.div>
        </motion.section>
      </div>
    );
}
