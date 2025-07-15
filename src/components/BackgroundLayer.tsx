// src/components/BackgroundLayer.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/lib/projects';

interface BackgroundLayerProps {
  project: Project | null;
}

const BackgroundLayer = ({ project }: BackgroundLayerProps) => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-20]">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="w-full h-full object-cover"
        src="video/EAZWEB_HERO_3.mp4"
      />
      <div className="absolute inset-0 bg-black/50">
        <div className="absolute bottom-8 right-8 text-7xl font-bold text-white font-funnelDisplay tracking-tight">We make interfaces</div>
      </div>

      {/* Project-specific background image */}
      <AnimatePresence>
        {project && (
          <motion.div
            key={project.id}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0"
          >
            <Image
              src={project.bgImage}
              alt={project.title}
              fill
              style={{ objectFit: 'cover', filter: 'brightness(0.7)' }}
              priority
            />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default BackgroundLayer;
