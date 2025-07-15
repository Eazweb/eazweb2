// src/components/MiddleLayerWrapper.tsx
'use client';

import { AnimatePresence, motion } from 'framer-motion';
import Image from 'next/image';
import { Project } from '@/lib/projects';

interface MiddleLayerWrapperProps {
  project: Project | null;
}

const MiddleLayerWrapper = ({ project }: MiddleLayerWrapperProps) => {
  return (
    <div className="fixed inset-0 w-full h-full z-[-10] pointer-events-none">
      <AnimatePresence>
        {project && (
          <motion.div key={project.id}>
            {/* Animated Small Image */}
            <motion.div
              className="absolute overflow-hidden rounded-lg" // Added overflow-hidden and rounded-lg
              style={project.position.smallImage}
              initial={project.animation.smallImage.initial}
              animate={project.animation.smallImage.animate}
              exit={project.animation.smallImage.exit}
              transition={{ duration: 0.7, ease: [0.43, 0.13, 0.23, 0.96] }}
            >
              <Image
                src={project.smallImage}
                alt={project.title}
                width={400} // Increased size for better visibility
                height={250}
                style={{ objectFit: 'cover' }}
              />
            </motion.div>

            {/* Animated Text Content */}
            <motion.div
              className="absolute w-64"
              style={project.position.content}
              initial={project.animation.content.initial}
              animate={project.animation.content.animate}
              exit={project.animation.content.exit}
              transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.1 }}
            >
              <p className="text-sm text-white">{project.content}</p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default MiddleLayerWrapper;
