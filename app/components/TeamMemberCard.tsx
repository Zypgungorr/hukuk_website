// app/components/TeamMemberCard.tsx
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface TeamMemberProps {
  name: string;
  title: string;
  imageSrc: string;
  linkedinUrl?: string;
}

export default function TeamMemberCard({ name, title, imageSrc, linkedinUrl }: TeamMemberProps) {
  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="bg-white rounded-lg overflow-hidden shadow-md text-center"
    >
      <motion.div
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.3 }}
      >
        <Image
          src={imageSrc}
          alt={name}
          width={300}
          height={400}
          className="object-cover w-full h-[400px]"
        />
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="p-4"
      >
        <h3 className="text-lg text-rose-800 font-semibold">{name}</h3>
        <p className="text-sm text-gray-600">{title}</p>
        {linkedinUrl && (
          <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="mt-2"
          >
            <Link href={linkedinUrl} target="_blank">
              <motion.img 
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
                src="/linkedin.svg" 
                alt="LinkedIn" 
                className="mx-auto w-5 h-5" 
              />
            </Link>
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
}
