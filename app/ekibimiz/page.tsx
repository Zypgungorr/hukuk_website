'use client'
import TeamMemberCard from '../components/TeamMemberCard';
import { motion } from 'framer-motion';
import PageHeaderCard from '../components/PageHeaderCard';

// Animation variants
const fadeInUp = {
  hidden: { opacity: 0, y: 60 },
  visible: { 
    opacity: 1, 
    y: 0,
    transition: {
      duration: 0.5,
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

export default function Team() {
    return (
      <div className="min-h-screen bg-white">
        {/* Hero Section with Title */}
        <PageHeaderCard 
          title="Ekibimiz"
          description="Uzman kadromuz ile hukuki çözümler üretiyoruz. Gedikli Hukuk'un başarılı ekibiyle tanışın."
        />



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
